const { Pool } = require("pg");
const logger = require("./config").logger;
const dbconfig = require("./config").dbconfig;

const pool = new Pool(dbconfig);

pool.on("connection", function (connection) {
    logger.trace("Database connection established");
});

pool.on("acquire", function (connection) {
    logger.trace("Database connection acquired");
});

pool.on("release", function (connection) {
    logger.trace("Database connection released");
});

module.exports = pool