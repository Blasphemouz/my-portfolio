const loglevel = process.env.LOGLEVEL || "trace";

module.exports = {
    dbconfig: {
        host: process.env.DB_HOST || "192.168.1.132",
        port: process.env.DB_PORT || 5432,
        user: process.env.DB_USER || "blasphemous",
        database: process.env.DB_DATABASE || "database1",
        password: process.env.DB_PASSWORD || "53359385and123",
        multipleStatements: true,
        max: 10,
    },

    jwtSecretKey: process.env.SECRET || "secret",

    logger: require("tracer").console({
        format: ["{{timestamp}} [{{title}}] {{file}}:{{line}} : {{message}}"],
        preprocess: function (data) {
            data.title = data.title.toUpperCase();
        },
        dateformat: "isoUtcDateTime",
        level: loglevel,
    }),
};  