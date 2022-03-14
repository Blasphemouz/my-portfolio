const express = require("express");
const authRoutes = require("./src/routes/authentication_routes");
const postRoutes = require("./src/routes/post_routes");
const commentRoutes = require("./src/routes/comment_routes");
const contactRoute = require("./src/routes/contact_route")
const logger = require("tracer").console();

const port = process.env.PORT || 4000;

const app = express();
const cors = require("cors");


if (!process.env.DISABLE_XORIGIN) {
    app.use(function(req, res, next) {
      var allowedOrigins = ['https://api.rauladamson.duckdns.org', 'https://my-portfolio.rauladamson.duckdns.org'];
      var origin = req.headers.origin || '*';
      if(!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1){
           console.log(origin);
           res.setHeader('Access-Control-Allow-Origin', origin);
           res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      }
      next();
    });
  }

app.use(express.json());

app.use(cors());


app.all(
    "*",
    (req, res, next) => {
        logger.log("Generic logging handler called");
        next();
    },
    (req, res, next) => {
        const reqMethod = req.method;
        const reqUrl = req.url;
        logger.log(reqMethod + " request at " + reqUrl);
        next();
    }
);

app.use("/api", authRoutes);
app.use("/api", postRoutes);
app.use("/api", commentRoutes);
app.use("/api", contactRoute);

app.all("*", (req, res, next) => {
    logger.log("Catch-all endpoint called");
    next({
        message: "Endpoint " + req.url + " does not exist",
        errCode: 401,
    });
});

app.use((error, req, res, next) => {
    logger.log("Errorhandler called!", error);
    res.status(error.errCode).json({
        error: error.errCode,
        message: error.message,
    });
});

app.listen(port, () => {
    logger.log(`Example app listening at https://newnew:${port}`);
});

module.exports = app;