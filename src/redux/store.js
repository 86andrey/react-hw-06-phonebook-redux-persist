import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedContactsReducer,
});

export const persistor = persistStore(store);

export default store;
