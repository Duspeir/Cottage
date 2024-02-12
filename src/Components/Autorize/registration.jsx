import { Link, useNavigate } from "react-router-dom";
import * as styles from "./entry.module.css"
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useContext, useState } from "react";

function Registration(props) {
    const [login, setLogin] = useState('');   
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const role = 1;
    const navigate = useNavigate();
    const reg = (e) => {
        e.preventDefault();
        const Post = {login, password, name, address, role};
        fetch('http://localhost:8080/api/user', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(Post)
        }).then(()=>{
            // props.change(true)
            navigate("/")
        })
    }


    return (
        <form onSubmit={reg} className={styles.entry_container}>
            <h1 className={styles.head}>Регистрация</h1>
            <MyInput onChange={(e)=> setLogin(e.target.value)} placeholder="Логин"/>
            <MyInput onChange={(e)=> setPassword(e.target.value)} placeholder="Пароль"/>
            <MyInput onChange={(e)=> setName(e.target.value)} placeholder="ФИО"/>
            <MyInput onChange={(e)=> setAddress(e.target.value)} placeholder="Адрес"/>
            <MyButton type="submit">Зарегистрироваться</MyButton>
        </form>
    )
  }
  
  export default Registration;