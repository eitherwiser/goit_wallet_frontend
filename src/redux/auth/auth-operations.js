import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.baseURL = "http://localhost:3030/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const authUser = createAsyncThunk(
  "auth/addUser",
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const { data } = await axios.post("/users/signup", credentials);
      console.log(data);
      token.set(data.token);
      console.log(data);
      if (data) {
        toast.success("Account Success");
        return data;
      }
    } catch (error) {
      toast.error("incorrect");
      return rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);

      toast.success(`Hi ${data.user.name}`);
      return data;
    } catch (error) {
      toast.error("Not Authorized. Email or password incorrect");
      return rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  "/users/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
