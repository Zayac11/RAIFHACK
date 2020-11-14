import React from 'react'
import s from './Product.module.css'
import sea from '../../Assets/images/sea.jpg'
import OneClickButton from "../../Common/OneClickButton/OneClickButton";

const Product = (props) => {

    return (
        <div className={s.main}>
            <h2 className={s.greeting}>
               Привет, NICKNAME!!!!
            </h2>

            <div className={s.imageContainer}>
                <img src={props.img} alt="item"/>
            </div>

            <div className={s.itemContainer}>
                <div className={s.item}>
                    {props.name}
                </div>
                <div className={s.price}>
                    {props.price}
                </div>
            </div>

            <OneClickButton message={'Купить в один клик'} />
            <OneClickButton message={'Добавить в корзину и продолжить покупки'} />

            <div className={s.footer}>
                Перейти к другим товарам магазина
            </div>

        </div>
    )
}

export default Product;