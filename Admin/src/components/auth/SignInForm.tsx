"use client";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import {EyeCloseIcon, EyeIcon } from "@/icons";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignInForm() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [showPassword, setShowPassword] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);
  const [isLoaading, setIsLoaading] = useState(false);

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const signin = async()=>{
    setIsLoaading(true);
    try {
      
      const res = await axios.post(`${BASE_URL}/api/signin`,{
        email : email,
        password : password,
      });

      if(res?.data?.status){
          setIsLoaading(false);
          localStorage.setItem("admin_email" , res?.data?.data?.email);
          window.location.replace("/");
      }

    } catch (error : any) {
      setIsLoaading(false);
      toast.error(error?.response?.data?.error);
    }
  };

  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enter your email and password to sign in!
            </p>
          </div>
          <div>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                </div>
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div>
                  <Link
                    href="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link>
                </div> */}
                <div>
                  <Button 
                  className="w-full flex gap-3 items-center justify-center"
                  size="sm" 
                  onClick={()=>signin()}
                  disabled={isLoaading}
                  >
                    Sign in
                    {isLoaading && (
                      <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
                      </>
                    )}
                  </Button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
