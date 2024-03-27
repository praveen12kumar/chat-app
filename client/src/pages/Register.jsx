import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

import { FaBriefcase } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {
    const navigate = useNavigate();
  const fileRef = useRef(null);
  const [formData, setFormData] = useState({
    name:"",
    bio:"",
    username: "",
    password: "",
    avatar: "https://i.ibb.co/QcfKmc4/profile.jpg",
  });
  const [fileUploadErr, setFileUploadErr] = useState(false);
  const [percent, setPercent] = useState(0);
  const [file, setFile] = useState(undefined);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", formData);
  };
  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  return (
    <div className="max-w-md mx-auto shadow-md p-10 mt-10 lg:mt-20  rounded-md">
      <h1 className="text-3xl font-heading font-medium text-center mb-5 underline underline-offset-2 uppercase">
        Register
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="h-24 w-24 lg:h-28 lg:w-28 mx-auto cursor-pointer">
          <input
            className="h-full w-full"
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <img
            className="h-full w-full rounded-full hover:scale-105 transition-all duration-300 ease-in"
            src={formData?.avatar}
            alt="avatar"
            onClick={() => fileRef.current.click()}
          />
          {fileUploadErr ? (
            <span>Error Image Upload (Image must be less than 2 mb)</span>
          ) : percent > 0 && percent < 100 ? (
            <span>{`Uploading ${percent}%`}</span>
          ) : percent === 100 ? (
            <span>Image successfully Uploaded!</span>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center bg-white gap-2 w-full border-2 border-slate-300 px-2 py-2 rounded-md">
            <span className="text-lg">
              <FaCircleUser />
            </span>
            <input
              className="w-full outline-none pb-1"
              type="text"
              placeholder="name"
              name="name"
              value={formData?.name}
              onChange={handleInput}
            />
          </div>
          <div className="flex items-center bg-white gap-2 w-full border-2 border-slate-300 px-2 py-2 rounded-md">
            <span className="text-lg">
              <FaBriefcase />
            </span>
            <input
              className="w-full outline-none "
              type="text"
              placeholder="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInput}
            />
          </div>
          <div className="flex items-center bg-white gap-2 w-full border-2 border-slate-300 px-2 py-2 rounded-md">
            <span className="text-lg">
              <FaUser />
            </span>
            <input
              className="w-full outline-none pb-1"
              type="text"
              placeholder="username"
              name="username"
              value={formData.username}
              onChange={handleInput}
            />
          </div>
        
          <div className="flex items-center bg-white gap-2 w-full border-2 border-slate-300 px-2 py-2 rounded-md">
            <span className="text-lg">
              <RiLockPasswordFill />
            </span>
            <input
              className="w-full outline-none pb-1"
              type="text"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
            />
          </div>

          <button
            className="w-40 mx-auto rounded-md py-2 mt-6 text-white text-lg uppercase font-medium  bg-slate-600 transition-opacity ease-in duration-200 hover:opacity-85"
            type="submit"
          >
            {status === "pending" ? "Loading..." : "Register"}
          </button>
        </div>
      </form>
      <p className="mt-2">Have an Account? <span className="ml-4 text-lg text-blue-600 font-medium cursor-pointer" onClick={()=> navigate('/login')} >Login</span></p>
    </div>
  );
};

export default Register;
