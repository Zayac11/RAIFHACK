import {stadiumApi} from "../api/api";

let initialState = {

}

const stadiumReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export const setStadiumData = () => ({type: "type"})

export const getStadiumsData = (stadiumId) => { //Информация о стадионе
    return (dispatch) => {

    }
}

export default stadiumReducer;