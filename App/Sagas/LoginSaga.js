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
      NavigationService.navigate('Home')
    } else {
      yield put(LoginActions.authenticateFailure('Unable to login.'))
    }
  } catch {
    yield put(LoginActions.authenticateFailure('Network error. Check your mobile data.'))
  }
}

export function* verifyUserId(action) {
  try {
    const userDetails = yield call(loginService.verifyUserId, [action.userId])
    if (userDetails) {
       yield put(LoginActions.verifyUserIdSuccessful(userDetails))
      userDetails.isNewUser ? NavigationService.navigate("Signup") : NavigationService.navigate("Login")
    } else {
      yield put(LoginActions.verifyUserIdFailure('Please enter valid user id'))
    }
  } catch {
    yield put(LoginActions.verifyUserIdFailure('Network error. Check your mobile data.'))
  }
}
