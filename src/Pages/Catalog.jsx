import * as styles from './styles/Catalog.module.css'

function Catalog() {
    return (
        <div className={styles.back}>
            <div className={styles.cn}>
                <h1>Список растений</h1>
            </div>
            <div className={styles.filter}>
                <h1>Фильтры</h1>
            </div>
        </div>
    )
  }
  
  export default Catalog;