import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as LoginReducer } from './Login/Reducers'
import { reducer as RequestConnectionReducer } from './RequestConnection/Reducers'
import { reducer as SignupReducer } from './Signup/Reducers'

export default () => {
  const rootReducer = combineReducers({
    login: LoginReducer,
    requestConnection: RequestConnectionReducer,
    signup: SignupReducer
  })

  return configureStore(rootReducer, rootSaga)
}
