import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../lib/api";

const savedCurrentUser = (() => {
  try {
    const s = localStorage.getItem("currentUser");
    return s ? JSON.parse(s) : null;
  } catch {
    return null;
  }
})();

export const updateUser = createAsyncThunk(
  "profile/updateUser",
  async (user, { rejectWithValue }) => {
    try {
      const res = await api.patch(`/users?id=eq.${user.id}`, user);
      const updated = Array.isArray(res.data) ? res.data[0] : res.data;
      return updated;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const deleteUser = createAsyncThunk(
  "profile/deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      await api.delete(`/users?id=eq.${userId}`);
      return userId;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    currentUser: savedCurrentUser,
    status: "idle",
    error: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
      try {
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
      } catch {}
    },
    clearCurrentUser(state) {
      state.currentUser = null;
      try {
        localStorage.removeItem("currentUser");
      } catch {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentUser = action.payload;
        try {
          localStorage.setItem("currentUser", JSON.stringify(action.payload));
        } catch {}
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error;
      })
      .addCase(deleteUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.status = "succeeded";
        state.currentUser = null;
        try {
          localStorage.removeItem("currentUser");
        } catch {
          // Silently ignore localStorage errors
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error;
      });
  },
});

export const { setCurrentUser, clearCurrentUser } = profileSlice.actions;
export default profileSlice.reducer;
