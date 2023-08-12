import axios from 'axios'

interface Props {
  url: string;
  body: unknown;
  method: string;
}

export default async (
  {
    url,
    body = {},
    method = 'POST',
  }: Props,
) => axios({
  method,
  url,
  data: body,
})
  .then((response: any) =>  response?.data)
  .catch(({ response }: any) => response?.data)
