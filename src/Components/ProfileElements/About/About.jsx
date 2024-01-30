import { useState, useEffect, useContext } from 'react';
import * as styles from './About.module.css'
import { AuthContext } from '../../../context';
import { useNavigate } from 'react-router-dom';

function About() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const {loggedIn, isDm} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:5001/users?login=" + loggedIn)
        .then(res => {
          if(!res.ok){
            throw Error('Could not fetch the data')
          }
          return res.json();
        })
        .then(data => {
          setData(data)
          setIsLoading(false)
          setError(null)
        })
        .catch(err => {
          setIsLoading(false)
          setError(err.massage);
        })
    }, []);

    return (
        <div className={styles.cn}>
          {error && <div className={styles.load}>{ error }</div>}
          {isLoading && <div className={styles.load}>Loading...</div>}
          {data && 
            <div className={styles.text}>
              <h2>ФИО: {data[0].name}</h2>
              <h2>Адресс: {data[0].address}</h2>
            </div>}
        </div>
    )
}
  
export default About;