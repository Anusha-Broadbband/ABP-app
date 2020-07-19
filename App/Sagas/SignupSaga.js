import { put, call } from 'redux-saga/effects'
import SignupActions from 'App/Stores/Signup/Actions'
import { signupService } from 'App/Services/SignupService'
import NavigationService from 'App/Services/NavigationService'

export function* signup(action) {
  try {
		const data = yield call(signupService.signup, [action.userId, action.password])
    if (data) {
      yield put(SignupActions.signupSuccessful())
      NavigationService.navigate('Login')
    } else {
      yield put(SignupActions.signupFailure('Unable to sign up.'))
    }
  } catch {
    yield put(
      SignupActions.signupFailure('Network error. Check your mobile data.')
    )
  }
}