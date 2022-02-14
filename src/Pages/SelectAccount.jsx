import React from "react";
import accountOneAvatar from "../assets/images/account1.svg";
import accountTwoAvatar from "../assets/images/account2.svg";
import accountThreeAvatar from "../assets/images/account3.svg";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SelectAccount = ({setUser}) => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-11/12 max-w-[586px] text-center">
        <motion.h1 
          className="font-medium bg-clip-text text-transparent mr-8 text-4xl font-semibold bg-gradient-to-r from-[#000000] to-[#F5FA80] mb-8"
          initial={{x:100}}
          animate={{x: [100, 0]}}
        >
          SWADEX
        </motion.h1>
        <motion.div 
          className="bg-[#F8F8F9] px-6 py-8 w-full rounded-md"
          initial={{x:100}}
          animate={{x: [100, 0]}}
        >
          <h2 className="text-[#090A0B] text-[24px]">Connect to Swaplux</h2>
          <p className="text-base text-[#636A7E]">Select the account (s)</p>
          <div className="mt-8">
            <div className="cursor-pointer flex items-center p-4 rounded-md bg-white">
              <div className="flex-1 flex items-center gap-2">
                <img src={accountOneAvatar} alt="" />
                <div className="text-left">
                  <h3 className="text-[18px] text-[#090A0B] font-normal">Queen Bee</h3>
                  <p className="text-[#636A7E]">bc1q87...34pm</p>
                </div>
              </div>
              <CheckIcon style={{color: "#53AE57"}} />
            </div>
            <div className="cursor-pointer flex items-center p-4 rounded-md bg-white mt-4">
              <div className="flex-1 flex items-center gap-2">
                <img src={accountTwoAvatar} alt="" />
                <div className="text-left">
                  <h3 className="text-[18px] text-[#090A0B] font-normal">Lalimo Rubik</h3>
                  <p className="text-[#636A7E]">3g78pk...sd42</p>
                </div>
              </div>
              <CheckIcon style={{color: "#53AE57"}} />
            </div>
            <div className="cursor-pointer flex items-center p-4 rounded-md bg-white mt-4">
              <div className="flex-1 flex items-center gap-2">
                <img src={accountThreeAvatar} alt="" />
                <div className="text-left">
                  <h3 className="text-[18px] text-[#090A0B] font-normal">Neil momo</h3>
                  <p className="text-[#636A7E]">0xBBB...e96e</p>
                </div>
              </div>
              <CheckIcon style={{color: "#53AE57"}} />
            </div>
          </div>
          <label className="text-left flex items-center mt-4 cursor-pointer">
            <input 
              type="checkbox" 
              className="bg-yellow-600 text-yellow-600 accent-[#000000]" 
            /> 
            <span className="text-[14px] text-[#090A0B] leading-5 ml-2">Allow this site View the addresses of your authorized accounts (required)</span>
          </label>
          <div className="mt-6">
            <button className="w-1/2 p-4 rounded-md font-semibold">Cancel</button>
            <button className="w-1/2 p-4 rounded-md bg-[#000000] text-[#F5FA80]" onClick={()=> {setUser("ben"); navigate("/")}}>Connect</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SelectAccount;
