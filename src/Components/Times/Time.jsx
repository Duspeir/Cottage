import React from "react";
import * as styles from './Time.module.css'

const Time = (props) => {
  console.log(props.post)
  return (
    <div className={styles.time_cn}>
      <div className={styles.week}>
        <h5 className={styles.title}>{props.post.name}</h5>
        <p>{props.post.start}-{props.post.end}</p>
      </div>
    </div>
  )
  }
  
export default Time;