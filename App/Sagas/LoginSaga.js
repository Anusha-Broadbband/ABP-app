import { put, call } from 'redux-saga/effects'
import LoginActions from 'App/Stores/Login/Actions'
import { loginService } from 'App/Services/LoginService'

export function* authenticate(action) {
  
  yield put(LoginActions.authenticateLoading())
  try {
    const userDetails = yield call(loginService.authenticateUser,[action.userName, action.password] )
    if (userDetails) {
      yield put(LoginActions.authenticateSuccessful(userDetails))
    } else {
      yield put(
        LoginActions.authenticateFailure('Unable to login.')
      )
    } 
  }
  catch {
    yield put(LoginActions.authenticateFailure("Network error. Check your mobile data."))
  }

 
}
