import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, registerAPI, logoutAPI } from "../../Api/api";

// ================= LOGIN =================
export const loginUser = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await loginAPI(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);

// ================= REGISTER =================
export const registerUser = createAsyncThunk(
  "user/register",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await registerAPI(formData);
      return res.data.message;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Registration failed"
      );
    }
  }
);

// ================= LOGOUT =================
export const logoutUser = createAsyncThunk("user/logout", async () => {
  await logoutAPI();
  return null;
});

// ================= SLICE =================
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
  },
  reducers: {
    setUserFromStorage: (state) => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        state.user = JSON.parse(storedUser);
      }
    },
  },
  extraReducers: (builder) => {
    builder

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;

        // ✅ SAVE ONLY ON LOGIN
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // REGISTER (NO LOGIN)
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })

      // LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        localStorage.removeItem("user");
      });
  },
});

export const { setUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
