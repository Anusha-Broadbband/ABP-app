import axios from 'axios'
import { curryN, gte, is } from 'ramda'
import { Config } from 'App/Config'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)

const connectionApiClient = (data) =>
  axios.create(
    {
      baseURL: `${Config.BASE_URL}api/connection`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      timeout: 3000,
    },
    data
  )

function requestConnection(details) {
  return connectionApiClient(details)
    .post()
    .then((response) => {
      if (in200s(response.status)) {
        return response
      }
			return null
    })
    .catch((error) => {
      throw new error('could not connect')
    })
}

export const requestConnectionService = {
  requestConnection,
}
