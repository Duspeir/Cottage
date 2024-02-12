import * as styles from './styles/Profile.module.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../context'
import ProfButtons from '../Components/ProfileElements/SwitchButtons/PrfoButtons'
import NewPost from '../Components/ProfileElements/AddPost/NewPost'
import About from '../Components/ProfileElements/About/About'
import TimeRed from '../Components/ProfileElements/Timetable/TimeRed'
import Cookies from 'universal-cookie'

function Profile() {
    // const {loggedIn, isDm} = useContext(AuthContext)
    const [state, setState] = useState(1);
    const cookie = new Cookies();
    const user = cookie.get('au');
    const oncl = (e) => {
        setState(e)
    }

    return (
        <div className={styles.body}>
            <div className={styles.choices}>
                <div className={styles.greet}>
                    <p>Hello, {user.name}!</p>
                </div>
                <ProfButtons onclick={oncl}/>
            </div>
            <div className={styles.cn}>
                {state==1 && <About/>}
                {state==2 && <NewPost user={user}/>}
                {state==3 && <TimeRed/>}
            </div>
        </div>
    )
  }
  
  export default Profile;