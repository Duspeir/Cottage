import * as styles from './styles/Home.module.css'

function Home() {
    return (
        <div className={styles.info}>
            <div className={styles.cn}>
                <h1>Новостной сайт для сообщества садоводов</h1>
                <>
                    <p>Текущие функции: </p>
                    <li>    Авторизация, </li>
                    <li>    Просмотр новостей (без необходимости входа) </li>
                    <li>    добавление/удаление новости (с обязательной авторизацией и правами)</li>
                    <li>    Редактирование расписания подачи воды (с обязательной авторизацией и правами)</li>
                </>
            </div>
        </div>
    )
  }
  
  export default Home;