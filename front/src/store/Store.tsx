import { configureStore } from '@reduxjs/toolkit';
import authAction from '../toolkit/authAction';


export const store = configureStore({
  reducer: {
    auth:authAction,
   
  },
})

export type AppDispatch = typeof store.dispatch;

