import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.baseURL = "https://goit-34-wallet.herokuapp.com/api";

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
    try {
      const { data } = await axios.post("/users/signup", credentials);
      console.log(data);
      if (data) {
        toast.success("Перейдите на свой email и подтвердите регистрацию");

        return data;
      }
    } catch (err) {
      if (err.response.status === 409) {
        return rejectWithValue(
          toast.error("Такой пользователь уже существует")
        );
      }
      if (err.response.status === 400) {
        return rejectWithValue(toast.error("Некорректные данные"));
      }
      if (err.response.status === 500) {
        return toast.error("Повторите попытку позже");
      }
      return rejectWithValue(toast.error("Повторите попытку позже"));
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);

      token.set(data.data.token);
      return data;
    } catch (err) {
      if (err.response.status === 401) {
        return rejectWithValue(
          toast.error("E-mail или пароль указаны неверно")
        );
      }
      if (err.response.status === 500) {
        return rejectWithValue(
          toast.error("Подтвердите почту, или повторите попытку еще раз")
        );
      }
      return rejectWithValue(err.response.message);
    }
  }
);
export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get("/users/logout");
      token.unset();
    } catch (error) {
      return rejectWithValue(error.response.message);
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
      return rejectWithValue(error.response.message);
    }
  }
);
