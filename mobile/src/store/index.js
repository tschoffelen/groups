import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'

import * as Reducers from './reducers'

const persistConfig = {
  key: 'groups.v1',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, combineReducers(Reducers))

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
  let persistor = persistStore(store)
  return { store, persistor }
}
