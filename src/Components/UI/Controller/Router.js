import { Router } from "express";
const router = new Router();
import UserController from "./UserController/UserController.js";
import PostController from "./UserController/PostController.js";
import TimeController from "./UserController/Time.js";

router.post('/user', UserController.createUser);
router.get('/user', UserController.getUsers);
router.get('/user/:id', UserController.getOneUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

router.post('/post', PostController.createPost);
router.get('/post', PostController.getPost);
router.get('/post/:id', PostController.getOnePost);
router.put('/post/:id', PostController.updatePost);
router.delete('/post/:id', PostController.deletePost);

router.get('/time', TimeController.getTime);
router.put('/time', TimeController.updateTime);

export default router;