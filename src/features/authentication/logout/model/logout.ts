import { createAsyncThunk } from '@reduxjs/toolkit'
import { sessionApi, clearSessionData } from '@/entities/session'
import { SESSION_TAG } from '@/shared/api'
import { wait } from '@/shared/lib/wait'
import { RootState } from '@/app/appStore'

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
  'authentication/logout',
  async (_: unknown, { dispatch }) => {
    dispatch(clearSessionData())

    await wait(10)

    dispatch(sessionApi.util.invalidateTags([SESSION_TAG]))
  }
)