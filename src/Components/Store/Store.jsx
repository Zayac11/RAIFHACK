import '../../plugins/script.js'
import React from 'react'
import s from './Store.module.css'
import StoreItem from "./StoreItem/StoreItem";

const Store = (props) => {

   //Ебаная библиотека не подключается

    return (
        <div className={s.store}>
            <h2 className={s.title}>
                {props.name}
            </h2>

            <div className={s.itemsContainer}>
                <StoreItem />
                <StoreItem />
            </div>

        </div>
    )
}

export default Store;