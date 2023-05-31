import React, {
  useState,
} from 'react'
import r from '@/tools/request'

interface Data {
  id: number,
  userId: number,
  title: string,
  body: string,
}

export default function Lession() {
  const [data, setData] = useState<Data[]>([])

  const getData = async () => {
    const rst = await r(
      'http://jsonplaceholder.typicode.com/posts',
      {},
      false,
      'GET',
    )
    setData(rst)
  }
  return (
    <div>
      <div onClick={() => getData()}>点击发送请求</div>
      <ul>
        {
          data.map(
            (v) => (
              <li key={v.id}>
                <h2>{v.title}</h2>
                <p>{v.body}</p>
              </li>
            )
          )
        }
      </ul>
      markdownText
    </div>
  )
}
