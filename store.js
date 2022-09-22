import {configureStore} from '@reduxjs/toolkit';
import basketReducer from './features/basketSlice';
import restauranteReducer from './features/restauranteSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restauranteReducer,
  },
});
