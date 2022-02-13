import React from "react";
import closeIcon from "../../assets/images/close.svg";
import euthereumIcon from "../../assets/images/euthereum.svg";
import bnbIcon from "../../assets/images/bnb.svg";

const ConfirmLiquidityModal = ({setShowImportToken, setShowManageList}) => {
  return (
    <div className="w-screen h-screen absolute inset-0 bg-[#50505099] flex items-center justify-center">
      <div className="py-6 px-4 bg-[#D9D9DA] w-11/12 max-w-[364px] rounded-md relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-md text-[#090A0B] font-semibold">
            You will recieve
          </h3>
          <img src={closeIcon} alt="" className="cursor-pointer" />
        </div>
        <div className="flex items-center justify-between mt-4">
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
          <p className="text-[13px] text-[#636A7E] mt-3">
            Output is estimated. if the price changes by
            more than 0.5%, your transaction will revert.
          </p>
          <h2 className="font-semibold mt-4">Deva ETH/BNB</h2>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[#636A7E] text-sm flex items-center gap-4">
              UNI ETH/BNB
            </p>
            <p className="text-[#090A0B] flex items-center gap-2">
              0.000140498
              <img src={euthereumIcon} alt="" className="h-6 w-6" />
              <img src={bnbIcon} alt="" className="h-6 w-6" />
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-[#636A7E] text-sm">Price</p>
            <p className="text-[#636A7E] text-sm">1 ETH = 970.164 BNB</p>
          </div>
          <p className="text-[#636A7E] text-sm text-right">1 BNB = 0.000028475 ETH</p>
          <button className="bg-black font-medium w-full text-[#F5FA80] py-3 px-6 rounded-md mt-6 text-sm">
            Confirm
          </button>
        </div>
      </div>
  );
};

export default ConfirmLiquidityModal;
