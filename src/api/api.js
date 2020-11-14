import * as axios from "axios";

let instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/',
    // headers: {
    //     "API-KEY": '3c506123-7591-4f5d-a26a-91140af2545a'
    // }
})

export const productApi = {
    getProductData(id) { //Get info about product
        return instance.get(`api/products/${id}`)
            .then(response => response)
    },
}

export const storeApi = {
    getStoreData(id) {
        return instance.get(`api/stores/${id}`)
            .then(response => response)
    }
}