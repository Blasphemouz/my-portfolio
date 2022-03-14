const database = require("../config/database");

module.exports = {
    getAllPosts(req, res, next) {
        database.query(`SELECT * FROM posts 
                    ORDER BY date_created DESC`, 
                    (q_err, q_res) => {
                        res.json(q_res.rows)
                    })
    },
    getPost(req, res, next) {
        const post_id = req.query.post_id

        database.query(`SELECT * FROM posts WHERE pid=$1`,
        [ post_id ], (q_err, q_res) => {
            res.json(q_res.rows)
        })
    },
    postToDB(req, res, next) {
        const values = [ req.body.title, 
            req.body.body,
            req.body.user_id, 
            req.body.username]
        
        database.query(`INSERT INTO posts(title, body, user_id, author, date_created)
              VALUES($1, $2, $3, $4, NOW() )`,
           values, (q_err, q_res) => {
          if(q_err) return next(q_err);
          res.json(q_res.rows)
        })
    },
    updatePost(req, res, next) {
        const values = [ req.body.title,
            req.body.body, 
            req.body.user_id, 
            req.body.pid, 
            req.body.username]

            database.query(`UPDATE posts SET title= $1, body=$2, user_id=$3, author=$5, date_created=NOW()
            WHERE pid = $4`, values,
            (q_err, q_res) => {
              console.log(q_res)
              console.log(q_err)
            })
    },
    deletePost(req, res, next){
        const post_id = req.body.post_id
        
        database.query(`DELETE FROM posts WHERE pid = $1`, [ post_id ],
            (q_err, q_res) => {
                res.json(q_res.rows)
                console.log(q_err)
        })
    },
    putLikes(req, res, next){
        const id = [req.body.uid]
        const post_id = String(req.body.post_id)

        const values = [ id, post_id ]
        console.log(values)
        database.query(`UPDATE posts
                    SET like_user_id = like_user_id || $1, likes = likes + 1
                    WHERE NOT (like_user_id @> $1)
                    AND pid = ($2)`,
            values, (q_err, q_res) => {
                if (q_err) return next(q_err);
                console.log(q_res)
                res.json(q_res.rows);
            });
    },

}