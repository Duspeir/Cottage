import * as styles from './styles/Profile.module.css'
import { useEffect, useState } from 'react'
import ProfButtons from '../Components/ProfileElements/SwitchButtons/PrfoButtons'
import NewPost from '../Components/ProfileElements/AddPost/NewPost'
import About from '../Components/ProfileElements/About/About'
import TimeRed from '../Components/ProfileElements/Timetable/TimeRed'
import Registration from '../Components/Registration/registration'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function Profile() {
    const [state, setState] = useState(1);
    const [cookie, setCookie] = useCookies(['au']);
    const navigate = useNavigate();
    const oncl = (e) => {
        setState(e)
    }
    useEffect(() => {
        if(!cookie.au) {
            navigate('/');
        }
    }, [cookie])
    return (
        <div className={styles.body}>
            <div className={styles.choices}>
                <div className={styles.greet}>Hello, {cookie.au.name}!</div>
                <ProfButtons onclick={oncl}/>
            </div>
            <div className={styles.cn}>
                {state==1 && <About user={cookie.au}/>}
                {state==2 && <NewPost user={cookie.au}/>}
                {state==3 && <TimeRed/>}
                {state==4 && <Registration/>}
            </div>
        </div>
    )
  }
  
  export default Profile;