"use client";

import { useAppSelector } from "@/redux/hooks";

export default function Home() {
  const user = useAppSelector((state) => state.user);
  return <div>Hello, {user.firstName}</div>;
}
