import { RootState } from '@/app/appStore';
import { sessionApi } from '@/entities/session';
import { createAsyncThunk } from '@reduxjs/toolkit'

type Params = {
  email: string;
  password: string;
}

export const signinThunk = createAsyncThunk<void, Params, { state: RootState }>(
  'authentication/signin',
  async (body: Params, { dispatch }) => {
    try {
      await dispatch(sessionApi.endpoints.signin.initiate(body)).unwrap()
    } catch (error) {
      console.log(error)
    }
  }
)