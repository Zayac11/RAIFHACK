import React from 'react'
import {connect} from "react-redux";
import Cart from "./Cart";

class CartContainer extends React.Component {
    render() {
        return (
            <Cart />
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(CartContainer)
