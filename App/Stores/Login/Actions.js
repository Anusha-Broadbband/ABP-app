import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	authenticate: ["userName","password"],
  authenticateSuccessful: ['userDetails'],
  authenticateFailure: ['errorMessage'],

  verifyUserId: ["userId"],
  verifyUserIdSuccessful: ["userDetails"],
  verifyUserIdFailure: ["errorMessage"]
})

export const LoginTypes = Types
export default Creators