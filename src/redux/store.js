import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactSlice';
import { filtersReducer } from './filterSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filters'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
