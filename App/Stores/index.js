import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as LoginReducer } from './Login/Reducers'
import { reducer as RequestConnectionReducer } from './RequestConnection/Reducers'

export default () => {
  const rootReducer = combineReducers({
    login: LoginReducer,
    requestConnection: RequestConnectionReducer
  })

  return configureStore(rootReducer, rootSaga)
}
