import Koa from 'koa'
import fs from 'fs'
import path from 'path'

interface FileUpload extends File {
  filepath: string;
  originalFilename: string;
}

async function saveFile(file: FileUpload, fileType: string): Promise<string> {
  const ext = file.originalFilename.split('.')?.pop()?.toLowerCase()
  const fileName = `${fileType}_${Date.now()}.${ext}`
  const filePath = path.join(__dirname, '../../uploads', fileName)

  const reader = fs.createReadStream(file.filepath)
  const upStream = fs.createWriteStream(filePath)
  reader.pipe(upStream)

  return new Promise((resolve, reject) => {
    upStream.on('finish', () => resolve(fileName))
    upStream.on('error', (err) => reject(err))
  })
}

const upload = async (ctx: Koa.Context) => {
  const file = ctx.request.files?.file as unknown as FileUpload
  const { fileType } = ctx.request.body
  if (!file) {
    ctx.throw(
      400,
      {
        code: 1,
        msg: '文件不能为空',
      }
    )
  }
  const fileName = await saveFile(file, fileType)
  ctx.body = {
    code: 200,
    message: '文件上传成功',
    data: fileName,
  }
}


module.exports = {
  'POST /upload': upload,
}
