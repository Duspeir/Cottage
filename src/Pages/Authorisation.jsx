import * as styles from "./styles/Login.module.css"
import { useContext, useEffect, useState } from "react";
import Login from "../Components/Autorize/login";
import Registration from "../Components/Autorize/registration";
import { AuthContext } from "../context";
import Cookies from "universal-cookie";

function Authorisation() {
  const [log, setLog] = useState(true)
  const cookie = new Cookies();
  // const {setLoggedIn, setIsDm} = useContext(AuthContext)
  useEffect(()=>{
    if(cookie.get('au')){
      cookie.remove('au')
    }
  }, [])

  // function change_state(st) {
  //   setLog(st);
  // }

  return (
      <div className={styles.entry_container}>
          {log ? <Login/> : <Registration loggedIn={Registration}/>}
          <div className={styles.links_cn}>
              <button onClick={() => setLog(true)} className={styles.links}>Авторизация</button>
              <button onClick={() => setLog(false)} className={styles.links}>Регистрация</button>
          </div>
      </div>
  )
}
  
  export default Authorisation;