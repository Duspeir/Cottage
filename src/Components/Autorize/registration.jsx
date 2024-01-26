import { Link, useNavigate } from "react-router-dom";
import * as styles from "./entry.module.css"
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";

function Registration() {
    const [login, setLogin] = useState('');   
    const [password, setPassword] = useState('');
    const dm = false;
    const navigate = useNavigate();
    const {setLoggedIn} = useContext(AuthContext)
    const reg = (e) => {
        e.preventDefault();
        const Post = {login, password, dm};
        fetch('http://localhost:5001/users', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(Post)
        }).then(()=>{
            setLoggedIn(login)
            navigate("/")
        })
    }


    return (
        <form onSubmit={reg} className={styles.entry_container}>
            <h1 className={styles.head}>Регистрация</h1>
            <MyInput onChange={(e)=> setLogin(e.target.value)} placeholder="Логин"/>
            <MyInput onChange={(e)=> setPassword(e.target.value)} placeholder="Пароль"/>
            <MyButton type="submit">Зарегистрироваться</MyButton>
        </form>
    )
  }
  
  export default Registration;