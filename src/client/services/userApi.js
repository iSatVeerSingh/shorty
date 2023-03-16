import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const userSignup = async (userData) => {
  try {
    const response = await userApi.post("/signup", userData);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const userLogin = async (userData) => {
  try {
    const response = await userApi.post("/login", userData);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const shortUrl = async (urlData) => {
  try {
    const response = await userApi.post("/urls", urlData);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getAllUrls = async () => {
  try {
    const response = await userApi.get("/urls");
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getVerify = async (token) => {
  try {
    const response = await userApi.get("/verify", {
      params: {
        token,
      },
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
