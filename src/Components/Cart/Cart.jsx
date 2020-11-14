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

                {props.items.map(i => <CartItem addItemCount={props.addItemCount}
                                                deleteItem={props.deleteItem}
                                                removeItemsCount={props.removeItemsCount}
                                                id={i.id} key={i.id} name={i.name} count={i.count}
                                                price={i.price} img={i.img} />)}

                <div className={s.pay}>
                    <div className={s.total}>
                        Итог:
                    </div>
                    <div className={s.total}>
                        {props.totalPrice}р
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
