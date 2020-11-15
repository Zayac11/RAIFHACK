import React from 'react'
import s from './OneClickButton.module.css'

const OneClickButton = (props) => {
    return (
        <button onClick={props.success} className={s.button}>
            {props.message}
        </button>
    )
}

export default OneClickButton;
