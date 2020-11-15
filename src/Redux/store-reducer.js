import {storeApi} from "../api/api";
import dSword from "../Assets/images/diamond-sword-25716.png";
import dAxe from "../Assets/images/diamond-axe-25732.png";
import gSword from "../Assets/images/gold-sword-25715.png";
import gAxe from "../Assets/images/gold-axe-25731.png";

const ADD_ITEM_COUNT = 'ADD_ITEM_COUNT'
const GET_STORE_DATA = 'GET_STORE_DATA'
const REMOVE_ITEMS_COUNT = 'REMOVE_ITEM_COUNT'
const DELETE_ITEM = 'DELETE_ITEM'
const TOGGLE_IS_CHECKING = 'TOGGLE_IS_CHECKING'
const DELETE_ALL_ITEMS = 'DELETE_ALL_ITEMS'

let initialState = {
    id: 0,
    name: "",
    email: "",
    totalPrice: 0,
    isChecked: false, //Проверил ли пользователь карзину
    items: [
        {
            isPicked: false,
            id: 0,
            name: "Алмазный меч",
            count: 0,
            price: 100,
            img: dSword,
        },
        {
            isPicked: false,
            id: 1,
            name: "Алмазный топор",
            count: 0,
            price: 80,
            img: dAxe,
        },
        {
            isPicked: false,
            id: 2,
            name: "Золотой меч",
            count: 0,
            price: 70,
            img: gSword,
        },
        {
            isPicked: false,
            id: 3,
            name: "Золотой топор",
            count: 0,
            price: 50,
            img: gAxe,
        },
    ],

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

        case ADD_ITEM_COUNT: {
            return {
                ...state,
                items: state.items.map(item => item.id === action.id ?
                    ({
                        ...item,
                        count: item.count + 1,
                        isPicked: true
                    }): {...item}
                ),
                isChecked: true,
                totalPrice: action.countPrice + state.totalPrice
            }
        }
        case REMOVE_ITEMS_COUNT: {
            return {
                ...state,
                items: state.items.map(item => item.id === action.id && item.count > 0 ?
                    ({
                        ...item,
                        count: item.count - 1
                    }): {...item}
                ),
                totalPrice: state.totalPrice - action.countPrice
            }
        }
        case DELETE_ITEM: {
            return {
                ...state,
                items: state.items.map(item => item.id === action.id && item.count > 0 ?
                    ({
                        ...item,
                        count: 0,
                        isPicked: false
                    }): {...item}
                ),
                totalPrice: state.totalPrice - action.count * action.countPrice
            }
        }
        case DELETE_ALL_ITEMS: {
            return {
                ...state,
                items: state.items.map(item =>
                    ({
                        ...item,
                        count: 0,
                        isPicked: false
                    })
                ),
                totalPrice: 0
            }
        }
        case TOGGLE_IS_CHECKING: {
            return {
                ...state,
                isChecked: action.isChecked
            }
        }

        default:
            return state;
    }
}

export const setStoreData = (store) => ({type: GET_STORE_DATA, store})
export const addItemCount = (id, countPrice) => ({type: ADD_ITEM_COUNT, id, countPrice})
export const removeItemsCount = (id, countPrice) => ({type: REMOVE_ITEMS_COUNT, id, countPrice})
export const deleteItem = (id, countPrice, count) => ({type: DELETE_ITEM, id, countPrice, count})
export const toggleIsChecking = (isChecked) => ({type: TOGGLE_IS_CHECKING, isChecked})
export const deleteAllItems = () => ({type: DELETE_ALL_ITEMS})

export const getStoreData = (storeId) => { //Информация о магазине конкретного сервера
    return async (dispatch) => {
        let response = await storeApi.getStoreData(storeId)

        if (response.status === 200) {
            dispatch(setStoreData(response.data))
        }
    }
}

export default storeReducer;
