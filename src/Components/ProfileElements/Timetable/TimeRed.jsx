import MyButton from '../../UI/button/MyButton';
import * as styles from './TimeRed.module.css'
import { useState, useEffect } from 'react';
import Timers from './Timers';

function TimeRed() {

    const [time, setTime] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const post = (e) => {
        e.preventDefault();
        time.map(post =>{
            fetch('http://localhost:8080/api/time', {
                method: 'PUT',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(post)
            })
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/api/time")
        .then(res => {
          if(!res.ok){
            throw Error('Could not fetch the data')
          }
          return res.json();
        })
        .then(data => {
          setTime(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          setIsLoading(false)
          setError(err.massage);
        })
    }, []);

    const change = (id, st, fin) => {
        time[id] = {
            ...time[id],
            start: st,
            finish: fin
        }
    }

    return (
        <form onSubmit={post} className={styles.inter}>
            {error && <div className={styles.load}>{ error }</div>}
            {isLoading && <div className={styles.load}>Loading...</div>}
            {time && time.map(time =>
                <Timers post={time} key={time.id} select={change}/>
            )}
            <div className={styles.btn}>
                <MyButton method='submit'>Изменить</MyButton>
            </div>
        </form>
    )
}
  
export default TimeRed;