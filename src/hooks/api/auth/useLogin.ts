"use client";

import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

interface LoginPayload {
  email: string;
  password: string;
}

const useLogin = () => {
  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const { data } = await axiosInstance.post("auth/login", payload);
      return data;
    },
    onSuccess: () => {
      toast.success("Login success");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useLogin;
