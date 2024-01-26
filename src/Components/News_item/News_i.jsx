import React from "react";
import * as styles from './News_i.module.css'
import MyButton from '../UI/button/MyButton'
import { useNavigate } from "react-router-dom";

const News_i = (props) => {
  const navigate = useNavigate();

  const handleClick = (cid) => {
    navigate("/news/" + cid, {replace: true})
  }

  return (
    <div className={styles.news_cn}>
      <div className={styles.news_inner}>
        <div>
            <h1 className={styles.title}>{props.post.title}</h1>
        </div>
        <div className={styles.descr}>
            <p>{props.post.text}</p>
        </div>
      </div>
      <div className={styles.btn}>
        <MyButton onClick={() => handleClick(props.post.id)}>Открыть</MyButton>
      </div>
    </div>
  )
  }
  
export default News_i;