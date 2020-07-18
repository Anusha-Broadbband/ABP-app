import { LoginTypes } from 'App/Stores/Login/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { all, takeLatest } from 'redux-saga/effects'
import { RequestConnectionTypes } from '../Stores/RequestConnection/Actions'
import { authenticate } from './LoginSaga'
import { requestConnection } from './RequestConnectionSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.AUTHENTICATE, authenticate),
    takeLatest(RequestConnectionTypes.REQUEST_CONNECTION, requestConnection),
  ])
}
