"use client";

import { GoogleIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/checkbox";
import { Input } from "@heroui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { setData, loginData } = useAuthStore();
  const { email, password, remember } = loginData;

  const handleLogin = () => {
    // Perform login action
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!password) {
      toast.error("Please enter your password");
      return;
    }

    toast.warn("Login successful!");
  };

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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h2>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          {/* Google Sign In */}
          <div className="space-y-4">
            <Button
              variant="bordered"
              startContent={<GoogleIcon />}
              className="w-full flex items-center justify-center px-4 py-3 border border-rose-300 rounded-lg shadow-sm  text-sm font-medium text-rose-700  focus:outline-none  transition-colors duration-200"
            >
              Sign in with Google
            </Button>
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
            <div className="min-h-[70px]">
              <Input
                label="Email"
                value={email || ""}
                type="email"
                onChange={(e) => setData("login", { email: e.target.value })}
                variant="bordered"
                isRequired
                size="sm"
                className="border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-none transition duration-200"
              />
            </div>

            <div className="min-h-[70px]">
              <Input
                label="Password"
                type={showPassword ? "text" : "password"}
                isRequired
                value={password || ""}
                variant="bordered"
                onChange={(e) => setData("login", { password: e.target.value })}
                size="sm"
                className="border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-none transition duration-200"
                endContent={
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-rose-400 hover:text-rose-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-rose-400 hover:text-rose-500" />
                    )}
                  </button>
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Checkbox
                defaultSelected
                radius="sm"
                isSelected={remember || false}
                onChange={(e) =>
                  setData("login", { remember: e.target.checked })
                }
                className="focus:ring-2 focus:ring-rose-500 focus:border-rose-500 focus:outline-none transition duration-200"
              >
                Remember me
              </Checkbox>

              <div className="text-sm">
                <Link
                  href="/forgotPassword"
                  className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              onPress={handleLogin}
              variant="bordered"
              className="w-full flex justify-center py-3 px-4 border border-rose-600 rounded-lg shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none  transition-colors duration-200"
            >
              Sign in
            </Button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
