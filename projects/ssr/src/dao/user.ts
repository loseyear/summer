import { getRepository, FindOneOptions } from 'typeorm'
import { Users } from '@/entities/users'

export const UsersDao = {
  getUser: async (username: string) => {
    const usersRepo = getRepository(Users)
    const options: FindOneOptions<Users> = {
      where: { username },
    }
    return await usersRepo.findOne(options)
  },
}

