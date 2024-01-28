import * as styles from './ProfButtons.module.css'
import { useNavigate } from 'react-router-dom'

function ProfButtons() {


    return (
        <div className={styles.profButtons}>
            <button className={styles.profOptions}>Пользователь</button>
            <button className={styles.profOptions}>Добавить новость</button>
            <button className={styles.profOptions}>Изменить расписание</button>
        </div>
    )
  }
  
  export default ProfButtons;