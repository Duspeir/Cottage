import React, { useEffect, useState } from "react";
import News_i from "../Components/News_item/News_i";
import * as styles from './styles/News.module.css'
import News_sec from "../Components/News_Secured/News_sec";

function News() {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
      // setTimeout(() => {
        fetch("http://localhost:5001/posts")
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
      // }, 500)
    }, []);

    return (
      <div>
        <div className={styles.container}>
          {error && <div className={styles.load}>{ error }</div>}
          {isLoading && <div className={styles.load}>Loading...</div>}
          {posts && posts.map(post =>
            <News_i post={post} key={post.id}/>
          )}
        </div>
        <News_sec/>
      </div>
    )
  }
  
export default News;