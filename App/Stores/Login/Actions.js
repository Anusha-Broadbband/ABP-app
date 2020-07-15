import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Fetch user informations
	authenticate: ["userName","password"],
  // The operation has started and is loading
  authenticateLoading: null,
  // User informations were successfully fetched
  authenticateSuccessful: ['userDetails'],
  // An error occurred
  authenticateFailure: ['errorMessage'],
})

export const LoginTypes = Types
export default Creators