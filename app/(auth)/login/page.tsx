"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type LoginFormData = {
  email: string;
  password: string;
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login data:", data);
    // TODO: send data to API
  };

  return (
    <div className="flex h-screen overflow-hidden items-center justify-center bg-gray-900 px-4">
      <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-4xl w-full md:h-auto md:max-h-[90vh]">
        {/* Left side: Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="/Frame.png"
            alt="Login"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right side: Form */}
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full space-y-6">
            <h2 className="text-center text-3xl font-bold text-white">
              Sign in to your account
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full rounded px-3 py-2 bg-gray-700 text-white border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  className={`w-full rounded px-3 py-2 bg-gray-700 text-white border ${
                    errors.password ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 font-semibold transition"
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-yellow-400 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
