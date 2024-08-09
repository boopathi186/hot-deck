import { configureStore } from "@reduxjs/toolkit";
import { getApi } from "./ApiSlice";
 
 export const store = configureStore({
    reducer: {
        [getApi.reducerPath]: getApi.reducer
    },
    middleware: (getMiddleware) => 
        getMiddleware().concat(getApi.middleware)
 })