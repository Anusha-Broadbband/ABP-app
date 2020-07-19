import { LoginTypes } from 'App/Stores/Login/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { all, takeLatest } from 'redux-saga/effects'
import { RequestConnectionTypes } from '../Stores/RequestConnection/Actions'
import { authenticate, verifyUserId } from './LoginSaga'
import { requestConnection } from './RequestConnectionSaga'
import { signup } from './SignupSaga'
import { startup } from './StartupSaga'
import { SignupTypes } from '../Stores/Signup/Actions'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.AUTHENTICATE, authenticate),
    takeLatest(RequestConnectionTypes.REQUEST_CONNECTION, requestConnection),
    takeLatest(LoginTypes.VERIFY_USER_ID, verifyUserId),
    takeLatest(SignupTypes.SIGNUP, signup),
  ])
}
