import React from "react";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";

const SubmittedModal = () => {
  return (
    <div className="flex-1 w-screen flex items-center justify-center">
      <div className="bg-white rounded-md p-4 text-center">
        <CurrencyExchangeOutlinedIcon
          style={{ fontSize: "4em", color: "#090A0B" }}
          className="mb-3 mt-4"
        />
        <h3 className="font-semibold text-[#090A0B] mt-4">
          Transaction Submitted
        </h3>
        <p className="text-sm text-[#AFB4C0]">
          Swapping 0.8ETH for 983.87223990 AMPL
        </p>
        <h4 className="font-semibold text-[#090A0B] text-sm mt-4">
          View on Therscan
        </h4>
        <button className="w-full bg-black text-[#F5FA80] p-2 rounded-md mt-3">
          close
        </button>
      </div>
    </div>
  );
};

export default SubmittedModal;
