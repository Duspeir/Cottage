import { Router } from "express";
const router = new Router();
import UserController from "./UserController/UserController.js";
import PostController from "./UserController/PostController.js";
import TimeController from "./UserController/Time.js";
import AuthController from "./UserController/AuthController.js";
import { check } from "express-validator";

router.post('/user', [
    check('login', "login не может быть пустым").notEmpty(),
    check('password', "password не может быть короче 4 символов").isLength({min: 4})
], UserController.createUser);
router.get('/user', UserController.getUsers);
router.get('/user/:id', UserController.getOneUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.post('/login', UserController.login);

router.post('/post', PostController.createPost);
router.get('/post', PostController.getPost);
router.get('/post/:id', PostController.getOnePost);
router.put('/post/:id', PostController.updatePost);
router.delete('/post/:id', PostController.deletePost);

router.get('/time', TimeController.getTime);
router.put('/time', TimeController.updateTime);

// router.get('/auth', AuthController.getUsers);


export default router;