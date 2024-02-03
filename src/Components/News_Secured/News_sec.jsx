import React from "react";
import * as styles from './News_sec.module.css'
import MyButton from '../UI/button/MyButton'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Time from "../Times/time";

const News_sec = (props) => {

  const navigate = useNavigate();
  const [time, setTime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
      fetch("http://localhost:8080/api/time")
      .then(res => {
        if(!res.ok){
          throw Error('Could not fetch the data')
        }
        return res.json();
      })
      .then(data => {
        setTime(data)
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        setIsLoading(false)
        setError(err.massage);
      })
  }, []);

  return (
    <div className={styles.news_cn}>
      <div className={styles.news_inner}>
        <div>
            <h1 className={styles.title}>Расписание<br/>подачи воды</h1>
        </div>
        <div className={styles.descr}>
            {error && <div className={styles.load}>{ error }</div>}
            {isLoading && <div className={styles.load}>Loading...</div>}
            {time && time.map(post =>
                <Time post={post} key={post.id}/>
            )}
        </div>
      </div>
    </div>
  )
  }
  
export default News_sec;