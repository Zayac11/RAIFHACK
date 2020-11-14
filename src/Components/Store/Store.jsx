import '../../plugins/script.js'
import React from 'react'
import s from './Store.module.css'
import StoreItem from "./StoreItem/StoreItem";

const Store = (props) => {

    return (
        <div className={s.store}>
            <h2 className={s.title}>
                {props.name}
            </h2>

            <div className={s.catalog}>
                Каталог товаров
            </div>

            <div className={s.itemsContainer}>

                {props.items.map(i => <StoreItem addItemCount={props.addItemCount}
                                                 id={i.id} key={i.id} name={i.name} count={i.count}
                                                 price={i.price} img={i.img} />)}
            </div>

        </div>
    )
}

export default Store;
