import { put, call } from 'redux-saga/effects'
import LoginActions from 'App/Stores/Login/Actions'
import { loginService } from 'App/Services/LoginService'
import NavigationService from 'App/Services/NavigationService'


export function* authenticate(action) {
  try {
    const userDetails = yield call(loginService.authenticateUser, [
      action.userName,
      action.password,
    ])
    if (userDetails) {
      yield put(LoginActions.authenticateSuccessful(userDetails))
      NavigationService.navigate("Home")
    } else {
      yield put(LoginActions.authenticateFailure('Unable to login.'))
    }
  } catch {
    yield put(LoginActions.authenticateFailure('Network error. Check your mobile data.'))
  }
}
