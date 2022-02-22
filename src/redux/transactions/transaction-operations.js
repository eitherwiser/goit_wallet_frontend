import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.baseURL = "https://goit-34-wallet.herokuapp.com/api";

export const addTransaction = createAsyncThunk(
  "transaction/addTransaction",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/transactions", credentials);
      return data;
    } catch (err) {
      if (err.response.status === 400) {
        return rejectWithValue(toast.error("Некорректные данные"));
      }
      if (err.response.status === 401) {
        return rejectWithValue(
          toast.error("Пожалуйста, перезайдите и повторите попытку позже")
        );
      }
      if (err.response.status === 500) {
        return toast.error("Повторите попытку позже");
      }
      return rejectWithValue(toast.error("Повторите попытку позже"));
    }
  }
);
export const getAllTransactions = createAsyncThunk(
  "transaction/all",

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/transactions");
      return data.transactions;
    } catch (err) {
      if (err.response.status === 401) {
        return rejectWithValue(
          toast.error("Пожалуйста, перезайдите и повторите попытку")
        );
      }
      if (err.response.status === 500) {
        return toast.error("Повторите попытку позже");
      }
      return rejectWithValue(toast.error("Повторите попытку позже"));
    }
  }
);
export const getBalanceTransactions = createAsyncThunk(
  "transaction/balance",

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/transactions");

      return data.balance;
    } catch (err) {
      return rejectWithValue(toast.error("Данные отсутствуют"));
    }
  }
);
