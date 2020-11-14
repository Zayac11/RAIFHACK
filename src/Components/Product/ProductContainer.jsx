import React from 'react'
import {connect} from "react-redux";
import Product from "./Product";
import {getProductData} from "../../Redux/product-reducer";
import {withRouter} from "react-router-dom";

class ProductContainer extends React.Component {

    componentDidMount() {
        const productId = this.props.match.params.id
        this.props.getProductData(productId)
    }

    render() {
        return (
            <Product id={this.props.id}
                     img={this.props.img}
                     name={this.props.name}
                     price={this.props.price}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.product.id,
        img: state.product.img,
        name: state.product.name,
        price: state.product.price,
    }
}

let WithProductContainer = withRouter(ProductContainer);

export default connect(mapStateToProps, {getProductData})(WithProductContainer)