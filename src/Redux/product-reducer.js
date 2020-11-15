import {productApi} from "../api/api";

const SET_PRODUCT_DATA = 'SET_PRODUCT_DATA'

let initialState = {
    id: 0,
    img: "",
    name: "",
    price: 1,
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_DATA: {
        }
            return {
                ...state,
                id:action.product.id,
                img: action.product.img,
                name: action.product.name,
                price: action.product.price,
            }
        default:
            return state;
    }
}

export const setProductData = (product) => ({type: SET_PRODUCT_DATA, product})

export const getProductData = (productId) => { //Информация о продукте
    return async (dispatch) => {
        let response =  await productApi.getProductData(productId)

        if (response.status === 200) {
            dispatch(setProductData(response.data))
        }
    }
}

export default productReducer;
