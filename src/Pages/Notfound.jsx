import * as styles from './styles/Not_found.module.css'

function Notfound() {

    return (
        <div className={styles.central_fnd}>
            <h1 className={styles.ctrl_h}>Ошибка 404</h1>
            <h2 className={styles.ctrl_h}>Такой страницы не существует.</h2>
        </div>
    )
  }
  
  export default Notfound;