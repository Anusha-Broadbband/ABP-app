import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	requestConnection: ["connectionDetails"],
  requestConnectionSuccessful: null,
  requestConnectionFailure: ['errorMessage'],
})

export const RequestConnectionTypes = Types
export default Creators