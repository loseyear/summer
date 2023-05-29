import Koa from 'koa'
import koaBody from 'koa-body'

import { port } from '@/config/app'
import router from '@/router'
import sql from '@/library/sql'

const app = new Koa()

/*
HttpMethodEnum["POST"] = "POST";
HttpMethodEnum["GET"] = "GET";
HttpMethodEnum["PUT"] = "PUT";
HttpMethodEnum["PATCH"] = "PATCH";
HttpMethodEnum["DELETE"] = "DELETE";
HttpMethodEnum["HEAD"] = "HEAD";
*/

app.use(koaBody())
app.use(sql(app))
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(
  port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  }
)
