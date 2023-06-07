import { Context } from 'koa'
// import fs from 'fs'
// import path from 'path'

const upload = async (ctx: Context) => {
  try {
    const file = ctx.request.files?.file

    if (!file) {
      ctx.throw(400, 'No file uploaded')
      return
    }
    // const { fileType } = ctx.request.body

    let fileName = ''

    if (file instanceof Array) {
      fileName = file.toString()
    } else {
      fileName = file.toString()
    }
    // const fileName = `${fileType}_${Date.now()}_.${file.name.split('.').pop().toLowerCase()}`;

    const rst = null

    ctx.body = {
      code: rst ? 0 : 1,
      msg: !rst ? '没有匹配的查询结果' : '',
      data: fileName || [],
    }
  } catch (err) {
    ctx.status = 400
    ctx.body = {
      code: 1,
      msg: 'error',
      data: [],
    }
  }
}

module.exports = {
  'POST /upload': upload,
}
