import {Link} from "react-router-dom";
import * as style from './Navbar.module.css'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import Cookies from "universal-cookie";

function Navbar(props) {
  const cookie = new Cookies();
  const [loggedIn, setLoggedIn] = useState(null)
  useEffect(() => {
    const cookieChange = () => {
      setLoggedIn(cookie.get('au'))
    }
    cookie.addChangeListener(cookieChange);

    return () => {
      cookie.removeChangeListener(cookieChange);
    }
  }, [])
  // console.log(loggedIn)
  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbar_image}>
          <Link to=""><img src="icon.ico" className={style.image}/></Link>
        </div>
        <div className={style.navbar_links}>
          <Link to="/news" className={style.navbar_link}>Новости</Link>
          <Link to="/garden" className={style.navbar_link}>Гербарий</Link>
          {loggedIn && <Link to="/profile" className={style.navbar_link}>Профиль</Link>}
          {/* <Link to="/profile" className={style.navbar_link}>Профиль</Link> */}
          {loggedIn? <Link to="/authorisation" className={style.navbar_link}>Выйти</Link>
                   : <Link to="/authorisation" className={style.navbar_link}>Войти</Link>}
        </div>
      </div>  
    </>
  )
  }
  
  export default Navbar;