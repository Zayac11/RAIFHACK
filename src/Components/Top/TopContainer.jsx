import React from 'react'
import {connect} from "react-redux";
import Top from "./Top";

class TopContainer extends React.Component {
    render() {
        return (
            <Top />
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {mapStateToProps})(TopContainer)
