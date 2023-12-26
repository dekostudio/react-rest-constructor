import { type UserDto } from '../api/types'
import { type User } from '../model/types'

export function mapUser(dto: UserDto): User {
  return {
    userId: dto.id as number,
    email: dto.email as string,
    isAdmin: dto.isAdmin as boolean
  }
}