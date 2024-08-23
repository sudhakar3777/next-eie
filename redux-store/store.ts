
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slice/auth.slice';
import industryReducer from './slice/industry.slice';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedIndustryReducer = persistReducer(persistConfig, industryReducer);

const rootReducer = {
  userData: persistedAuthReducer,
  industryData: persistedIndustryReducer
};

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export const persistor = persistStore(makeStore());


export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
