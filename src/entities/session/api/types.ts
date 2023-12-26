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