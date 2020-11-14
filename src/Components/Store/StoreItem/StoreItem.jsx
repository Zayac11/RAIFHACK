import React from 'react'
import s from './StoreItem.module.css'

import add from '../../../Assets/images/add.png'

const StoreItem = (props) => {
    return (
        <div className={s.itemContainer}>
            <div className={s.itemImg}>
                <img src={add} alt="item"/>
            </div>
            <div className={s.name}>
                Название
            </div>
            <div className={s.price}>
                <div>
                    100р
                </div>
                <button>
                    <img src={add} alt="add"/>
                </button>


            </div>
        </div>
    )
}

export default StoreItem;
