import * as styles from './ProfButtons.module.css'

function ProfButtons({onclick}) {

  
  return (
    <div className={styles.profButtons}>
        <button className={styles.profOptions} onClick={() => onclick(1)}>Пользователь</button>
        <button className={styles.profOptions} onClick={() => onclick(2)}>Добавить новость</button>
        <button className={styles.profOptions} onClick={() => onclick(3)}>Изменить расписание</button>
    </div>
  )
}
  
export default ProfButtons;