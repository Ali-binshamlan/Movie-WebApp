"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";



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
    <div className="flex h-screen overflow-hidden items-center justify-center bg-amber-300 px-4">
      <div className="flex flex-col md:flex-row bg-black rounded-lg shadow-lg overflow-hidden max-w-4xl w-full md:h-auto md:max-h-[90vh]">
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full space-y-6">
            <div className="flex items-center ml-24">
              <Link href="/">
                <svg
                  width="200"
                  height="25"
                  viewBox="0 0 200 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.028 24.5H0.26V0.379999H9.404L13.004 9.884L14.552 16.112H15.02L16.676 9.884L19.88 0.379999H29.024V24.5H22.256V15.68L22.652 10.496H22.184L20.708 16.04L18.764 21.98H10.52L8.576 16.04L7.064 10.496H6.596L7.028 15.68V24.5ZM41.4291 24.86C33.7611 24.86 29.2971 19.964 29.2971 12.44C29.2971 4.916 33.7611 0.0199997 41.4291 0.0199997C49.0611 0.0199997 53.5251 4.916 53.5251 12.44C53.5251 19.964 49.0611 24.86 41.4291 24.86ZM41.4291 18.272C45.1371 18.272 46.2531 17.084 46.2531 12.44C46.2531 7.796 45.1371 6.608 41.4291 6.608C37.6851 6.608 36.5691 7.796 36.5691 12.44C36.5691 17.084 37.6851 18.272 41.4291 18.272ZM68.3662 24.5H59.0422L50.7982 0.379999H58.4302L63.5422 16.94H64.0102L69.0142 0.379999H76.6462L68.3662 24.5ZM82.4 24.5H75.632V0.379999H82.4V24.5ZM103.029 24.5H83.5529V0.379999H103.029V6.464H90.3209V9.38H102.489V15.428H90.3209V18.416H103.029V24.5Z"
                    fill="#FFAC00"
                  />
                  <path
                    d="M119.104 24.86C111.328 24.86 107.116 19.964 107.116 12.44C107.116 4.916 111.328 0.0199997 119.104 0.0199997C126.736 0.0199997 130.444 3.98 130.444 9.596V10.424H123.208V10.316C123.208 7.544 122.308 6.608 118.96 6.608C115.504 6.608 114.388 7.436 114.388 12.44C114.388 17.444 115.504 18.272 118.96 18.272C122.308 18.272 123.208 17.336 123.208 14.564V14.456H130.444V15.284C130.444 20.9 126.736 24.86 119.104 24.86ZM137.427 24.5H130.659V0.379999H137.427V9.344H146.463V0.379999H153.231V24.5H146.463V15.428H137.427V24.5ZM161.168 24.5H154.4V0.379999H161.168V24.5ZM181.185 24.5H162.321V0.379999H169.089V18.416H181.185V24.5ZM199.759 24.5H180.895V0.379999H187.663V18.416H199.759V24.5Z"
                    fill="#CC8900"
                  />
                </svg>
              </Link>
            </div>
            <h2 className="text-center text-3xl font-bold text-white">
              Sign in to your account
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
                {isSubmitting ? "Creating Account..." : "Register"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-yellow-400 hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </div>

        <div className="md:w-1/2 hidden md:block">
          <img
            src="/Frame.png"
            alt="Login"
            className="h-full w-full object-cover max-h-[90vh]"
          />
        </div>
      </div>
    </div>
  );
}
