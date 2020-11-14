import React from 'react'
import s from './OneClickButton.module.css'

const OneClickButton = (props) => {
    return (
        <button className={s.button}>
            {props.message}
        </button>
    )
}

export default OneClickButton;