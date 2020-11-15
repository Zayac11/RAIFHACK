import React, {useState} from 'react'
import s from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import OneClickButton from "../../Common/OneClickButton/OneClickButton";
import Popup from "../../Common/Popup/Popup";
import Modal from "react-png-modal";

const Cart = (props) => {

    const [bIsModalOpen, setIsModalOpen] = useState(false);

    const success = () => {
        setIsModalOpen(true);
        props.deleteAllItems()
    }

    return (
        <div>
            <h2 className={s.title}>
                Сервер 228
            </h2>

            <div className={s.cart}>
                Корзина
            </div>

            <div className={s.cartItemsContainer}>


                {props.items.map(i => i.isPicked && <CartItem addItemCount={props.addItemCount}
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

                <OneClickButton success={success} message='Оплатить' />

                <div className={s.footer}>

                </div>

            </div>

            <Modal
                center
                className={s.CustomModal}
                closeModal={() => setIsModalOpen(false)}
                open={bIsModalOpen}>
                <Popup />
            </Modal>

        </div>
    )
}

export default Cart;
