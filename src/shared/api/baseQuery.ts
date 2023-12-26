import { type BaseQueryFn } from '@reduxjs/toolkit/query'
import {
  type FetchArgs,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '../lib/config'
import { RootState } from '@/app/appStore'

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).session

    if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)

    return headers;
  },
})