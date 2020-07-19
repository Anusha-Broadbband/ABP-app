import { put, call } from 'redux-saga/effects'
import RequestConnectionActions from 'App/Stores/RequestConnection/Actions'
import { requestConnectionService } from 'App/Services/RequestConnectionService'
import NavigationService from 'App/Services/NavigationService'

export function* requestConnection(action) {
  try {
		const data = yield call(requestConnectionService.requestConnection, [action.connectionDetails])
    if (data) {
      yield put(RequestConnectionActions.requestConnectionSuccessful())
      NavigationService.navigate('Thankyou')
    } else {
      yield put(RequestConnectionActions.requestConnectionFailure('Unable to register'))
    }
  } catch {
    yield put(
      RequestConnectionActions.requestConnectionFailure('Network error. Check your mobile data.')
    )
  }
}
