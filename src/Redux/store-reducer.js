import {storeApi} from "../api/api";

const GET_STORE_DATA = 'GET_STORE_DATA'

let initialState = {
    id: 0,
    name: "",
    email: "",
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_STORE_DATA: {
            return {
                ...state,
                id: action.store.id,
                name: action.store.name,
                email: action.store.email,
            }
        }

        default:
            return state;
    }
}

export const setStoreData = (store) => ({type: GET_STORE_DATA, store})

export const getStoreData = (storeId) => { //Информация о магазине конкретного сервера
    return async (dispatch) => {
        let response = await storeApi.getStoreData(storeId)

        if (response.status === 200) {
            dispatch(setStoreData(response.data))
        }
    }
}

export default storeReducer;