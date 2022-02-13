import React, { useState } from "react";
import settingIcon from "../assets/images/setting.svg";
import euthereumIcon from "../assets/images/euthereum.svg";
import arrowDownIcon from "../assets/images/arrow-down.svg";
import bnbIcon from "../assets/images/bnb.svg";
import exchangeIcon from "../assets/images/exchange-icon.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Setting from "./Setting";

function ConfirmSwap({ setShowSelectToken }) {
  const [showSetting, setShowSetting] = useState(false);
  const [swapFrom, setSwapFrom] = useState("0.5");
  const [swapTo, setSwapTo] = useState("93.745");

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="w-11/12 max-w-[486px] bg-[#F8F8F9] mx-auto p-6 relative">
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
          <div className="flex">
            <div className="flex-1">
              <input
                type="number"
                className="appearance-none placeholder:text-[#AFB4C0] text-2xl outline-0 w-11/12"
                placeholder="0"
                value={swapFrom}
                onChange={(e) => setSwapFrom(e.target.value)}
              />
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
          <div className="flex">
            <div className="flex-1">
              <input
                type="number"
                className="appearance-none placeholder:text-[#AFB4C0] text-2xl outline-0 w-11/12"
                placeholder="0"
                value={swapTo}
                onChange={(e) => setSwapTo(e.target.value)}
              />
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
        <p className="text-sm text-[#090A0B] my-4 leading-6">Output is estimated. You will recieve at least 938.5 AMPL, or the transaction will revert</p>
        <div className="mt-6">
          <div className="flex items-center justify-between mt-2">
            <p className="text-[#636A7E] text-sm flex items-center gap-4">
              Price
              <HelpOutlineIcon style={{ color: "#636A7E", fontSize: "15px" }} />
            </p>
            <p className="text-[#090A0B]">0.000527443 ETH per AMPL</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[#636A7E] text-sm flex items-center gap-4">
              Minimum recieved
              <HelpOutlineIcon style={{ color: "#636A7E", fontSize: "15px" }} />
            </p>
            <p className="text-[#090A0B]">9747.934AMPL</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[#636A7E] text-sm flex items-center gap-4">
              Slippage Tolerance
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
        </div>
        <button className="capitalize w-full h-[52px] rounded-md font-[16px] text-[#F5FA80] bg-[#000000] mt-8">
          Confirm swap
        </button>
      </div>
    </div>
  );
}

export default ConfirmSwap;
