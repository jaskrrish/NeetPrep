import React, { useState } from "react";
import { Loading } from "../components";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(
        "https://2472-115-99-44-171.ngrok-free.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        // Login successful
        const authToken = responseData.token;

        // Store authToken in localStorage
        localStorage.setItem("authToken", authToken);

        const emailName = email.split("@")[0];

        // Store emailName in localStorage
        localStorage.setItem("emailName", emailName);

        toast.success("Login Successfully!");
        setIsLoading(false);
        // Redirect to exam page
        navigate("/"); //loading
      } else {
        // Login failed
        setIsLoading(false);
        toast.error(responseData.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-[40rem] py-4 rounded-lg bg-white shadow-xl flex flex-col items-center justify-center">
          <p className="text-center font-bold font-Poppins text-[#fb6871] text-3xl p-2">
            LOGIN
          </p>
          {/* form section  */}
          <form onSubmit={handleSubmit} className="my-4 mx-2 flex flex-col p-2">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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
              className="py-2 w-[20rem] font-bold text-lg font-Poppins text-white mt-[2rem] bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4"
            >
              Login
            </button>
            <p className="text-center text-gray-900 my-2">
              Don&apos;t have an Account{" "}
              <Link className="text-black font-bold" to="/register">
                Signup
              </Link>{" "}
            </p>
          </form>
          <Toaster
            expand
            visibleToasts={9}
            position="top-center"
            closeButton
            richColors
          />
        </div>
      )}
    </div>
  );
};

export default Login;
