import React from 'react'
import s from './Top.module.css'
import raif from '../../Assets/images/raiffeisen-1.png'
import cart from '../../Assets/images/cart.png'

const Top = (props) => {
    return (
        <div className={s.top}>
            <div className={s.info}>
                <img className={s.logo} src={raif} alt="raiffeisen"/>
                <div className={s.nameContainer}>
                    <div className={s.system}>СБП</div>
                    <div className={s.minecraft}>Minecraft</div>
                </div>
            </div>
            <div className={s.cart}>
                <div className={s.checked}></div>
                <img src={cart} alt='cart'/>

            </div>
        </div>
    )
}

export default Top;
