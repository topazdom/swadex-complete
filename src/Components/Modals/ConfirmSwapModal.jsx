import React, { useState } from "react";
import closeIcon from "../../assets/images/close.svg";
import euthereumIcon from "../../assets/images/euthereum.svg";

const ConfirmSwapModal = () => {
  const [showLists, setShowLists] = useState(true);

  const buttonStyle = {
    backgroundColor: "#000000",
    color: "#F5FA80"
  };

  return (
    <div className="w-screen h-screen absolute inset-0 bg-[#50505099] flex items-center justify-center">
      <div className="py-6 px-4 bg-[#D9D9DA] w-11/12 max-w-[364px] rounded-md relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-md text-[#090A0B] font-semibold flex items-center gap-2">
            Swap Exact ETH for Token
          </h3>
          <img src={closeIcon} alt="" className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 mt-6 mb-2">
          <h3 className="text-2xl font-normal">0.5</h3>
          <img src={euthereumIcon} alt="" />
        </div>
        <p className="mb-4 font-medium text-gray-600">Balance: $999.37</p>
        <div className="flex items-center bg-white rounded-md mb-3">
          <button
            style={showLists ? buttonStyle : {}}
            className="flex-1 py-3 px-6 rounded-md font-medium transition duration-200"
            onClick={() => setShowLists(true)}
          >
            Details
          </button>
          <button
            style={!showLists ? buttonStyle : {}}
            className="flex-1 py-3 px-6 rounded-md font-medium transition duration-200"
            onClick={() => setShowLists(false)}
          >
            Data
          </button>
        </div>
        <div>
          <div className="cursor-pointer px-2 py-4 mt-4 rounded-t-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">Gas fee</h6>
                <p className="bg-[#D7E4E3] text-[12px] py-1 px-2 rounded-md text-center font-medium">Edit</p>
              </div>
            </div>
            <div>
              <h6 className="font-medium text-base">0.0101056 ETH</h6>
              <p className="text-[#AFB4C0] text-[14px] text-right">$19.72</p>
            </div>
          </div>
          <div className="cursor-pointer px-2 py-4 mt-[1px] rounded-b-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">Total Amount</h6>
                <p className="h-6"></p>
              </div>
            </div>
            <div>
              <h6 className="font-medium text-base">0.0101056 ETH</h6>
              <p className="text-[#AFB4C0] text-[14px] text-right">$950.72</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="w-[48%] text-[#090A0B] border border-[#090A0B] py-2 rounded-md font-semibold">Reject</button>
          <button className="w-[48%] bg-black text-[#F5FA80] py-2 rounded-md">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmSwapModal;
