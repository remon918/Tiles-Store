"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaUser,
  FaImage,
  FaEnvelope,
  FaLock,
  FaCheck,
  FaEye,
  FaRotateLeft,
  FaEyeSlash,
} from "react-icons/fa6";

export default function LoginPage() {
  const { register,watch, handleSubmit, formState:{errors} } = useForm();
// console.log(watch("email"))

const [isShowPass, setIsShowPass] = useState(false);

  const handleLoginFunction = async (data) => {
    // e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const { data:res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
  };
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-4 px-4">
      <div className="card bg-base-100 border border-base-300 shadow-md w-full max-w-md">
        <div className="card-body gap-5">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-700">
              Login To Your Account
            </h1>
            <p className="text-base-content/50 text-sm mt-1">
              Fill in the details below to Login
            </p>
          </div>

          <div className="divider my-0" />

          <form className="space-y-2" onSubmit={handleSubmit(handleLoginFunction)}>
            <fieldset className="fieldset">
              <label className="label py-0">
                <span className="label-text font-medium flex items-center text-gray-700 gap-2">
                  <FaEnvelope size={13} className="text-base-content/60" />
                  Email
                </span>
              </label>
              <input
                {...register("email", { required: "Email Field is Required" })}
                type="email"
                placeholder="john@example.com"
                className="input input-bordered w-full focus:input-primary"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </fieldset>
            <fieldset>
              <label className="label py-0">
                <span className="label-text font-medium flex items-center text-gray-700 gap-2">
                  <FaLock size={13} className="text-base-content/60" />
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  {...register("password", { required: "Password Field is Required" })}
                  type={ isShowPass ? "text" : "password"}
                  minLength={8}
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-11 focus:input-primary"
                />
                <button
                onClick={() => setIsShowPass(!isShowPass)}
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-base-content transition-colors"
                >
                 {isShowPass ? <FaEye size={16} /> : <FaEyeSlash size={16}/>}
                </button>
              </div>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </fieldset>
            <button className="btn bg-violet-700 hover:bg-violet-600 text-white text-sm w-full mt-4">
              Login
            </button>
          </form>
          <p>
            Dont have an account?{" "}
            <Link
              className="text-red-500 hover:bg-red-100 underline"
              href={"/signup"}
            >
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
