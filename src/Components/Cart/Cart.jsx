import React from 'react'
import s from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import OneClickButton from "../../Common/OneClickButton/OneClickButton";

const Cart = (props) => {
    return (
        <div>
            <h2 className={s.title}>
                Сервер 228
            </h2>

            <div className={s.cart}>
                Корзина
            </div>

            <div className={s.cartItemsContainer}>
                <CartItem />
                <CartItem />
                <CartItem />

                <div className={s.pay}>
                    <div className={s.total}>
                        Итог:
                    </div>
                    <div className={s.total}>
                        750р
                    </div>
                </div>

                <OneClickButton message='Оплатить в один клик' />

                <div className={s.footer}>

                </div>

            </div>



        </div>
    )
}

export default Cart;
