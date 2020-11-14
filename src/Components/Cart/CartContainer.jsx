import React from 'react'
import {connect} from "react-redux";
import Cart from "./Cart";

import dSword from '../../Assets/images/diamond-sword-25716.png'
import dAxe from '../../Assets/images/diamond-axe-25732.png'
import gAxe from '../../Assets/images/gold-axe-25731.png'
import gSword from '../../Assets/images/gold-sword-25715.png'


class CartContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
            {
                id: 0,
                name: "Алмазный меч",
                count: 0,
                price: 100,
                img: dSword
            },
            {
                id: 1,
                name: "Алмазный топор",
                count: 0,
                price: 80,
                img: dAxe
            },
            {
                id: 2,
                name: "Золотой меч",
                count: 0,
                price: 70,
                img: gSword
            },
            {
                id: 3,
                name: "Золотой топор",
                count: 0,
                price: 50,
                img: gAxe
            },
            ],
            totalPrice: 0
        }

        this.addItemCount = this.addItemCount.bind(this)
        this.removeItemsCount = this.removeItemsCount.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

    }

    addItemCount(id, countPrice) {
        this.setState({
            items: this.state.items.map(item => item.id === id ?
                ({
                    ...item,
                    count: item.count + 1,
                }): {...item}
            ),
            totalPrice: countPrice + this.state.totalPrice
        })
    }

    removeItemsCount(id, countPrice) {
        this.setState({
            items: this.state.items.map(item => item.id === id && item.count > 0 ?
                ({
                    ...item,
                    count: item.count - 1
                }): {...item}
            ),

            totalPrice: this.state.totalPrice - countPrice

        })
    }

    deleteItem(id, countPrice, count) {
        this.setState({
            items: this.state.items.filter(
                (i) => {
                    return i.id !== id
                }
            ),

            totalPrice: this.state.totalPrice - count * countPrice

        })
    }

    render() {
        return (
            <Cart items = {this.state.items}
                  deleteItem={this.deleteItem}
                  addItemCount={this.addItemCount}
                  removeItemsCount={this.removeItemsCount}
                  totalPrice={this.state.totalPrice}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(CartContainer)
