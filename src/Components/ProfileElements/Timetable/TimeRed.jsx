import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput';
import * as styles from './TimeRed.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function TimeRed() {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const navigate = useNavigate()

    const post = (e) => {
        e.preventDefault();
        const Post = {title, text};

        fetch('http://localhost:5001/posts', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(Post)
        }).then(()=>{
            navigate("/news")
        })
    }

    return (
        <form onSubmit={post} className={styles.inter}>
            <h2>Понедельник</h2>
            <div className={styles.text}>
                <h3>Начало:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
                <h3>Конец:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <h2>Вторник</h2>
            <div className={styles.text}>
                <h3>Начало:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
                <h3>Конец:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <h2>Среда</h2>
            <div className={styles.text}>
                <h3>Начало:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
                <h3>Конец:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <h2>Четверг</h2>
            <div className={styles.text}>
                <h3>Начало:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
                <h3>Конец:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <h2>Пятница</h2>
            <div className={styles.text}>
                <h3>Начало:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
                <h3>Конец:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <h2>Суббота</h2>
            <div className={styles.text}>
                <h3>Начало:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
                <h3>Конец:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <h2>Воскресенье</h2>
            <div className={styles.text}>
                <h3>Начало:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
                <h3>Конец:</h3>
                <input className={styles.put} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className={styles.btn}>
                <MyButton>Добавить</MyButton>
            </div>
        </form>
    )
}
  
export default TimeRed;