import pool from "../../../../../db.js";
import bcrypt from "bcrypt"
import { validationResult } from "express-validator";
import { secret } from "../config.js";
import Jwt from "jsonwebtoken";
const jwt = Jwt;

const generateAccessToken = (id, login, role) =>{
    const payload = {
        id,
        login,
        role
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class userController {
    async createUser(req, res){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }
            const {login, password, name, address, role} = req.body;
            const candidate = await pool.query("SELECT login from users WHERE login=$1",
            [login]);
            if(candidate.rows.length===1){
                return res.status(400).json({message: "Пользователь с таким именем уже зарегистрирован"})
            }
            const hashPass = bcrypt.hashSync(password, 7);
            const newPerson = await pool.query(
                'INSERT into users (login, password, name, address, role) values ($1, $2, $3, $4, $5) RETURNING *', 
                [login, hashPass, name, address, role]
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
    async login(req, res){
        try {
            const { login, password } = req.body;
            const newPerson = await pool.query('SELECT * FROM users WHERE login = $1', [login]);
            if(!newPerson){
                return res.status(400).json({message: `Пользователь ${login} не найден`});
            }
            const validPassword = bcrypt.compareSync(password, newPerson.rows[0].password);
            if(!validPassword){
                return res.status(400).json({message: `Введён не верный пароль`});
            }
            const token = generateAccessToken(newPerson.rows[0].id, newPerson.rows[0].login, newPerson.rows[0].role);
            // const { setTokenInLocalStorage, getTokenFromLocalStorage } = useJwt();
            // setTokenInLocalStorage(yourGeneratedToken);
            // localStorage.setItem('token', token)
            res.json({
                user: {
                    id: newPerson.rows[0].id,
                    login: newPerson.rows[0].login,
                    name: newPerson.rows[0].name,
                    role: newPerson.rows[0].role
                }
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new userController();