import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "./users/slice";


const persistanceLocalStorageMiddleware = (store) => (next) => (action)=>{
    //Con esto ya puedo validar datos antes o despues de cambiar la acccion.
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
}

export const store = configureStore({
    reducer: {
        users: useReducer
    },   
    middleware: (getDefaultMiddleware) => {

    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch