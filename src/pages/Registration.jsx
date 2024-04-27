import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  const [phnNumber, setPhnNumber] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [batch, setBatch] = useState("");
  const [state, setState] = useState("");
  const [repeater, setRepeater] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const navigateTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      username: name,
      email: email,
      phoneNumber: phnNumber,
      password: password,
      batch: batch,
      repeater: repeater,
    };

    try {
      const response = await fetch(
        "https://inadequate-caitlin-jaskrrish.koyeb.app/api/auth/register",
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
        // User registered successfully
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

        // Redirect to login page
        // You should replace '/login' with your actual login route
        navigateTo("/login"); //TODO: wait
      } else {
        // User already exists or some other error occurred
        toast.error(responseData.message, {
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
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.", {
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
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[50rem] py-4 rounded-lg bg-white shadow-xl flex flex-col items-center justify-center">
        <p className="text-center font-bold text-3xl text-[#fb6871] font-Outfit p-2">
          Register Yourself
        </p>
        {/* form section  */}
        <form
          onSubmit={handleSubmit}
          className="my-4 mx-2 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 p-2"
        >
          <div className="flex flex-col">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="p-2 w-[20rem] px-4 my-2 rounded-md border-2 border-gray-300 focus:border-[#754ffe] focus:outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="p-2 w-[20rem] px-4 my-2 rounded-md border-2 border-gray-300 focus:border-[#754ffe] focus:outline-none"
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
            <div className="relative">
              <input
                type={showConfPassword ? "text" : "password"}
                value={confPass}
                onChange={(e) => setConfPass(e.target.value)}
                placeholder="Confirm Password"
                required
                className="p-2 px-4 w-[20rem] my-2 rounded-md border-2 border-gray-300 focus:border-[#754ffe] focus:outline-none"
              />
              <div
                onClick={() => setShowConfPassword(!showConfPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
              >
                {showConfPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </div>
            </div>{" "}
          </div>
          <div className="flex flex-col">
            <PhoneInput
              country={"in"}
              value={phnNumber}
              required={true}
              onChange={(value) => setPhnNumber(value)}
              className="p-2 w-[20rem] px-4 my-2 rounded-md border-2 border-gray-300 focus:border-[#754ffe] focus:outline-none"
            />
            <select
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
              className={`p-2 w-[20rem] px-4 my-2 rounded-md text-${
                batch ? "black" : "gray-400"
              } border-2 border-gray-300 focus:border-[#754ffe] focus:outline-none`}
            >
              {/* created a selected option which shows Select a Batch */}
              <option value="" selected className="p-2 text-gray-600">
                Select a Batch
              </option>
              <option value="NEET2024" className="p-2 text-gray-600">
                NEET 2024
              </option>
              <option value="NEET2025" className="p-2 text-gray-800">
                NEET 2025
              </option>
              <option value="OTHER" className="p-2 text-gray-800">
                OTHER
              </option>
            </select>
            {/* States Selection */}
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className={`p-2 w-[20rem] px-4 my-2 rounded-md text-${
                state ? "black" : "gray-400"
              } border-2 border-gray-300 focus:border-[#754ffe] focus:outline-none`}
            >
              <option value="" selected className="p-2 text-gray-600">
                Select a State
              </option>
              <option value="Andhra Pradesh" className="p-2 text-gray-600">
                Andhra Pradesh{" "}
              </option>
              <option value="Arunachal Pradesh" className="p-2 text-gray-600">
                Arunachal Pradesh{" "}
              </option>
              <option value="Assam" className="p-2 text-gray-600">
                Assam{" "}
              </option>
              <option value="Bihar" className="p-2 text-gray-600">
                Bihar{" "}
              </option>
              <option value="Chhattisgarh" className="p-2 text-gray-600">
                Chhattisgarh{" "}
              </option>
              <option value="Goa" className="p-2 text-gray-600">
                Goa{" "}
              </option>
              <option value="Gujarat" className="p-2 text-gray-600">
                Gujarat{" "}
              </option>
              <option value="Haryana" className="p-2 text-gray-600">
                Haryana{" "}
              </option>
              <option value="Himachal Pradesh" className="p-2 text-gray-600">
                Himachal Pradesh{" "}
              </option>
              <option value="Jharkhand" className="p-2 text-gray-600">
                Jharkhand{" "}
              </option>
              <option value="Karnataka" className="p-2 text-gray-600">
                Karnataka{" "}
              </option>
              <option value="Kerala" className="p-2 text-gray-600">
                Kerala{" "}
              </option>
              <option value="Madhya Pradesh" className="p-2 text-gray-600">
                Madhya Pradesh{" "}
              </option>
              <option value="Maharashtra" className="p-2 text-gray-600">
                Maharashtra{" "}
              </option>
              <option value="Manipur" className="p-2 text-gray-600">
                Manipur{" "}
              </option>
              <option value="Meghalaya" className="p-2 text-gray-600">
                Meghalaya{" "}
              </option>
              <option value="Mizoram" className="p-2 text-gray-600">
                Mizoram{" "}
              </option>
              <option value="Nagaland" className="p-2 text-gray-600">
                Nagaland{" "}
              </option>
              <option value="Odisha" className="p-2 text-gray-600">
                Odisha{" "}
              </option>
              <option value="Punjab" className="p-2 text-gray-600">
                Punjab{" "}
              </option>
              <option value="Rajasthan" className="p-2 text-gray-600">
                Rajasthan{" "}
              </option>
              <option value="Sikkim" className="p-2 text-gray-600">
                Sikkim{" "}
              </option>
              <option value="Tamil Nadu" className="p-2 text-gray-600">
                Tamil Nadu{" "}
              </option>
              <option value="Telangana" className="p-2 text-gray-600">
                Telangana{" "}
              </option>
              <option value="Tripura" className="p-2 text-gray-600">
                Tripura{" "}
              </option>
              <option value="Uttar Pradesh" className="p-2 text-gray-600">
                Uttar Pradesh{" "}
              </option>
              <option value="Uttarakhand" className="p-2 text-gray-600">
                Uttarakhand{" "}
              </option>
              <option value="West Bengal" className="p-2 text-gray-600">
                West Bengal{" "}
              </option>
              <option
                value="Andaman and Nicobar Islands"
                className="p-2 text-gray-600"
              >
                Andaman and Nicobar Islands{" "}
              </option>
              <option value="Chandigarh" className="p-2 text-gray-600">
                Chandigarh{" "}
              </option>
              <option
                value="Dadra and Nagar Haveli"
                className="p-2 text-gray-600"
              >
                Dadra and Nagar Haveli{" "}
              </option>
              <option value="Daman and Diu" className="p-2 text-gray-600">
                Daman and Diu{" "}
              </option>
              <option value="Lakshadweep" className="p-2 text-gray-600">
                Lakshadweep{" "}
              </option>
              <option value="Delhi" className="p-2 text-gray-600">
                Delhi{" "}
              </option>
              <option value="Puducherry" className="p-2 text-gray-600">
                Puducherry{" "}
              </option>
            </select>
            <select
              value={repeater}
              onChange={(e) => setRepeater(e.target.value)}
              className={`p-2 w-[20rem] px-4 my-2 rounded-md text-${
                repeater ? "black" : "gray-400"
              } border-2 border-gray-300 focus:border-[#754ffe] focus:outline-none`}
            >
              <option value="" selected className="p-2 text-gray-400">
                Are You a Repeater
              </option>
              <option value="Yes" className="p-2 text-gray-400">
                Yes
              </option>
              <option value="No" className="p-2 text-gray-400">
                No
              </option>
            </select>{" "}
          </div>
          {/* Register Button section */}
          <div className="flex flex-col">
            <button
              type="submit"
              className="py-2 w-[20rem] font-bold text-lg font-Poppins text-white mt-[2rem] bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4 active:bg-white active:text-[#754ffe]"
            >
              Register
            </button>
            <p className="text-center text-gray-900 my-2">
              Already have an Account{" "}
              <Link className="text-black font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
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

export default Registration;
