import React from 'react'
import add from '../../../Assets/images/add.png'
import minus from '../../../Assets/images/minus.png'
import cross from '../../../Assets/images/cross.png'
import s from './CartItem.module.css'

const CartItem = (props) => {
    return (
        <div className={s.itemContainer}>
            <div className={s.itemImg}>
                <img src={props.img} alt="item"/>
            </div>

            <div className={s.content}>
                <div className={s.title}>
                    {props.name}
                </div>
                <div className={s.setting}>
                    <div className={s.count}>
                        {
                            props.count === 0 ? <button disabled onClick={ () => props.removeItemsCount(props.id)}><img src={minus} alt="minus"/></button>
                            : <button onClick={ () => props.removeItemsCount(props.id)}><img src={minus} alt="minus"/></button>
                        }
                        {props.count}
                        <button onClick={ () => props.addItemCount(props.id)}><img src={add} alt="plus"/></button>
                    </div>
                    <div className={s.price}>
                        {props.price}р
                    </div>
                </div>
            </div>

            <button onClick={() => props.deleteItem(props.id)} className={s.deleteItem}>
                <img src={cross} alt="delete item"/>
            </button>

        </div>
    )
}

export default CartItem;
