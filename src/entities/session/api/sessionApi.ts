import { baseApi, SESSION_TAG } from '@/shared/api/index'
import { mapSession } from '../lib/mapSession'
import { type Session } from '../model/types'
import { type RequestLoginBody, type SessionDto } from './types'

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
    })
  }),
})

export const { useSigninMutation } = sessionApi