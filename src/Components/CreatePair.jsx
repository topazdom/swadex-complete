import React, { useState } from "react";
import settingIcon from "../assets/images/setting.svg";
import euthereumIcon from "../assets/images/euthereum.svg";
import arrowDownIcon from "../assets/images/arrow-down.svg";
import bnbIcon from "../assets/images/bnb.svg";
import exchangeIcon from "../assets/images/exchange-icon.svg";
import Setting from "./Setting";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const CreatePair = ({setShowHomePool, setShowCreatePair, setShowAddLiquidity}) => {
  const [showSetting, setShowSetting] = useState(false);
  const [swapFrom, setSwapFrom] = useState("");
  const [swapTo, setSwapTo] = useState("");

  const buttonStyles = {
    backgroundColor: "#000000",
    color: "#F5FA80"
  };
  
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="w-11/12 max-w-[486px] bg-[#F8F8F9] mx-auto p-6 relative">
        <div className="relative flex items-center justify-between">
          <h3 className="text-md text-[#090A0B] font-semibold flex items-center gap-2">
            <ArrowBackOutlinedIcon 
              fontSize="small" 
              className="cursor-pointer"
              onClick={()=> {setShowHomePool(true); setShowCreatePair(false)}}
            />
            Create a pair
          </h3>
          <img
            src={settingIcon}
            alt="setting icon"
            className="cursor-pointer"
            onClick={() => setShowSetting(!showSetting)}
          />
          {showSetting && <Setting />}
        </div>
        <div className="bg-[#F4F4F6] p-4 rounded-md mt-6">
          <h1 className="font-medium text-[#090A0B]">You are the first liquidity provider.</h1>
          <p className="text-sm text-[#636A7E] mt-2">
            The ratio of token you add will setthe price of this pool.
            Once you are happy with the rate click supply to review
          </p>
        </div>
        <div className="p-4 bg-white rounded-md mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[#636A7E] font-medium text-sm">From</h3>
            <p className="font-semibold text-sm mr-4 text-sm">Use Max</p>
          </div>
          <div className="flex">
            <div className="flex-1">
              <input
                type="number"
                className="appearance-none placeholder:text-[#AFB4C0] text-2xl outline-0 w-11/12"
                placeholder="0"
                value={swapFrom}
                onChange={(e) => setSwapFrom(e.target.value)}
              />
              <p className="text-[#AFB4C0]">Balance 0.00</p>
            </div>
            <div
              className="cursor-pointer flex space-x-1 items-center"
            >
              <img src={euthereumIcon} alt="ethereum" />
              <p>ETH</p>
              <img
                src={arrowDownIcon}
                alt="arrow down"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center relative top-[-10px]">
          <img src={exchangeIcon} alt="" className="cursor-pointer" />
        </div>
        <div className="p-4 bg-white rounded-md mt-[-25px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[#636A7E] font-medium text-sm">To</h3>
            {/* <p className='font-semibold text-sm mr-4'>Use Max</p> */}
          </div>
          <div className="flex">
            <div className="flex-1">
              <input
                type="number"
                className="appearance-none placeholder:text-[#AFB4C0] text-2xl outline-0 w-11/12"
                placeholder="0"
                value={swapTo}
                onChange={(e) => setSwapTo(e.target.value)}
              />
              <p className="text-[#AFB4C0]">Balance 0.00</p>
            </div>
            <div
              className="cursor-pointer flex space-x-1 items-center"
            >
              <img src={bnbIcon} alt="ethereum" />
              <p className="uppercase">BNB</p>
              <img
                src={arrowDownIcon}
                alt="arrow down"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <button
          style={swapFrom ? buttonStyles : {}}
          className="capitalize w-full h-[52px] rounded-md font-[16px] text-[#DDDFE4] bg-[#F4F4F6] mt-3"
          onClick={()=> {setShowAddLiquidity(true); setShowCreatePair(false)}}
        >
          {swapFrom ? "Create" : "Invalid pair"}
        </button>
      </div>
    </div>
  )
}

export default CreatePair