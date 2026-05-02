"use client"

import {
  FaUser,
  FaImage,
  FaEnvelope,
  FaLock,
  FaCheck,
  FaEye,
  FaRotateLeft,
} from "react-icons/fa6";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-4 px-4">
      <div className="card bg-base-100 border border-base-300 shadow-md w-full max-w-md">
        <div className="card-body gap-5">

          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-700">Create Account</h1>
            <p className="text-base-content/50 text-sm mt-1">Fill in the details below to get started</p>
          </div>

          <div className="divider my-0" />

          {/* Name */}
          <div className="form-control gap-1">
            <label className="label py-0">
              <span className="label-text text-gray-700 font-medium flex items-center gap-2">
                <FaUser size={13} className="text-base-content/60" />
                Name
              </span>
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full focus:input-primary"
            />
          </div>

          {/* Image URL */}
          <div className="form-control gap-1">
            <label className="label py-0">
              <span className="label-text font-medium flex items-center text-gray-700 gap-2">
                <FaImage size={13} className="text-base-content/60" />
                Image URL
              </span>
            </label>
            <input
              required
              name="image"
              type="text"
              placeholder="https://example.com/avatar.png"
              className="input input-bordered w-full focus:input-primary"
            />
          </div>

          {/* Email */}
          <div className="form-control gap-1">
            <label className="label py-0">
              <span className="label-text font-medium flex items-center text-gray-700 gap-2">
                <FaEnvelope size={13} className="text-base-content/60" />
                Email
              </span>
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="john@example.com"
              className="input input-bordered w-full focus:input-primary"
            />
          </div>

          {/* Password */}
          <div className="form-control gap-1">
            <label className="label py-0">
              <span className="label-text font-medium flex items-center text-gray-700 gap-2">
                <FaLock size={13} className="text-base-content/60" />
                Password
              </span>
            </label>
            <div className="relative">
              <input
                required
                name="password"
                type="password"
                minLength={8}
                placeholder="Enter your password"
                className="input input-bordered w-full pr-11 focus:input-primary"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-base-content transition-colors"
              >
                <FaEye size={16} />
              </button>
            </div>
            <p className="text-xs text-base-content/50 mt-1">
              Must be at least 8 characters with 1 uppercase and 1 number
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-1">
            <button type="submit" className="btn btn-neutral flex-1 gap-2">
              <FaCheck size={13} />
              Submit
            </button>
            <button type="reset" className="btn btn-outline flex-1 gap-2">
              <FaRotateLeft size={13} />
              Reset
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}