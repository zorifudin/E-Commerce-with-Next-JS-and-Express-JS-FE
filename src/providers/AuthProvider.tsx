"use client";

import LoadingScreen from "@/components/LoadingScreen";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/userSlices";
import React, { PropsWithChildren, useEffect, useState } from "react";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const data = localStorage.getItem("ecommerce");

    if (data) {
      dispatch(loginAction(JSON.parse(data)));
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default AuthProvider;
