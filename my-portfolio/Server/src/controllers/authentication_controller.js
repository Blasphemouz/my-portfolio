const assert = require("assert");
const jwt = require("jsonwebtoken");
const database = require("../config/database");
const logger = require("../config/config").logger;
const jwtSecretKey = require("../config/config").jwtSecretKey;

module.exports = {
    validateLogin(req, res, next) {
        logger.info("validateLogin called");
        // Verify that we receive the expected input
        try {
            assert(typeof req.body.username === "string", "username is missing!");
            assert(typeof req.body.password === "string", "password is missing!");
            logger.info("Userdata is valid"),
            next();
        } catch (err) {
            logger.info("Userdata is invalid:", err.message);
            next({
                message: err.message,
                errCode: 400,
            });
        }
    },

    validateRegister(req, res, next) {
        logger.info("validateRegister called");
        try {
            assert(typeof req.body.username === "string", "username is missing!");
            assert(typeof req.body.email === "string", "email is missing");
            assert(typeof req.body.password === "string", "password is missing!");
            logger.info("userdata is valid!");
            next();
        } catch (err) {
            logger.debug("validateRegister error:", err.message);
            next({
                message: err.message,
                errCode: 400,
            });
        }
    },

    validateToken(req, res, next) {
        logger.info("validateToken called");
        // The headers should contain the authorization-field with value 'Bearer [token]'
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            logger.warn("Authorization header missing!");
            next({
                message: "Authorization header missing!",
                errCode: 401,
            });
        } else {
            // Strip the word 'Bearer ' from the headervalue
            const token = authHeader.substring(7, authHeader.length);

            jwt.verify(token, jwtSecretKey, (err, payload) => {
                if (err) {
                    logger.warn("Not authorized");
                    next({
                        message: "Not authorized",
                        errCode: 401,
                    });
                } else if (payload) {
                    logger.debug("token is valid", payload);
                    req.userId = payload.id;
                    next();
                }
            });
        }
    },

    login(req, res, next) {
        logger.info("authentication-controller.login called");
        database.query(
            "SELECT id, username, email, password FROM users WHERE username=$1",
            [req.body.username],
            (err, rows) => {
                if (err) {
                    logger.info("Error:", err.message);
                    next({
                        message: err.message,
                        errCode: 500,
                    });
                } else if (rows) {
                    logger.info("result from database:");
                    logger.info(rows.rows);
                    if (rows.rows.length === 1 && rows.rows[0].password === req.body.password) {
                        logger.info("passwords MATCH, sending valid token");
                        //Create an object containing the data we want in the payload
                        const payload = {
                            id: rows.rows[0].id
                        };
                        // userinfo reutrned to the caller
                        const userinfo = {
                            id: rows.rows[0].id,
                            username: rows.rows[0].username,
                            email: rows.rows[0].email,
                            token: jwt.sign(payload, jwtSecretKey, { expiresIn: "2h" }),
                        };
                        logger.debug("Logged in, sending:", userinfo);
                        res.status(200).json(userinfo);
                    } else {
                        logger.info("User not found or password invalid");
                        next({
                            message: "User not found or password invalid",
                            errCode: 400,
                        });
                    }
                }
            }
        );
    },

    register(req, res, next) {
        logger.info("register called");
        logger.info("register");
        logger.info(req.body);

        const { username, email, password } =
          req.body;
        database.query(
            "INSERT INTO users(username, email, password) VALUES ($1, $2, $3)",
            [username, email, password],
            (err, rows, fields) => {
                if (err) {
                    //If there is an error we assume the user already exists
                    logger.error("Error", err.message);
                    let message;
                    if (err.message.match("ER_DUP_ENTRY")) {
                        message = "This username is already in use";
                    } else {
                        message = err.message;
                    }
                    next({
                        message: message,
                        errCode: 400,
                    });
                } else if (rows) {
                    logger.trace(rows);
                    // Create an object containing the data we want in the payload
                    // This time we add the id of the newly inserted user
                    const payload = {
                        id: rows.insertId,
                    };
                    // Userinfo returned to the caller
                    const userinfo = {
                        id: rows.insertId,
                        username: username,
                        email: email,
                        token: jwt.sign(payload, jwtSecretKey, { expiresIn: "2h" }),
                    };
                    logger.debug("Registered", userinfo);
                    res.status(200).json(userinfo);
                }
            }
        );
    },

    renewToken(req, res, next) {
        logger.debug("renewToken");

        database.query(
            "SELECT * FROM `users` WHERE `id` = ?",
            [req.userId],
            (err, rows) => {
                if (err) {
                    logger.error("Error:", err.message);
                    next({
                        message:err.message,
                        errCode:500,
                    });
                } else if (rows) {
                    // Create an object containing the data we want in the payload
                    const payload = {
                        id: rows[0].id,
                    };
                    //Userinfo returned to the caller
                    const userinfo = {
                        id: rows[0].id,
                        username: rows[0].username,
                        email: email[0].email,
                        token: jwt.sign(payload, jwtSecretKey, { expiresIn: "2h" }),
                    };
                    logger.debug("Sending:", userinfo);
                    res.status(200).json(userinfo);
                }
            }
        );
    },
};