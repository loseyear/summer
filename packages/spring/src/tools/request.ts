import axios from 'axios'

interface Request {
  (
    url: string,
    data?: any,
    load?: boolean,
    method?: string,
  ): any
}

const request: Request = async (
  url,
  data,
  load = false,
  method = 'POST',
) => {
  if (load) console.log(load)
  return axios({
    method,
    url,
    data,
  })
    .then((response) => {
      console.log(response)
      return response?.data || { code: 400, data: [], message: '网络错误' }
    })
    .catch(({ response }) => {
      return response?.data || { code: 400, data: [], message: '网络错误' }
    })
}

export default request
