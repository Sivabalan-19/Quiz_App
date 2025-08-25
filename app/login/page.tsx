"use client";

import { Input } from "@heroui/input";
import { Checkbox } from "@heroui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen w-full bg-gradient-to-br from-rose-100 via-white to-purple-100">
      {/* Left Side - Quiz Competition Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-rose-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white/80 rounded-xl shadow-2xl">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Header */}
          <div className="text-center">
            <img
              src="https://21st.dev/favicon.ico"
              width={48}
              className="mx-auto mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h2>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          {/* Google Sign In */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-center px-4 py-3 border border-rose-300 rounded-lg shadow-sm bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors duration-200">
              <svg
                className="w-5 h-5 mr-3"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <Input
              label="Email"
              type="email"
              variant="bordered"
              required
              className="border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-none transition duration-200 "
            />

            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              required
              variant="bordered"
              className="border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-none transition duration-200 "
              endContent={
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-rose-400 hover:text-rose-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-rose-400 hover:text-rose-500" />
                  )}
                </button>
              }
            />

            <div className="flex items-center justify-between">
              <Checkbox
                defaultSelected
                radius="sm"
                className="focus:ring-2 focus:ring-rose-500 focus:border-rose-500 focus:outline-none transition duration-200"
              >
                Remember me
              </Checkbox>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-rose-600 rounded-lg shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors duration-200"
            >
              Sign in
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200"
              >
                Sign up for free
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
