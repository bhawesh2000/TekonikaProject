import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import  multiFormSlice  from './slice/MultiFormSlice';


const persistConfig = {
  key: 'root',
  storage,
}

const multipersistedReducer = persistReducer(persistConfig, multiFormSlice)


export const store = configureStore({
  reducer: {
    form:multipersistedReducer
  },
});


export const persistor = persistStore(store);



