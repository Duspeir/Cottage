import React from "react";
import * as styles from './News_sec.module.css'
import MyButton from '../UI/button/MyButton'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Time from "../Times/time";

const News_sec = (props) => {

  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
      fetch("http://localhost:5001/timetable")
      .then(res => {
        if(!res.ok){
          throw Error('Could not fetch the data')
        }
        return res.json();
      })
      .then(data => {
        setPosts(data)
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        setIsLoading(false)
        setError(err.massage);
      })
  }, []);

  const handleClick = (cid) => {
    navigate("/news/" + cid, {replace: true})
  }

  return (
    <div className={styles.news_cn}>
      <div className={styles.news_inner}>
        <div>
            <h1 className={styles.title}>Расписание<br/>подачи воды</h1>
        </div>
        <div className={styles.descr}>
            {error && <div className={styles.load}>{ error }</div>}
            {isLoading && <div className={styles.load}>Loading...</div>}
            {posts && posts.map(post =>
                <Time post={post} key={post.id}/>
            )}
        </div>
      </div>
    </div>
  )
  }
  
export default News_sec;