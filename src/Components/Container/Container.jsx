import React from 'react'
import {connect} from "react-redux";
import MainContainer from "../Main/ProductContainer";
import '../../Common/style.css'
import {Route} from "react-router-dom";

class Container extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='outer'>
                <div className='container'>
                    <Route exact path={'/products/:id'} render={ () => <MainContainer /> }/>
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