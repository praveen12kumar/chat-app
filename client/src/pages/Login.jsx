import React, {useState} from 'react'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username:"",
      password:"",
    })

    const handleInput = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("formData", formData);
    };

  return (
    <div className="max-w-md mx-auto shadow-md p-10 mt-36 rounded-md">
      <h1 className='text-2xl uppercase font-heading text-center mb-8 font-medium tracking-wider underline underline-offset-2'>Login</h1>
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3">
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
            {status === "pending" ? "Loading..." : "Login"}
          </button>
        </div>
        <p className="mt-2">Don't have an Account? <span className="ml-4 text-lg text-blue-600 font-medium cursor-pointer" onClick={()=> navigate('/register')}>Register</span> </p>
      </form>
    </div>
  )
}

export default Login
