import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Modal = ({
  openModal,
  handleCloseModal,
  biology,
  physics,
  chemistry,
}) => {
  return (
    <div
      className={`${
        !openModal && "hidden"
      } fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center`}
    >
      <div className="w-[50rem] h-[30rem] bg-white rounded-md shadow-lg">
        <div className="m-4 mb-6 flex justify-end">
          <button onClick={handleCloseModal}>
            <IoClose
              size={30}
              className="hover:text-[#754ffe] hover:scale-110 transition duration-200 ease-in-out"
            />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="w-[48rem] border-2 rounded-lg flex justify-center">
            <table className="table-auto w-full text-center">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-4 py-2 text-lg font-semibold tracking-wide">
                    Subject
                  </th>
                  <th className="px-4 py-2 text-lg font-semibold tracking-wide">
                    Questions Attended
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 text-lg text-gray-700">Biology</td>
                  <td className="p-3 text-lg text-[#754ffe] text-center font-bold">
                    {biology}
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-3 text-lg text-gray-700">Physics</td>
                  <td className="p-3 text-lg text-[#754ffe] text-center font-bold">
                    {physics}
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-lg text-gray-700">Chemistry</td>
                  <td className="p-3 text-lg text-[#754ffe] text-center font-bold">
                    {chemistry}
                  </td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="p-3 text-lg text-gray-700">Total</td>
                  <td className="p-3 text-lg text-[#754ffe] text-center font-bold">
                    {chemistry + biology + physics}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center mt-[2rem]">
          <Link to="/thanks">
            <button
              type="submit"
              className="py-2 w-[20rem] font-bold text-lg font-Outfit text-white mt-[2rem] bg-[#754ffe] rounded-lg hover:shadow-lg border-2 border-[#754ffe] hover:bg-white hover:text-[#754ffe] transition duration-500 ease-in-out active:translate-y-4"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
