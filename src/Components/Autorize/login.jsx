import { Link, useNavigate } from "react-router-dom";
import * as styles from "./entry.module.css"
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";

function Login() {
    
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const {setLoggedIn, setIsDm} = useContext(AuthContext);
    // const {log} = useContext(LgIN);
    const auth = (e) => {
      e.preventDefault()
      fetch("http://localhost:5001/users?login=" + login + "&password=" + password)
        .then(res => {
          if(!res.ok){
            throw Error('Could not fetch the data')
          }
          return res.json();
        })
        .then(data => {
          if(data.length===0){
            setError('Неверные данные!');
          } else{
            navigate('/profile')
            setError(null)
            setLoggedIn(login)
            if(data[0].dm === true){
              setIsDm(true)
            }
          }
        })
    }

    return (
        <form onSubmit={auth} className={styles.entry_container}>
            <h1 className={styles.head}>Авторизация</h1>
            <MyInput onChange={(e)=> setLogin(e.target.value)} placeholder="Логин"/>
            <MyInput onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Пароль"/>
            <MyButton>Войти</MyButton>
            {error && 
            <div className={styles.err}>
              <h2>{error}</h2>
            </div>}
        </form>
    )
  }
  
  export default Login;