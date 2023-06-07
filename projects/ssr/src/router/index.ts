import fs from 'fs'
import path from 'path'
import Router, { RouterContext } from '@koa/router'
import { DefaultContext, DefaultState } from 'koa'

type RouteHandler = (ctx: RouterContext<DefaultState, DefaultContext>) => Promise<void>

const router = new Router<DefaultState, DefaultContext>({
  prefix: '/api',
})

const controllerPath = path.join(__dirname, '/../', 'controller')

fs.readdirSync(controllerPath)
  .filter((f) => f.endsWith('.ts'))
  .forEach((fileName) => {
    const filePath = path.join(controllerPath, fileName)
    const route = require(filePath)

    Object.entries(route).forEach(([key, value]) => {
      const [method, endpoint] = key.split(' ')
      const routeHandler = value as RouteHandler
      const routerMethod =  method.toLocaleLowerCase() as keyof Router<DefaultState, DefaultContext>

      // (router[routerMethod] as Router<DefaultState, DefaultContext>['get'])(endpoint, routeHandler)
      // @ts-ignore
      (router[routerMethod] as any)(endpoint, routeHandler)
    })
  })

export default router
