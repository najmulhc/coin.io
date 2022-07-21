import { configureStore } from '@reduxjs/toolkit'
import currenyReducer from '../Feature/currencySlice'
import menuReducer from "../Feature/menuSlice"
const store = configureStore({
    reducer: {
        currency: currenyReducer, 
        menu:menuReducer
    }
})
export default store;