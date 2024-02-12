import pool from "../../../../../db.js";
import bcrypt from "bcrypt"
class AuthController {
    async registration(req, res){
        try {
            const {login, password} = req.body;
            const candidate = await pool.query("SELECT * from users WHERE login=$1",
            [login]);
            if(candidate){
                return res.status(400).json({message: "Пользователь с таким именем уже зарегистрирован"})
            }
            const hashPass = bcrypt.hashSync(password, 7);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async login(req, res){
        try {
            // const {start, finish, id} = req.body;
            // const newTime = await pool.query(
            //     'UPDATE timetable set start=$1::time, finish=$2::time WHERE id=$3 RETURNING *', 
            //     [start, finish, id]
            // );
            // res.json(newTime.rows);
            res.json("Server works");
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getUsers(req, res){
        try {
            res.json("Server works");
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new AuthController();