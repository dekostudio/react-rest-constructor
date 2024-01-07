import {
  type FetchArgs,
} from '@reduxjs/toolkit/query'
import {
  type BaseQueryApi,
} from '@reduxjs/toolkit/query'
import { baseQuery } from './baseQuery'
import { invalidateAccessToken } from './invalidateTokenEvent'

const AUTH_ERROR_CODES = new Set([401])

export async function baseQueryWithReauth(
  args: string | FetchArgs,
  api: BaseQueryApi,
  // не сегодня
  // eslint-disable-next-line @typescript-eslint/no-explicit-any  
  extraOptions: any,
) {
  const result = await baseQuery(args, api, extraOptions)
  
  if (
    typeof result.error?.status === 'number' &&
    AUTH_ERROR_CODES.has(result.error.status)
  ) {
    api.dispatch(invalidateAccessToken())
  }

  return result
}