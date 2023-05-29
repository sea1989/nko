import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/reducer';
import projectReducer from './project/reducer';
import newsReducer from './news/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        project: projectReducer,
        news: newsReducer,
    },
})