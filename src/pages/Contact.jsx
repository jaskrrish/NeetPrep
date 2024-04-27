import React, { useState } from "react";
import ContactBG from "../assets/ContactBG.png";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {};

  return (
    <div
      className="bg-cover bg-no-repeat sm:bg-none"
      style={{
        backgroundImage: `url(${ContactBG})`,
        height: "89vh",
      }}
    >
      <div className="flex py-[3rem] justify-center items-center">
        <div className="flex flex-col border-2 w-fit p-4 rounded-lg bg-white/30 backdrop-blur-md items-center justify-center">
          <p className="text-center my-[2rem] text-3xl font-bold font-Poppins">
            Contact Us
          </p>
          <p className="text-center text-xl font-Poppins">
            Some Contact Information on how to reach out
          </p>
          <form
            onSubmit={handleSubmit}
            className="my-4 mx-2 flex flex-col p-2 font-Poppins"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="p-2 w-[20rem] focus:border-[#754ffe] focus:outline-none px-4 my-2 rounded-md border-2 border-gray-300 "
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="p-2 w-[20rem] focus:border-[#754ffe] focus:outline-none px-4 my-2 rounded-md border-2 border-gray-300 "
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
              rows={5}
              cols={20}
              className="p-2 w-[20rem] h-[10rem] focus:border-[#754ffe] focus:outline-none px-4 my-2 rounded-md border-2 border-gray-300 "
            />
            <button
              type="submit"
              className="py-2 w-[20rem] font-bold text-lg font-Outfit text-white mt-[2rem] bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
