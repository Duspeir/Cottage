import React, { useState } from "react";
import * as styles from './TimeRed.module.css'
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const week = {
    0: "Понедельник",
    1: "Вторник",
    2: "Среда",
    3: "Четверг",
    4: "Пятница",
    5: "Суббота",
    6: "Воскресенье"
}

const Timers = (props) => {
    const [start, onStart] = useState(props.post.start);
    const [finish, onFinish] = useState(props.post.finish);
    const id = props.post.id;

    // const onchange = () => {
    //     onStart(st);
    //     onFinish(fin);
    //     console.log(id, start, finish);
    //     ;
    // }

    return (
        <>
            <h2 className={styles.title}>{week[id]}</h2>
            <div className={styles.text}>
                <h3>Начало:</h3>
                <TimePicker onClockClose={() => props.select(id, start, finish)} onChange={onStart} value={start} className={styles.clock} clearIcon={null} clockIcon={null} />
                <h3>Конец:</h3>
                <TimePicker onClockClose={() => props.select(id, start, finish)} onChange={onFinish} value={finish} className={styles.clock} clearIcon={null} clockIcon={null} />
            </div>
        </>
    )
}

export default Timers;