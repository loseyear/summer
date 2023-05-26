import Koa, { Context } from 'koa'
import koaBody from 'koa-body'

import { port } from '@/config/app'
import router from '@/router'
import { mysqlConnection } from '@/config/mysql'

const app = new Koa()

mysqlConnection()

app.use(koaBody())
app.use(router())

app.listen(
  port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  }
)
