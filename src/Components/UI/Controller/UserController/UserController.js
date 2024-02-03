import pool from "../../../../../db.js";

class userController {
    async createUser(req, res){
        try {
            const {login, password, name, address} = req.body;
            const newPerson = await pool.query(
                'INSERT into users (login, password, name, address) values ($1, $2, $3, $4) RETURNING *', 
                [login, password, name, address]
            )
            res.json(newPerson.rows);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getUsers(req, res){
        try {
            const newPerson = await pool.query('SELECT * FROM users');
            res.json(newPerson.rows);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async getOneUser(req, res){
        try {
            const { id } = req.params
            const newPerson = await pool.query('SELECT * FROM users WHERE id = $1', [id])
            res.json(newPerson.rows)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async updateUser(req, res){
        try {
            const { id } = req.params
            const {login, password, name, address} = req.body;
            const newPerson = await pool.query(
                'UPDATE users set login = $1, password = $2, name = $3, address = $4 WHERE id = $5', 
                [login, password, name, address, id]
            );
            res.json(newPerson.rows);
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async deleteUser(req, res){
        try {
            const { id } = req.params
            pool.query(
                'DELETE FROM users WHERE id = $1', 
                [id]
            );
            res.json(newPerson.rows);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new userController();