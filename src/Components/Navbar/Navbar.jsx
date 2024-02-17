import {Link} from "react-router-dom";
import * as style from './Navbar.module.css'
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookie, setCookie] = useCookies(['au'])

  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbar_image}>
          <Link to=""><img src="icon.ico" className={style.image}/></Link>
        </div>
        <div className={style.navbar_links}>
          <Link to="/news" className={style.navbar_link}>Новости</Link>
          <Link to="/garden" className={style.navbar_link}>Гербарий</Link>
          {/* {console.log(cook)} */}
          {cookie.au && <Link to="/profile" className={style.navbar_link}>Профиль</Link>}
          {cookie.au && <Link to="/profile" className={style.navbar_link}>Форум</Link>}
          {/* <Link to="/profile" className={style.navbar_link}>Профиль</Link> */}
          {cookie.au? <Link to="/authorisation" className={style.navbar_link}>Выйти</Link>
                   : <Link to="/authorisation" className={style.navbar_link}>Войти</Link>}
        </div>
      </div>  
    </>
  )
  }
  
  export default Navbar;