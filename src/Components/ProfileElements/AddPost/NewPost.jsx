import MyButton from '../../UI/button/MyButton';
import MyInput from '../../UI/input/MyInput';
import * as styles from './NewPost.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function NewPost(props) {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const navigate = useNavigate()

    const post = (e) => {
        e.preventDefault();
        const user_id = props.user.id;
        const Post = {title, text, user_id};

        fetch('http://localhost:8080/api/post', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(Post)
        }).then(()=>{
            navigate("/news")
        })
    }

    return (
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
    )
}
  
export default NewPost;