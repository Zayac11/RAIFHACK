import React from 'react'
import add from '../../../Assets/images/add.png'
import minus from '../../../Assets/images/minus.png'
import cross from '../../../Assets/images/cross.png'
import s from './CartItem.module.css'

const CartItem = (props) => {
    return (
        <div className={s.itemContainer}>
            <div className={s.itemImg}>
                <img src={add} alt="item"/>
            </div>

            <div className={s.content}>
                <div className={s.title}>
                    Название
                </div>
                <div className={s.setting}>
                    <div className={s.count}>
                        <button><img src={minus} alt="minus"/></button> 1 <button><img src={add} alt="plus"/></button>
                    </div>
                    <div className={s.price}>
                        100р
                    </div>
                </div>
            </div>

            <button className={s.deleteItem}>
                <img src={cross} alt="delete item"/>
            </button>

        </div>
    )
}

export default CartItem;
