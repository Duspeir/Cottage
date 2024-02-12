import { useNavigate } from "react-router-dom";
import * as styles from "./entry.module.css"
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useState } from "react";
import Cookies from "universal-cookie";

function Login(props) {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
    const cookie = new Cookies();
    const auth = (e) => {
      e.preventDefault();
      fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          "login": login, 
          "password": password
        })
      }).then(res => {
        if(!res.ok){
          console.log(login, password)
          throw Error('Could not fetch the data')
        }
        return res.json();
      })
      .then(data => {
        cookie.set('au', data['user'], {maxAge: 60*60})
        navigate('/profile')
      })
    }

    return (
        <form onSubmit={auth} className={styles.entry_container}>
            <h1 className={styles.head}>Авторизация</h1>
            <MyInput onChange={(e)=> setLogin(e.target.value)} placeholder="Логин"/>
            <MyInput onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Пароль"/>
            <MyButton>Войти</MyButton>
        </form>
    )
  }
  
  export default Login;