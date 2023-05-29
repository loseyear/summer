import { Context } from 'koa'

const getTest = async (ctx: Context) => {
  try {
    const username: string = ctx.query.username as string

    const data = await ctx
      .sql
      .users
      .findOne({
        where: {
          username,
        }
      })

    ctx.body = {
      status: 200,
      data: data,
    }
  } catch (e) {
    console.log(e)
    ctx.body = {
      status: 200,
      data: {},
    }
  }
}

const postTest = async (ctx: Context) => {
  try {
    ctx.body = {
      status: 200,
      data: {},
    }
  } catch (e) {
    ctx.body = {
      status: 200,
      data: {},
    }
  }
}
const putTest = async (ctx: Context) => {
  try {
    ctx.body = {
      status: 200,
      data: {},
    }
  } catch (e) {
    ctx.body = {
      status: 200,
      data: {},
    }
  }
}

const deleteTest = async (ctx: Context) => {
  try {
    ctx.body = {
      status: 200,
      data: {},
    }
  } catch (e) {
    ctx.body = {
      status: 200,
      data: {},
    }
  }
}

module.exports = {
  'GET /test': getTest,
  'POST /test': postTest,
  'PUT /test': putTest,
  'DELETE /test': deleteTest,
}
