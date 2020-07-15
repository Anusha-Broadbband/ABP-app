/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { LoginTypes } from './Actions'

export const authenticate = (state) => ({
  ...state,
  loginLoading: true,
  loginErroMessage: null,
})

export const authenticateSuccessful = (state, { userDetails }) => ({
  ...state,
  userDetails,
  loginLoading: false,
  loginErroMessage: null,
})

export const authenticateFailure = (state, { errorMessage }) => ({
  ...state,
  loginLoading: false,
  loginErroMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.AUTHENTICATE]: authenticate,
  [LoginTypes.AUTHENTICATE_SUCCESSFUL]: authenticateSuccessful,
  [LoginTypes.AUTHENTICATE_FAILURE]: authenticateFailure,
})