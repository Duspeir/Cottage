import React from "react";
import * as classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return(
        <button {...props} className={classes.myButton} >
            {children}
        </button>
    ) 
}

export default MyButton;