export type SessionDto = {
  accessToken: string
  userId: number
  user: {
    email: string
    userId: number
  }
}

export type RequestLoginBody = {
  email: string
  password: string
}

export type UserDto = {
  id: number
  email: string
  isAdmin: boolean
}