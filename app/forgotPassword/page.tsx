"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { InputOtp } from "@heroui/input-otp";
import { Mail, ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    toast.success("OTP sent successfully!");

    setIsLoading(true);

    try {
      // Simulate API call to send OTP
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsOtpSent(true);
    } catch (err) {
      toast.error("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call to verify OTP
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically redirect to reset password page
    } catch (err) {
      toast.error("Invalid OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToEmail = () => {
    setIsOtpSent(false);
    setOtp("");
  };

  return (
    <main className="flex min-h-screen w-full bg-gradient-to-br from-rose-100 via-white to-purple-100">
      {/* Left Side - Quiz Competition Image */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-rose-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white/80 rounded-xl shadow-2xl">
        <div className="w-full max-w-md space-y-6">
          {/* Logo and Header */}
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
              {isOtpSent ? (
                <Shield className="w-8 h-8 text-rose-600" />
              ) : (
                <Mail className="w-8 h-8 text-rose-600" />
              )}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isOtpSent ? "Verify OTP" : "Forgot Password?"}
            </h2>
            <p className="text-gray-600">
              {isOtpSent
                ? `We've sent a verification code to ${email}`
                : "Enter your email address and we'll send you an OTP to reset your password"}
            </p>
          </div>

          {/* Forgot Password Form */}
          <div className="space-y-4">
            {/* Email Input - Always visible but disabled after OTP is sent */}
            <div className="min-h-[70px]">
              <Input
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="bordered"
                isRequired
                isReadOnly={isOtpSent}
                size="sm"
                className="border-rose-300  focus:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-none transition duration-200"
              />
            </div>

            {/* Send OTP Button - Only show if OTP not sent */}
            {!isOtpSent && (
              <Button
                onPress={handleSendOtp}
                isLoading={isLoading}
                variant="bordered"
                className="w-full flex justify-center py-3 px-4 border border-rose-600 rounded-lg shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none transition-colors duration-200"
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            )}

            {/* OTP Input and Verify Button - Only show after OTP is sent */}
            {isOtpSent && (
              <>
                <div className="min-h-[70px]">
                  <label className="text-sm font-medium text-gray-700">
                    Enter OTP
                  </label>
                  <span className="text-rose-500">*</span>
                  <InputOtp
                    label="Enter OTP"
                    isRequired
                    variant="bordered"
                    length={6}
                    value={otp}
                    onValueChange={setOtp}
                    className="border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:outline-none transition duration-200"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    onPress={handleBackToEmail}
                    variant="bordered"
                    className="flex-1 flex justify-center items-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200"
                    startContent={<ArrowLeft className="w-4 h-4" />}
                  >
                    Back
                  </Button>

                  <Button
                    onPress={handleVerifyOtp}
                    isLoading={isLoading}
                    variant="bordered"
                    className="flex-1 flex justify-center py-3 px-4 border border-rose-600 rounded-lg shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none transition-colors duration-200"
                  >
                    {isLoading ? "Verifying..." : "Verify OTP"}
                  </Button>
                </div>

                {/* Resend OTP Option */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Didn't receive the code?{" "}
                    <button
                      onClick={handleSendOtp}
                      className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200"
                      disabled={isLoading}
                    >
                      Resend OTP
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Back to Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-medium text-rose-600 hover:text-rose-500 transition-colors duration-200"
              >
                Back to Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
