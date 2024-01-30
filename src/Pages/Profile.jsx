import * as styles from './styles/Profile.module.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../context'
import ProfButtons from '../Components/ProfileElements/SwitchButtons/PrfoButtons'
import NewPost from '../Components/ProfileElements/AddPost/NewPost'
import About from '../Components/ProfileElements/About/About'
import TimeRed from '../Components/ProfileElements/Timetable/TimeRed'

function Profile() {
    const {loggedIn, isDm} = useContext(AuthContext)
    const [state, setState] = useState(1);

    const oncl = (e) => {
        setState(e)
    }

    return (
        <div className={styles.body}>
            <div className={styles.choices}>
                <div className={styles.greet}>
                    <p>Hello, {loggedIn}!</p>
                </div>
                <ProfButtons onclick={oncl}/>
            </div>
            <div className={styles.cn}>
                {state==1 && <About/>}
                {state==2 && <NewPost/>}
                {state==3 && <TimeRed/>}
            </div>
        </div>
    )
  }
  
  export default Profile;