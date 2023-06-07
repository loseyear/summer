import Koa from 'koa'
import path from 'path'
import cors from '@koa/cors'
import serve from 'koa-static'
import koaBody from 'koa-body'

import { port } from '@/config/app'
import router from '@/router'
import sql from '@/library/sql'

const app = new Koa()

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
)
app.use(
  koaBody({
    multipart: true,
  })
)
app.use(serve(path.resolve(__dirname, '../assets/')))
app.use(serve(path.resolve(__dirname, '../../uploads/')))

app.use(sql(app))
app.use(router.routes()).use(router.allowedMethods())

app.listen(
  port,
  () => {
    console.log(`Server is running on http://localhost:${port}`)
  },
)
