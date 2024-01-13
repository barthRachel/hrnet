import { configureStore } from '@reduxjs/toolkit';
import saveReducer from './features/save/saveSlice';

const store = configureStore({
    reducer: {
        save: saveReducer,
    },
})

export default store;