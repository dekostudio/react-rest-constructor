import { baseApi, SESSION_TAG } from '@/shared/api/index'
import { mapSession } from '../lib/mapSession'
import { mapUser } from '../lib/mapUser'
import { type User, type Session } from '../model/types'
import { type UserDto, type RequestLoginBody, type SessionDto } from './types'

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation<Session, RequestLoginBody>({
      query: (body) => ({
        url: `/auth/signin`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [SESSION_TAG],
      transformResponse: (response: SessionDto) => mapSession(response),
    }),
    me: build.query<User, void>({
      query: () => ({
        url: `/user/me`,
      }),
      providesTags: [SESSION_TAG],
      transformResponse: (response: UserDto) => mapUser(response),
    }),
  }),
})

export const { useSigninMutation, useMeQuery } = sessionApi