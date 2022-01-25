import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cartReducer from '../features/cart/cartSlice'
import userReducer from '../features/user/userSlice'
import productReducer from '../features/product/productSlice'

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
})


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store)
