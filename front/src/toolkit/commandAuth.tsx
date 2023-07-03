import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { backendURL } from "../Config/AuthBack"

interface AdminInfo {
    email:string
    password:string
}

interface AdminReg {
    email:string
    password:string
    profile:File
}
  

interface InitialState {
    loading: boolean,
    adminInfo: any,
    error: string|null,
    success: boolean,
    message:string|null,
}

export const registerAdmin = createAsyncThunk(
  'auth/register',
  async (userinfo:AdminReg, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': "multipart/form-data"
        },
      }
      const  {data} = await axios.post(
        `${backendURL}/admin/subscribe`,
        userinfo,
        config
      )
      return data.Message
    } catch (error:any) {
        return rejectWithValue(error.message)
    }
  }
)
export const LoginAdmin = createAsyncThunk(
    'auth/admin',
    async (userinfo:AdminInfo, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const  {data} = await axios.post(
          `${backendURL}/admin/login`,
          userinfo,
          config
        )
        localStorage.setItem('role',(data.user.role))
        localStorage.setItem('adminName',(data.user.pseudonyme))
        localStorage.setItem('adminToken',(data.token))
        return data
      } catch (error:any) {
          return rejectWithValue(error.message)
      }
    }
  )
 
  const initialState:InitialState = {
    loading: false,
    adminInfo:{},
    error: null,
    success: false,
    message:null,
  }
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      seterrornull: (state) => {
        state.error = null
      },
      setMessageNull: (state) => {
        state.message = null
      }
    },
    extraReducers: (builder)=>{
        builder.addCase(LoginAdmin.pending, (state:InitialState, { payload }:any) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(LoginAdmin.fulfilled, (state:InitialState,{ payload } :any) => {
            state.loading = false
            state.message = "Connexion avec succèss"
              
        })
        builder.addCase(LoginAdmin.rejected, (state:InitialState, { payload }:any) => {
            state.loading = false
            state.error = payload
        });
        builder.addCase(registerAdmin.pending, (state:InitialState, { payload }:any) => {
          state.loading = true
          state.error = null
        })
        builder.addCase(registerAdmin.fulfilled, (state:InitialState,{ payload } :any) => {
            state.loading = false
            state.message = payload
        })
        builder.addCase(registerAdmin.rejected, (state:InitialState, { payload }:any) => {
            state.loading = false
            state.error = payload
        });
    }
  })    
  

export const {seterrornull,setMessageNull} = authSlice.actions
export default authSlice.reducer
