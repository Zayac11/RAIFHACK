import React from 'react'
import {connect} from "react-redux";
import Store from "./Store";
import {withRouter} from "react-router-dom";
import {addItemCount, getStoreData} from "../../Redux/store-reducer";



class StoreContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const storeId = this.props.match.params.id
        this.props.getStoreData(storeId)
    }

    render() {
        return (
            <Store name={this.props.name} items={this.props.items} addItemCount={this.props.addItemCount}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.shop.id,
        name: state.shop.name,
        email: state.shop.email,
        items: state.shop.items,
    }
}

let WithStoreContainerUrl = withRouter(StoreContainer);

export default connect(mapStateToProps, {getStoreData, addItemCount})(WithStoreContainerUrl)
