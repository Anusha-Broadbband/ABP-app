import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	signup: ["userDetails"],
  signupSuccessful: null,
  signupFailure: ['errorMessage'],
})

export const SignupTypes = Types
export default Creators