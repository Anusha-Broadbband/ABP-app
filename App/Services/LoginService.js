import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)


const loginApiClient = (data)=> axios.create({
  baseURL: 'http://demo8619752.mockable.io/api/login',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
},data)

function authenticateUser(userName, password) {
 	return loginApiClient({userName, password}).post().then((response) => {
    if (in200s(response.status)) {
      console.log(response, "he")
      return response.data
    }

    return null
  }).catch((error)=>{
    throw new error("could not connect")
  })
}

export const loginService = {
  authenticateUser,
}
