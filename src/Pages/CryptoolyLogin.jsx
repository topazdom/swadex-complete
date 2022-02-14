import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"

const CryptoolyLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const buttonStyles= {
    backgroundColor: "#000000",
    color: "#F5FA80"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    password && navigate("/login/cryptooly/select-account")
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-11/12 max-w-[586px] text-center">
        <motion.h1 
          className="font-medium bg-clip-text text-transparent mr-8 text-4xl font-semibold bg-gradient-to-r from-[#000000] to-[#F5FA80] mb-8"
          initial={{x:100}}
          animate={{x: [100, 0]}}
        >
          CRYPTOOLY
        </motion.h1>
        <motion.div 
          className="bg-[#F8F8F9] px-6 py-8 w-full rounded-md"
          initial={{x:100}}
          animate={{x: [100, 0]}}
        >
          <h2 className="text-[#090A0B] text-[24px]">Welcome to Cryptooly</h2>
          <p className="text-base text-[#636A7E]">
            The decentralized web awaits
          </p>
          <form className="w-11/12 mt-6 mx-auto" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter your password"
              className="outline-0 rounded-md border-[1px] border-[#F4F4F6] bg-[#FFFFFF] p-4 text-[14px] block w-full"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <button 
              style={password ? buttonStyles : {}}
              className="p-4 w-full rounded-md text-[#DDDFE4] bg-[#F4F4F6] mt-6 transition duration-300"
              type="submit"
            >
              Unlock
            </button>
          </form>
          <button className="p-4 w-full rounded-md text-[#000000] mt-4 font-bold">
            Restore Account?
          </button>
          <button className="p-4 w-full rounded-md text-[#000000] font-bold">
            Import Using Account Seedphrase
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CryptoolyLogin;
