import React from 'react'
import s from './StoreItem.module.css'

import add from '../../../Assets/images/add.png'

const StoreItem = (props) => {
    return (
        <div className={s.itemContainer}>
            <div className={s.itemImg}>
                <img src={props.img} alt="item"/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.price}>
                <div>
                    {props.price}р
                </div>
                <button onClick={() => props.addItemCount(props.id, props.price)}>
                    <img src={add} alt="add"/>
                </button>

            </div>
        </div>
    )
}

export default StoreItem;
