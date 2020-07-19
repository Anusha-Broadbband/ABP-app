import axios from 'axios'
import { curryN, gte, is } from 'ramda'
import { Config } from 'App/Config'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)


const signupApiClient = (data)=> axios.create({
  baseURL: `${Config.BASE_URL}api/signup`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
},data)

function signup(details) {
 	return signupApiClient(details).post().then((response) => {
     console.log("comign", details)
    if (in200s(response.status)) {
      return response.data
    }

    return null
  }).catch((error)=>{
    throw new error("could not connect")
  })
}

export const signupService = {
  signup,
}