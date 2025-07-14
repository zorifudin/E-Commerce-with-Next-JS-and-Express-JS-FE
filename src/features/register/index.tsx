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
import { RegisterSchema } from "./schemas";

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
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      await register(values);
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="pb-6 text-center">
          <CardTitle className="text-2xl font-bold text-green-500 sm:text-3xl">
            Register Now!
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 px-4 sm:space-y-6 sm:px-6">
          <Button
            variant="outline"
            className="w-full border-green-300 py-3 text-sm text-green-500 hover:bg-green-50 sm:text-base"
          >
            Sign up with Google
          </Button>

          <div className="flex items-center">
            <Separator className="flex-1" />
            <span className="px-4 text-sm text-gray-400">or</span>
            <Separator className="flex-1" />
          </div>

          <form
            className="space-y-3 sm:space-y-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <div>
                <Input
                  type="text"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  autoComplete="off"
                  placeholder="First name"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-muted-foreground text-sm">
                    {formik.errors.firstName}
                  </div>
                ) : null}
              </div>
              <div>
                <Input
                  type="text"
                  name="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  autoComplete="off"
                  placeholder="Last Name"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-muted-foreground text-sm">
                    {formik.errors.lastName}
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <Input
                type="tel"
                name="phoneNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                autoComplete="off"
                placeholder="Phone Number"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-muted-foreground text-sm">
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>

            <div>
              <Input
                type="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                autoComplete="off"
                placeholder="Email"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-muted-foreground text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div>
              <Input
                type={isChecked ? "text" : "password"}
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                autoComplete="new-password"
                placeholder="Password"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-green-500 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-muted-foreground text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                onCheckedChange={(checked) => setIsChecked(checked === true)}
                id="show-password"
              />
              <Label htmlFor="show-password" className="text-sm">
                show password
              </Label>
            </div>

            <Button
              disabled={isPending}
              type="submit"
              className="w-full rounded-md bg-green-500 py-2 text-sm font-medium text-white hover:bg-green-600 sm:py-3 sm:text-base"
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
