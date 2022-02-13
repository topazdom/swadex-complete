import React from "react";
import {useNavigate} from "react-router-dom"
import closeIcon from "../../assets/images/close.svg";
import cryptoolyIcon from "../../assets/images/icon-wrapper.svg";
import walletConnectIcon from "../../assets/images/crypto.svg";
import coinbaseIcon from "../../assets/images/crypto-1.svg";
import formaticIcon from "../../assets/images/crypto-2.svg";
import portisIcon from "../../assets/images/crypto-3.svg";

function ConnectWalletModal({setShowConnectWallet}) {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen absolute inset-0 bg-[#50505099] flex items-center justify-center">
      <div className="p-4 bg-[#F8F8F9B2] w-11/12 max-w-[364px]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg text-[#090A0B]">Connect to a wallet</h3>
          <img src={closeIcon} alt="" className="cursor-pointer" onClick={()=> setShowConnectWallet(false)} />
        </div>
        <div>
          <div className="cursor-pointer p-2 rounded-md border-[1px] border-black bg-white flex items-center justify-between" onClick={()=> navigate("/login/cryptooly")}>
            <h6 className="text-[#090A0B]">Cryptooly</h6>
            <img src={cryptoolyIcon} alt="" />
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md border-[1px] border-black bg-white flex items-center justify-between">
            <h6 className="text-[#090A0B]">walletConnect</h6>
            <img src={walletConnectIcon} alt="" />
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md border-[1px] border-black bg-white flex items-center justify-between">
            <h6 className="text-[#090A0B]">Coinbase Wallet</h6>
            <img src={coinbaseIcon} alt="" />
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md border-[1px] border-black bg-white flex items-center justify-between">
            <h6 className="text-[#090A0B]">Formatic</h6>
            <img src={formaticIcon} alt="" />
          </div>
          <div className="cursor-pointer p-2 mt-2 rounded-md border-[1px] border-black bg-white flex items-center justify-between">
            <h6 className="text-[#090A0B]">Portis</h6>
            <img src={portisIcon} alt="" />
          </div>
        </div>
        <div className="py-2 flex items-center gap-2 pt-4">
          <p className="text-[#636A7E] text-base">New to Ethereum?</p>
          <a href="/" className="text-[#016E89] text-[14px] underline">Learn more about wallets</a>
        </div>
      </div>
    </div>
  );
}

export default ConnectWalletModal;
