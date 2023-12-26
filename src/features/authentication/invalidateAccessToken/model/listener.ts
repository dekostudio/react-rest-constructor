import {
  createListenerMiddleware,
  type TypedStartListening,
} from '@reduxjs/toolkit'
import { invalidateAccessToken } from '@/shared/api'
import { logoutThunk } from '../../logout/model/logout'
import { AppDispatch, RootState } from '@/app/appStore'

export const invalidateAccessTokenListener = createListenerMiddleware()
export type TypedListening = TypedStartListening<RootState, AppDispatch>

export const startInvalidateAccessTokenListener =
  invalidateAccessTokenListener.startListening as TypedListening

startInvalidateAccessTokenListener({
  actionCreator: invalidateAccessToken,
  effect: async (_, api) => {
    api.dispatch(logoutThunk())
  },
})