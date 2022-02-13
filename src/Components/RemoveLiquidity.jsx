import React, { useState } from "react";
import settingIcon from "../assets/images/setting.svg";
import euthereumIcon from "../assets/images/euthereum.svg";
import bnbIcon from "../assets/images/bnb.svg";
import Setting from "./Setting";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const RemoveLiquidity = () => {
  const [showSetting, setShowSetting] = useState(false);

  return (
    <div className="flex-1 flex justify-center items-center flex-col">
      <div className="w-11/12 max-w-[486px] mx-auto bg-white rounded-md p-6 relative">
        <div className="relative flex items-center justify-between">
          <h3 className="text-md text-[#090A0B] font-semibold flex items-center gap-2">
            <ArrowBackOutlinedIcon
              fontSize="small"
              className="cursor-pointer"
            />
            Remove liquidity
          </h3>
          <img
            src={settingIcon}
            alt="setting icon"
            className="cursor-pointer"
            onClick={() => setShowSetting(!showSetting)}
          />
          {showSetting && <Setting />}
        </div>
        <div className="bg-[#F6FCFA] p-4 rounded-md mt-5">
          <p className="text-[13px] text-[#636A7E]">
            <span className="text-black font-medium">Tips: </span>
            When you add liquidity, you will recieve pool tokens representing
            your position. These tokens automatically earn fees proportional to
            your share of the pool, and can be redeemed at anytime.
          </p>
        </div>
        <div className="mt-4">
          <div className='flex justify-between items-center'>
            <h2 className='text-sm font-semibold'>Amount</h2>
            <button className='text-sm font-medium bg-[#D7E4E3] py-[4px] px-2 rounded-md cursor-pointer'>Detailed</button>
          </div>
          <h3 className="my-2 text-2xl font-medium">62%</h3>
          <div className="flex gap-2 items-center">
            <button className="text-sm p-2 rounded-md bg-[#F4F4F6]">25%</button>
            <button className="text-sm p-2 rounded-md bg-[#F4F4F6]">50%</button>
            <button className="text-sm p-2 rounded-md bg-[#F4F4F6]">75%</button>
            <button className="text-sm p-2 rounded-md bg-[#F4F4F6]">MAX</button>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between mt-2">
              <p className="text-[#636A7E] text-sm flex items-center gap-4">
                0.0000001498
              </p>
              <p className="text-[#090A0B] flex items-center gap-2">
                ETH
                <img src={euthereumIcon} alt="" className="h-6 w-6" />
              </p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[#636A7E] text-sm flex items-center gap-4">
                0.000140498
              </p>
              <p className="text-[#090A0B] flex items-center gap-2">
                BNB
                <img src={bnbIcon} alt="" className="h-6 w-6" />
              </p>
            </div>
            <h5 className="text-right font-semibold text-[#090A0B] mt-4 text-sm">Recieve WETH</h5>
            <div className="pt-3 border-t-2 mt-3">
              <div className="flex items-center justify-between mt-2">
                <p className="text-[#636A7E] text-sm">
                  price
                </p>
                <p className="text-[#636A7E] text-sm">
                  1 ETH = 981.33 BNB
                </p>
              </div>
              <p className="text-[#636A7E] text-right text-sm mt-2">
                1 BNB = 981.33 ETH
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="w-[48%] text-[#DDDFE4] border-[#DDDFE4] border py-2 rounded-md font-medium">Remove</button>
              <button className="w-[48%] bg-black text-[#F5FA80] py-2 rounded-md">Approve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveLiquidity;
