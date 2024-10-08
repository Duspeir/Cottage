import * as styles from './styles/Post.module.css'
import MyButton from '../Components/UI/button/MyButton'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context';

const Post = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)
  const { id } = useParams();
  const navigate = useNavigate();
  const {isDm} = useContext(AuthContext)
  useEffect(() => {
    fetch("http://localhost:5001/posts/" + id)
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

  const del = (e) => {
      e.preventDefault();
      fetch('http://localhost:5001/posts/' + posts.id, {
          method: 'DELETE'
      })
      .then(() => {
          navigate("/news")
      })
  }
  
  return (
      <div className={styles.cn}>
          {error && <h1 className={styles.load}>{ error }</h1>}
          {isLoading && <h1 className={styles.load}>Loading...</h1>}
          {posts &&
            <div className={styles.inter}>
              <div className={styles.text_title}>
                <h2 className={styles.title}>{ posts.title }</h2>
              </div>
              <div className={styles.text_body}>
                <p>{ posts.text }</p>
              </div>
              {isDm &&  <div className={styles.btn}>
                          <MyButton onClick={del}>Удалить</MyButton>
                        </div>}
            </div>
          }
      </div>
  )
}
  
export default Post;