import api from '../api'
import { addServiceRequest } from '../../../data/GXPRoutes'
import sections from '../../../data/sections'
import { formatPath, buildServiceRequest, lower } from '../../utils'
import { path, isEmpty } from 'ramda'
const put = api(addServiceRequest.method)

const request = path([ 'HotelItems', 'service_requests', 'check_out' ], sections)
const data = {
    categoryItemCode: request.code,
    deliveryDateTime: new Date().toISOString(),
    isDeliveryDateTimeUtc: true,
}


const doRequestCheckOut = async (payload) => {

    console.log('111' , data)

    const res = await put(addServiceRequest.path, data)
    const orderId = res.responses[0][addServiceRequest.key].content.order.id
    const returnText = `Your service request for for ${request.name} was succesfully submitted; your request number is ${orderId}`

  return {
    text: returnText,
    options: { shouldEndSession: true },
    session: res.session
  }
}

export default doRequestCheckOut
