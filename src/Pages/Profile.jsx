import MyInput from '../Components/UI/input/MyInput'
import * as styles from './styles/NewPost.module.css'
import MyButton from '../Components/UI/button/MyButton'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'
function Profile() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const navigate = useNavigate()
    const {loggedIn, isDm} = useContext(AuthContext)
    
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
        <div className={styles.body}>
            <div className={styles.choices}>
                <div className={styles.greet}>
                    <p>Hello, {loggedIn}!</p>
                </div>
                <div className={styles.profButtons}>
                    <button className={styles.profOptions}>Нажми</button>
                    <button className={styles.profOptions}>Нажми</button>
                    <button className={styles.profOptions}>Нажми</button>
                    <button className={styles.profOptions}>Нажми</button>
                </div>
            </div>
            <div className={styles.cn}>
                <form onSubmit={post} className={styles.inter}>
                    <div className={styles.text}>
                        <h2>Заголовок</h2>
                        <MyInput onChange={(e)=> setTitle(e.target.value)}></MyInput>
                    </div>
                    <div className={styles.text}>
                        <h2>Текст новости</h2>
                        <textarea onChange={(e)=> setText(e.target.value)}></textarea>
                    </div>
                    <div className={styles.btn}>
                        <MyButton>Добавить</MyButton>
                    </div>
                </form>
            </div>
        </div>
    )
  }
  
  export default Profile;