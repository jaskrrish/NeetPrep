import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic to handle the form submission
    console.log(email, password);
    notify();
  };

  const notify = () =>
    toast.success("Registered Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    });

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[40rem] py-4 rounded-lg bg-white shadow-xl flex flex-col items-center justify-center">
        <p className="text-center font-bold font-Outfit text-[#fb6871] text-3xl p-2">
          Login
        </p>
        {/* form section  */}
        <form onSubmit={handleSubmit} className="my-4 mx-2 flex flex-col p-2">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Name"
            required
            className="p-2 w-[20rem] focus:border-[#754ffe] focus:outline-none px-4 my-2 rounded-md border-2 border-gray-300 "
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="p-2 w-[20rem] px-4 my-2 rounded-md border-2 border-gray-300 focus:border-[#754ffe] focus:outline-none"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
            >
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </div>
          </div>
          <button
            type="submit"
            className="py-2 w-[20rem] font-bold text-lg font-Outfit text-white mt-[2rem] bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4"
          >
            Login
          </button>
          <p className="text-center text-gray-900 my-2">
            Dont&apos;t have an Account{" "}
            <Link className="text-black font-bold" to="/register">
              Signup
            </Link>{" "}
          </p>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnHover
            transition="Bounce"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
