import React from 'react'
import {connect} from "react-redux";
import Top from "./Top";

class TopContainer extends React.Component {



    render() {
        return (
            <Top isChecked={this.props.isChecked} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isChecked: state.shop.isChecked
    }
}

export default connect(mapStateToProps, {})(TopContainer)
