import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const rootReducer = combineReducers({user: userSlice})

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  
}

const persistReducers = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store)