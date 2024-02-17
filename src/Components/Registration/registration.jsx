import * as styles from "./registration.module.css"
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useState } from "react";

function Registration(props) {
    const [login, setLogin] = useState('');   
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState(2);
    const reg = (e) => {
        e.preventDefault();
        const Post = {login, password, name, address, role};
        fetch('http://localhost:8080/api/user', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(Post)
        }).then(()=>{
            alert("Пользователь зарегистрирован!")
        })
    }


    return (
        <form onSubmit={reg} className={styles.entry_container}>
            <h1 className={styles.head}>Регистрация</h1>
            <MyInput onChange={(e)=> setLogin(e.target.value)} placeholder="Логин"/>
            <MyInput onChange={(e)=> setPassword(e.target.value)} placeholder="Пароль"/>
            <MyInput onChange={(e)=> setName(e.target.value)} placeholder="ФИО"/>
            <MyInput onChange={(e)=> setAddress(e.target.value)} placeholder="Адрес"/>
            <span className={styles.select_cn}>
                <select className={styles.select} tabIndex={-1} onChange={(e) => setRole(e.target.value)} defaultValue={0}>
                    <option value={0} disabled hidden>Выберите роль</option>
                    <option value={2}>Пользователь</option>
                    <option value={1}>Администратор</option>
                </select>
            </span>
            <MyButton type="submit">Зарегистрироваться</MyButton>
        </form>
    )
  }
  
  export default Registration;