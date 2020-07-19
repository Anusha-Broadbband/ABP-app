import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { SignupTypes } from './Actions'

export const signup = (state, {userDetails}) => ({
	...state,
	userDetails,
	isLoading: true,
	errorMessage: null
})

export const signupSuccessful = (state) => ({
	...state,
	userDetails: null,
	isLoading: false,
	errorMessage: null
})

export const signupFailure = (state, { errorMessage }) => ({
  ...state,
  isLoading: false,
  errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [SignupTypes.SIGNUP ]: signup,
  [SignupTypes.SIGNUP_SUCCESSFUL]: signupSuccessful,
  [SignupTypes.SIGNUP_FAILURE]: signupFailure,
})