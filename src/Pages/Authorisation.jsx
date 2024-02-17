import * as styles from "./styles/Login.module.css"
import { useEffect } from "react";
import Login from "../Components/Autorize/login";
import Cookies from "universal-cookie";

function Authorisation() {
  const cookie = new Cookies();
  
  useEffect(()=>{
    if(cookie.get('au')){
      cookie.remove('au')
    }
  }, [])

  return (
      <div className={styles.entry_container}>
          <Login/>
      </div>
  )
}
  
  export default Authorisation;