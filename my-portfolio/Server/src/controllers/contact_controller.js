const database = require("../config/database");

module.exports = {
    contactToDB(req, res, next) {
        const values = [ req.body.name, 
            req.body.email,
            req.body.message]
        
        database.query(`INSERT INTO contact(name, email, message, date_created)
              VALUES($1, $2, $3, NOW() )`,
           values, (q_err, q_res) => {
          if(q_err) return next(q_err);
          res.json(q_res.rows)
        })
    }

}