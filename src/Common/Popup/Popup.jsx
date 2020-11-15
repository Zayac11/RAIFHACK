import React from 'react'
import s from './Popup.module.css'
import raif from '../../Assets/images/raiffeisen-1.png'

const Popup = (props) => {
    return (
        <>
            <img className={s.raif} src={raif} alt="raiffeisen"/>
            <div className={s.popup}>
                Оплата проведена успешно!
            </div>
        </>
    )
}

export default Popup;
