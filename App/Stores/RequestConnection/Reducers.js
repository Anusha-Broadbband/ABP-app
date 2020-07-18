import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { RequestConnectionTypes } from './Actions'

export const requestConnection = (state, {connectionDetails}) => ({
  ...state,
	connectionDetails,
	requestConnectionLoading: true,
	requestConnectionErrorMessage: null
})

export const requestConnectionSuccessful = (state, {}) => ({
  ...state,
	requestConnectionLoading: false,
	requestConnectionErrorMessage: null
})

export const requestConnectionFailure = (state, { errorMessage }) => ({
  ...state,
  requestConnectionLoading: false,
  requestConnectionErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [RequestConnectionTypes.REQUEST_CONNECTION ]: requestConnection,
  [RequestConnectionTypes.REQUEST_CONNECTION_SUCCESSFUL]: requestConnectionSuccessful,
  [RequestConnectionTypes.REQUEST_CONNECTION_FAILURE]: requestConnectionFailure,
})