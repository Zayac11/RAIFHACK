import React from 'react'
import {connect} from "react-redux";
import Store from "./Store";
import {withRouter} from "react-router-dom";
import {getStoreData} from "../../Redux/store-reducer";

class StoreContainer extends React.Component {

    componentDidMount() {
        const storeId = this.props.match.params.id
        this.props.getStoreData(storeId)
    }

    render() {
        return (
            <Store name={this.props.name} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.shop.id,
        name: state.shop.name,
        email: state.shop.email,
    }
}

let WithStoreContainerUrl = withRouter(StoreContainer);

export default connect(mapStateToProps, {getStoreData})(WithStoreContainerUrl)