import React from "react";
import * as styles from './Time.module.css'

const week = {
  0: "Понедельник",
  1: "Вторник",
  2: "Среда",
  3: "Четверг",
  4: "Пятница",
  5: "Суббота",
  6: "Воскресенье"
}

const Time = (props) => {
  const id = props.post.id;
  const st = props.post.start; 
  const fin = props.post.finish;
  return (
    <div className={styles.time_cn}>
      <div className={styles.week}>
        <h5 className={styles.title}>{week[id]}</h5>
        <p>{st.slice(0, -3)}-{fin.slice(0, -3)}</p>
      </div>
    </div>
  )
  }
  
export default Time;