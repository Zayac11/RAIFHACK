import React from 'react'
import {connect} from "react-redux";
import Cart from "./Cart";


import {addItemCount, deleteItem, removeItemsCount, toggleIsChecking} from "../../Redux/store-reducer";

class CartContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsChecking(false)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isChecked !== this.props.isChecked) {
            this.props.toggleIsChecking(false)
        }
    }

    render() {
        return (
            <Cart items = {this.props.items}
                  deleteItem={this.props.deleteItem}
                  addItemCount={this.props.addItemCount}
                  removeItemsCount={this.props.removeItemsCount}
                  totalPrice={this.props.totalPrice}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.shop.items,
        totalPrice: state.shop.totalPrice,
        isChecked: state.shop.isChecked,
    }
}

export default connect(mapStateToProps, {addItemCount, removeItemsCount, deleteItem, toggleIsChecking})(CartContainer)
