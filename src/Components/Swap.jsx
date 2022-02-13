import React, { useState } from "react";
import settingIcon from "../assets/images/setting.svg";
import euthereumIcon from "../assets/images/euthereum.svg";
import arrowDownIcon from "../assets/images/arrow-down.svg";
import bnbIcon from "../assets/images/bnb.svg";
import exchangeIcon from "../assets/images/exchange-icon.svg";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Setting from "./Setting";

function Swap({ setShowSelectToken }) {
  const [showSetting, setShowSetting] = useState(false);
  const [swapFrom, setSwapFrom] = useState("");
  const [swapTo, setSwapTo] = useState("");

  const buttonStyles = {
    backgroundColor: "#000000",
    color: "#F5FA80"
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <div style={{marginTop: swapFrom && "1em"}} className="w-11/12 max-w-[486px] bg-[#F8F8F9] mx-auto p-6 relative">
        <div className="relative flex items-center justify-between">
          <h3>Swap</h3>
          <img
            src={settingIcon}
            alt="setting icon"
            className="cursor-pointer"
            onClick={() => setShowSetting(!showSetting)}
          />
          {showSetting && <Setting />}
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
              onClick={() => setShowSelectToken(true)}
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
              onClick={() => setShowSelectToken(true)}
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
        {!swapFrom && (
          <div className="flex items-center justify-between mt-4">
            <p className="font-[16px] text-[#636A7E]">Slippage Tolerance</p>
            <p className="font-[18px] text-[#090A0B]">1%</p>
          </div>
        )}
        {swapFrom && (
          <div className="flex items-center justify-between mt-4">
            <p className="font-[16px] text-[#636A7E]">Price</p>
            <p className="font-[18px] text-[#090A0B]">
              0.000527443 ETH per AMPL{" "}
              <AutorenewOutlinedIcon style={{ color: "#090A0B" }} />
            </p>
          </div>
        )}
        <button
          style={swapFrom ? buttonStyles : {}}
          className="capitalize w-full h-[52px] rounded-md font-[16px] text-[#DDDFE4] bg-[#F4F4F6] mt-3"
        >
          {swapFrom ? "Swap" : "Enter An Amount"}
        </button>
        {swapFrom && 
          <div className="mt-4">
            <div className="flex items-center justify-between mt-2">
              <p className="text-[#636A7E] text-sm flex items-center gap-4">
                Minimum recieved
                <HelpOutlineIcon style={{ color: "#636A7E", fontSize: "15px" }} />
              </p>
              <p className="text-[#090A0B]">9747.934AMPL</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[#636A7E] text-sm flex items-center gap-4">
                Price impact
                <HelpOutlineIcon style={{ color: "#636A7E", fontSize: "15px" }} />
              </p>
              <p className="text-green-400">&#60;0.01%</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[#636A7E] text-sm flex items-center gap-4">
                Liquidity provider fee
                <HelpOutlineIcon style={{ color: "#636A7E", fontSize: "15px" }} />
              </p>
              <p className="text-[#090A0B]">0.0015 ETH</p>
            </div>
            <h5 className="text-center font-semibold text-[#090A0B] mt-4 text-sm">View Pair Analytics</h5>
          </div>
        }
      </div>
    </div>
  );
}

export default Swap;
