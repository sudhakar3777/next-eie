// src/redux-store/slice/auth.slice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import axiosInstance from '../../axios/Axios';
const BASE_URL = 'http://localhost:8001/api/v1';

interface IndustryState {
  user: object | null;
  accessToken: string | null;
  isLoader: boolean;
  isError: boolean | null;
}

const initialState: IndustryState = {
  user: null,
  accessToken: null,
  isLoader: false,
  isError: null,
};

export const loginUser = createAsyncThunk<any, any>(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const url = `${BASE_URL}/auth/login`;
      const para = { industry_id: data?.userId, password: data?.password };
      const resp = await axiosInstance.post(url, para);
      if (resp) {
        Cookies.set('accessToken', resp?.data?.token);
        Cookies.set('user', JSON.stringify(resp.data))
        // router.push('/');
        return resp.data;
      }
    } catch (error: any) {
      console.log("Login error:", error);
      if (error.response && error.response.status === 401) {
        return rejectWithValue("Unauthorized");
      } else {
        return rejectWithValue("Login failed");
      }
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (router: any) => {
    const result = await axiosInstance.get(`${BASE_URL}/auth/logout`);
    router.replace("/");
    Cookies.remove("token");
    Cookies.remove("user");
    return result.data;
  }
);
// export const addIndustry = createAsyncThunk(
//   "stats/addIndustry",
//   async () => {
//     try {
//       let url = `${BASE_URL}/industry/add`;
//       const { data }: any = await axiosInstance.post(url);
//       console.log("Industry Added", data)
//       return data.data;

//     } catch (error: any) {
//       return isRejectedWithValue(error);
//     }
//   }
// );



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action: any) => {
        if (action.payload) {
          console.log("actionpayload", action.payload)
          state.user = action.payload;
          state.accessToken = action.payload.token;
          state.isError = false;
          state.isLoader = false;
          if (action.payload.statusCode === 200) {
            toast.success(action.payload.message);
          } else {
            toast.error(action.payload.message);
          }
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        toast.error(action.error.message || "Login failed");
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoader = true;
      })
      .addCase(logoutUser.fulfilled, (state, action: any) => {
        if (action.payload) {
          state.user = null;
          state.isError = false;
          state.isLoader = false;
          if (action.payload.statusCode === 200) {
            toast.success(action.payload.message);
          } else {
            toast.success(action.payload.message);
          }
        }
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isError = true;
        state.isLoader = false;
        toast.error(action.error.message || "Logout failed");
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoader = true;
      })
  }
});

export default authSlice.reducer;
