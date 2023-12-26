import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { sessionSlice } from '@/entities/session'
import { baseApi } from '@/shared/api'
import { rootReducer } from './rootReducer'
import { invalidateAccessTokenListener } from '@/features/authentication/invalidateAccessToken'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [sessionSlice.name],
}

export function makeStore() {
  const store = configureStore({
    reducer: persistReducer(
      persistConfig,
      rootReducer
    ) as unknown as typeof rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware, invalidateAccessTokenListener.middleware),
  })

  setupListeners(store.dispatch)

  return store
}

export const appStore = makeStore()
export const persistedStore = persistStore(appStore)

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch