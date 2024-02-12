import pool from "../../../../../db.js";

class postController {
    async createPost(req, res){
        try {
            const {title, text, user_id} = req.body;
            const newPost = await pool.query(
                'INSERT into posts (title, text, user_id) values ($1, $2, $3)', 
                [title, text, user_id]
            );
            res.json(newPost.rows);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getPost(req, res){
        try {
            const newPost = await pool.query('SELECT * FROM posts');
            res.json(newPost.rows);
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }
    async getOnePost(req, res){
        try {
            const { id } = req.params;
            const newPost = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
            res.json(newPost.rows[0]);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async updatePost(req, res){
        try {
            const { id } = req.params
            const {title, text} = req.body;
            const newPost = await pool.query(
                'UPDATE posts set title = $1, text = $2 WHERE id = $3', 
                [title, text, id]
            );
            res.json(newPost.rows);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async deletePost(req, res){
        try {
            const { id } = req.params
            pool.query(
                'DELETE FROM posts WHERE id = $1', 
                [id]
            );
            res.json(newPost.rows);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new postController();