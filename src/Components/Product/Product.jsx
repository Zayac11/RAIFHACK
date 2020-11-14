import React from 'react'
import s from './Product.module.css'
import minecraft from '../../Assets/images/minecraft.png'
import OneClickButton from "../../Common/OneClickButton/OneClickButton";
import {NavLink} from "react-router-dom";
import plus from '../../Assets/images/plus.png'

const Product = (props) => {

    // const [bIsModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={s.main}>

            <h2 className={s.greeting}>
               Привет, NICKNAME!!!!
                <img src={minecraft} alt="minecraft icon"/>
            </h2>


            <div className={s.itemContainer}>
                <div className={s.imageContainer}>
                    <img src={props.img} alt="item"/>
                </div>
                <div className={s.item}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.price}>
                        Цена: {props.price} руб.
                    </div>
                </div>

                <OneClickButton message={'Купить в один клик'} />
            </div>

            <div className={s.notice}>
                После добавления товара в корзину Вы попададёте на  главную страницу Магазина
            </div>

            <div>
                <button className={s.addCart}>
                    <img src={plus} alt="add"/> Добавить в корзину
                </button>

                <NavLink to='#' className={s.footer}>
                    Перейти в магазин
                </NavLink>
            </div>

            {/*<Modal*/}
            {/*    center*/}
            {/*    className={s.CustomModal}*/}
            {/*    closeModal={() => setIsModalOpen(false)}*/}
            {/*    open={bIsModalOpen}>*/}
            {/*    <Popup />*/}
            {/*</Modal>*/}

        </div>
    )
}

export default Product;
