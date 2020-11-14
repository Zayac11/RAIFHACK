import React from 'react'
import {connect} from "react-redux";
import '../../Common/style.css'
import {Route} from "react-router-dom";
import ProductContainer from "../Product/ProductContainer";
import StoreContainer from "../Store/StoreContainer";
import TopContainer from "../Top/TopContainer";
import CartContainer from "../Cart/CartContainer";

class Container extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='outer'>
                <div className='container'>
                    <TopContainer />
                    <Route exact path={'/products/:id'} render={ () => <ProductContainer /> }/>
                    <Route exact path={'/stores/:id'} render={ () => <StoreContainer /> }/>
                    <Route exact path={'/cart'} render={ () => <CartContainer /> }/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {mapStateToProps})(Container)
