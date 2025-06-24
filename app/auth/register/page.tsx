"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type RegisterFormData = {
  fullName: string;
  email: string;
  password: string;
};

const registerSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Register data:", data);
    // TODO: send data to API
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-center text-3xl font-bold text-white">
          Create a new account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              {...register("fullName")}
              className={`w-full rounded px-3 py-2 bg-gray-700 text-white border ${
                errors.fullName ? "border-red-500" : "border-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-yellow-400`}
              placeholder="Your Name"
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

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
            <label className="block text-sm text-gray-300 mb-1">Password</label>
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
            {isSubmitting ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <a href="/auth/login" className="text-yellow-400 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
