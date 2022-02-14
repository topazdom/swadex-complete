import React from "react";
import euthereumIcon from "../../assets/images/euthereum.svg";
import closeIcon from "../../assets/images/close.svg";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {motion} from "framer-motion";

const SelectToken = ({setShowSelectToken, setShowImportToken}) => {
  return (
    <div className="w-screen h-screen absolute inset-0 bg-[#50505099] flex items-center justify-center">
      <motion.div 
        className="py-6 px-4 bg-[#D9D9DA] w-11/12 max-w-[364px] rounded-md"
        key="SelectTokenModal"
        initial={{y: 90}}
        animate={{y: [90, 0]}}
        transition={{duration: 0.4}}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-md text-[#090A0B] font-semibold">Select a token</h3>
          <img src={closeIcon} alt="" className="cursor-pointer" onClick={()=> setShowSelectToken(false)} />
        </div>
        <input type="text" placeholder="Search name or paste address" className="w-full p-3 mb-2 rounded-md outline-0 text-sm"/>
        <div>
          <div className="cursor-pointer p-2 mt-2 rounded-md bg-white flex items-center justify-between" onClick={()=> setShowSelectToken(false)}>
            <div className="flex gap-2 items-center">
              <img src={euthereumIcon} alt="" />
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">ETH</h6>
                {/* <p className="text-[#AFB4C0] text-[14px]">hello</p> */}
              </div>
            </div>
            <div>
              <h6 className="font-medium text-base">4.8729</h6>
              <p className="text-[#AFB4C0] text-[14px] text-right">Ether</p>
            </div>
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img src={euthereumIcon} alt="" />
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">ETH</h6>
              </div>
            </div>
            <div>
              <h6 className="font-medium text-base">4.8729</h6>
              <p className="text-[#AFB4C0] text-[14px] text-right">Ether</p>
            </div>
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img src={euthereumIcon} alt="" />
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">ETH</h6>
              </div>
            </div>
            <div>
              <h6 className="font-medium text-base">4.8729</h6>
              <p className="text-[#AFB4C0] text-[14px] text-right">Ether</p>
            </div>
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img src={euthereumIcon} alt="" />
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">ETH</h6>
              </div>
            </div>
            <div>
              <button className="bg-black px-6 py-1 rounded-md text-[#F5FA80] text-sm my-2" onClick={()=>{setShowImportToken(true); setShowSelectToken(false)}}>import</button>
            </div>
          </div>
        </div>
        <div className="py-2 flex items-center justify-center pt-4">
          <button className="text-sm font-semibold flex items-center gap-1">
            <EditOutlinedIcon fontSize="small" />
            Manage
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SelectToken;
