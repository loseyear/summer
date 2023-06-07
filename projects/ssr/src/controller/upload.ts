import { Context } from 'koa'
import fs from 'fs'
import path from 'path'

interface FileType {
  originalFilename: string;
  pathname: string;
}

const upload = async (ctx: Context) => {
  try {
    const file = ctx.request.files?.file as unknown as FileType
    if (!file) {
      ctx.throw(400, 'No file uploaded')
      return
    }

    const { fileType } = ctx.request.body

    // @ts-ignore
    const fileName = `${fileType}_${Date.now()}.${filename.split('.').pop().toLowerCase()}`
    const filePath = path.join(__dirname, '../../uploads', fileName)
    // @ts-ignore
    const filepath = file?.filepath
    fs.writeFileSync(filePath, fs.readFileSync(filepath))

    const rst = fileName

    ctx.body = {
      code: rst ? 0 : 1,
      msg: !rst ? '没有匹配的查询结果' : '',
      data: rst || [],
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
