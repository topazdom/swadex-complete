import React, { useState } from "react";
import settingIcon from "../assets/images/setting.svg";
import euthereumIcon from "../assets/images/euthereum.svg";
import arrowDownIcon from "../assets/images/arrow-down.svg";
import bnbIcon from "../assets/images/bnb.svg";
import exchangeIcon from "../assets/images/exchange-icon.svg";
import Setting from "./Setting";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AddIcon from "@mui/icons-material/Add";

const AddLiquidity = ({setLiquidity, setShowHomePool, setShowCreatePair, setShowAddLiquidity}) => {
  const [showSetting, setShowSetting] = useState(false);
  const [swapFrom, setSwapFrom] = useState("");
  const [swapTo, setSwapTo] = useState("");

  const buttonStyles = {
    backgroundColor: "#000000",
    color: "#F5FA80"
  };

  return (
    <div className="flex-1 flex justify-center items-center flex-col">
      <div className="w-11/12 max-w-[486px] mx-auto bg-[#F8F8F9] p-6 relative">
        <div className="relative flex items-center justify-between">
          <h3 className="text-md text-[#090A0B] font-semibold flex items-center gap-2">
            <ArrowBackOutlinedIcon
              fontSize="small"
              className="cursor-pointer"
              onClick={()=> {setShowAddLiquidity(false); setShowCreatePair(true)}}
            />
            Add liquidity
          </h3>
          <img
            src={settingIcon}
            alt="setting icon"
            className="cursor-pointer"
            onClick={() => setShowSetting(!showSetting)}
          />
          {showSetting && <Setting />}
        </div>
        <div className="bg-[#F6FCFA] p-4 rounded-md mt-6">
          <p className="text-[12px] text-[#636A7E]">
            <span className="text-black font-medium">Tips: </span>
            When you add liquidity, you will recieve pool tokens representing
            your position. These tokens automatically earn fees proportional to
            your share of the pool, and can be redeemed at anytime.
          </p>
        </div>
        <div className="p-2 bg-white rounded-md mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[#636A7E] font-medium text-[11px]">From</h3>
            <p className="font-semibold text-sm mr-4 text-[11px]">Use Max</p>
          </div>
          <div className="flex">
            <div className="flex-1">
              <input
                type="number"
                className="appearance-none placeholder:text-[#AFB4C0] text-xl outline-0 w-11/12"
                placeholder="0"
                value={swapFrom}
                onChange={(e) => setSwapFrom(e.target.value)}
              />
              <p className="text-[#AFB4C0] text-sm">Balance 0.00</p>
            </div>
            <div className="cursor-pointer flex space-x-1 items-center">
              <img src={euthereumIcon} alt="ethereum" />
              <p className="text-sm">ETH</p>
              <img
                src={arrowDownIcon}
                alt="arrow down"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center relative top-[-10px]">
          <div className="p-2 px-3 rounded-md flex items-center justify-center bg-[#D7E4E3]">
            <AddIcon />
          </div>
        </div>
        <div className="p-2 bg-white rounded-md mt-[-25px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[#636A7E] font-medium text-[11px]">To</h3>
            {/* <p className='font-semibold text-sm mr-4'>Use Max</p> */}
          </div>
          <div className="flex">
            <div className="flex-1">
              <input
                type="number"
                className="appearance-none placeholder:text-[#AFB4C0] text-xl outline-0 w-11/12"
                placeholder="0"
                value={swapTo}
                onChange={(e) => setSwapTo(e.target.value)}
              />
              <p className="text-[#AFB4C0] text-sm">Balance 0.00</p>
            </div>
            <div className="cursor-pointer flex space-x-1 items-center">
              <img src={bnbIcon} alt="ethereum" />
              <p className="uppercase text-sm">BNB</p>
              <img
                src={arrowDownIcon}
                alt="arrow down"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="py-2 w-full mt-2">
          <h3 className="font-semibold">Prices and pool share</h3>
          <div className="flex justify-between items-center w-full mt-2">
            <div>
              <h4 className="text-[11px] text-[#636A7E]">WSTC per ETH</h4>
              <p>0.0438714</p>
            </div>
            <div>
              <h4 className="text-[11px] text-[#636A7E]">WSTC per ETH</h4>
              <p>0.0438714</p>
            </div>
            <div>
              <h4 className="text-[11px] text-[#636A7E]">WSTC per ETH</h4>
              <p>0.0438714</p>
            </div>
          </div>
        </div>
        <button
          style={swapFrom ? buttonStyles : {}}
          className="capitalize w-full h-[42px] rounded-md text-[13px] text-[#DDDFE4] bg-[#F4F4F6] mt-3"
          onClick={()=> {setLiquidity(true); setShowAddLiquidity(false); setShowHomePool(true)}}
        >
          {swapFrom ? "Approve BNB" : "Invalid pair"}
        </button>
        {swapFrom && (
          <button className="capitalize w-full h-[42px] rounded-md text-[13px] text-[#DDDFE4] bg-[#F4F4F6] mt-2">
            Supply
          </button>
        )}
      </div>
      {!swapFrom && (
        <p className="w-11/12 max-w-[486px] text-[11px] text-[#636A7E] mt-2">
          When you add liquidity, you will recieve pool tokens representing your
          position.These tokens automatically earn fees proportional to your
          share of the pool, and can be redeemed anytime.
        </p>
      )}
    </div>
  );
};

export default AddLiquidity;
