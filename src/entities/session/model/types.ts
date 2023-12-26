export type Session = {
  accessToken: string
  userId: number
}

export type User = {
  userId: number
  email: string
  isAdmin: boolean
}