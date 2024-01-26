import * as styles from './styles/Home.module.css'

function Home() {
    return (
        <div className={styles.info}>
            <div className={styles.cn}>
                <h1>Новостной сайт для сообщества садоводов</h1>
                <>
                    <p>Текущие функции: </p>
                    <li>    регистрация/авторизация, </li>
                    <li>    просмотр новостей (без необходимости входа) </li>
                    <li>    добавление/удаление новости (с обязательной авторизацией и правами)</li>
                </>
            </div>
        </div>
    )
  }
  
  export default Home;