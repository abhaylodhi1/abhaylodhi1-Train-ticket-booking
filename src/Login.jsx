import React from "react";
import "./index.css";

function Login() {
  return (
    <div
      className="bg-[url('/src//assets/banner/banner2.png')] bg-cover bg-center min-h-screen flex items-center justify-center text-center py-20 px-4 md:px-0"
      style={{ backgroundAttachment: "fixed" }}
    >
      <div className="bg-white/70 py-10 px-6 md:px-10 rounded-3xl shadow-2xl w-full max-w-sm md:max-w-md lg:max-w-lg relative">
        <img
          src="/src/assets/text/logo.png"
          alt="Logo"
          className="absolute top-5 left-5 w-24 md:w-36"
        />
        <form className="flex flex-col space-y-6 mt-20">
          <div className="flex flex-col">
            <input
              id="email"
              type="email"
              className="border-b border-gray-400 focus:outline-none focus:border-blue-500 p-2 text-lg w-full"
              placeholder="Phone Number / Email"
            />
          </div>
          <div className="flex flex-col">
            <input
              id="password"
              type="password"
              className="border-b border-gray-400 focus:outline-none focus:border-blue-500 p-2 text-lg w-full"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-3 md:mb-0">
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me" className="text-lg">Remember me</label>
            </div>
            <a href="/forgot-password" className="text-black hover:underline text-lg">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="mx-auto hover:scale-105 transition-transform">
            <img src="/src/assets/buttons/login button.png" alt="Login" className="w-28 md:w-36" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
