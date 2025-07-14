"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useFormik } from "formik";
import { Lasso } from "lucide-react";
import useRegister from "@/hooks/api/auth/useRegister";

const RegisterPage = () => {
  const { mutateAsync: register, isPending } = useRegister();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    onSubmit: async (values) => {
      await register(values);
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="container mx-auto flex h-[80vh] flex-col items-center justify-center">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="pb-6 text-center">
          <CardTitle className="text-3xl font-bold text-green-500">
            Register Now!
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <Button
            variant="outline"
            className="w-full border-green-300 py-3 text-green-500 hover:bg-green-50"
          >
            Sign up with Google
          </Button>

          <div className="flex items-center">
            <Separator className="flex-1" />
            <span className="px-4 text-sm text-gray-400">or</span>
            <Separator className="flex-1" />
          </div>

          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                placeholder="First name"
                className="rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <Input
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                placeholder="Last Name"
                className="rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <Input
              type="tel"
              name="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
              placeholder="Phone Number"
              className="rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
            />

            <Input
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Email"
              className="rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
            />

            <Input
              type={isChecked ? "text" : "password"}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Password"
              className="rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none"
            />

            <div className="flex items-center gap-2">
              <Checkbox
                onCheckedChange={(checked) => setIsChecked(checked === true)}
                name="show-password"
              />
              <Label htmlFor="show-password">show password</Label>
            </div>

            <Button
              disabled={isPending}
              type="submit"
              className="w-full rounded-md bg-green-500 py-3 font-medium text-white hover:bg-green-600"
            >
              {isPending ? "Loading..." : "Register"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-green-500 hover:text-green-600"
              >
                Log in.
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default RegisterPage;
