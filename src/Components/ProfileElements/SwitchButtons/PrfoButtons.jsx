import { useCookies } from 'react-cookie';
import * as styles from './ProfButtons.module.css'

function ProfButtons({onclick}) {
  const [cookie, setCookie] = useCookies(['au']);

  
  return (
    <div className={styles.profButtons}>
        <button className={styles.profOptions} onClick={() => onclick(1)}>Пользователь</button>
        {cookie.au.role==1 ? <button className={styles.profOptions} onClick={() => onclick(2)}>Добавить новость</button> : null}
        {cookie.au.role==1 ? <button className={styles.profOptions} onClick={() => onclick(3)}>Изменить расписание</button> : null}
        {cookie.au.role==1 ? <button className={styles.profOptions} onClick={() => onclick(4)}>Регистрация</button> : null}
    </div>
  )
}
  
export default ProfButtons;