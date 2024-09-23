import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const userStorage = JSON.parse(localStorage.getItem("user"));
const tokenStorage = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: userStorage ? userStorage : null,
  token: tokenStorage | null,
};

export const register = createAsyncThunk("auth/register", async (userData) => {
  //   console.log("desde store", user);
  try {
    return await authService.register(userData);
  } catch (error) {
    console.error(error);
  }
});

// por que user y no userData???
export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    console.log("userdata: ", userData)
    return await authService.login(userData);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.res.data);
  }
});


// export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
//   try {
//     const response = await authService.login(userData);
//     return response.data; // Asegúrate de devolver los datos correctos
//   } catch (error) {
//     if (error.res) {
//       return thunkAPI.rejectWithValue(error.res.data);
//     } else {
//       // Maneja otros tipos de errores (por ejemplo, errores de red)
//       return thunkAPI.rejectWithValue({ message: 'Network error or server is not responding' });
//   }
//   }
// });


// export const login = createAsyncThunk("auth/login", async (user) => {
//   try {
//     return await authService.login(user);
//   } catch (error) {
//     console.error(error);
//   }
// });


export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    return await authService.logout()
  } catch (error) {
    console.error(error)
  }
 })
 


 
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.token = null
      })
  }
 
});
// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   },

// });

export default authSlice.reducer;
