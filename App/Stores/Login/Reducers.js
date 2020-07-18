import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { LoginTypes } from './Actions'

export const authenticate = (state) => ({
  ...state,
  loginLoading: true,
  loginErrorMessage: null,
})

export const authenticateSuccessful = (state, { userDetails }) => ({
  ...state,
  userDetails,
  loginLoading: false,
  loginErrorMessage: null,
})

export const authenticateFailure = (state, { errorMessage }) => ({
  ...state,
  loginLoading: false,
  loginErrorMessage: errorMessage,
})

export const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.AUTHENTICATE]: authenticate,
  [LoginTypes.AUTHENTICATE_SUCCESSFUL]: authenticateSuccessful,
  [LoginTypes.AUTHENTICATE_FAILURE]: authenticateFailure,
})