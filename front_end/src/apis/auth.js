import axiosInstance from "./axiosInstance";
export const logIn = async (loginForm) => {
  try {
    const res = await axiosInstance.post("/api/auth/login", loginForm, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const register = async (registerForm) => {
  try {
    const res = await axiosInstance.post("/api/auth/register", registerForm, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};
