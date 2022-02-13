import React, { useState, Fragment } from "react";
import euthereumIcon from "../assets/images/euthereum.svg";
import bnbIcon from "../assets/images/bnb.svg";
import accountOneAvatar from "../assets/images/account1.svg";

const SignatureRequest = () => {
  const [showConfirm, setShowConfirm] = useState(true)
  return (
    <div className="flex-1 flex justify-center items-center flex-col">
      <div className="w-11/12 max-w-[486px] mx-auto bg-white rounded-md p-6 relative">
        <div className="relative flex items-center gap-4">
          <img
            src={accountOneAvatar}
            alt="setting icon"
            className="cursor-pointer"
          />
          <h3 className="text-md text-[#090A0B] font-medium">
            Ethereum Manniet
          </h3>
        </div>
        {!showConfirm ? <Fragment>
          <h4 className="font-semibold my-2 mt-6">Signature request</h4>
          <div className="relative flex items-center gap-4 mt-6">
            <img
              src={accountOneAvatar}
              alt="setting icon"
              className="cursor-pointer"
            />
            <div>
              <h3 className="text-md text-[#090A0B] font-medium">
                Swaplux V2
              </h3>
              <p className="text-sm text-[#636A7E]">
                https://app.swaplux.org/0x000173b...9334r
              </p>
            </div>
          </div>
          <h4 className="font-semibold my-2 mt-6">Message</h4>
          <div className="mt-4">
            <div className="mt-2">
              <div className="mt-3">
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#636A7E] text-sm">Owner</p>
                  <p className="text-[#636A7E] text-sm">0xr234onci3o8434i0r420394u3943043</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#636A7E] text-sm">Spender</p>
                  <p className="text-[#636A7E] text-sm">0xr234onci3o8434i0r420394u3943043</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#636A7E] text-sm">Value</p>
                  <p className="text-[#636A7E] text-sm">45678934</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#636A7E] text-sm">Nonce</p>
                  <p className="text-[#636A7E] text-sm">0x00</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#636A7E] text-sm">Deadline</p>
                  <p className="text-[#636A7E] text-sm">23456787612</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <button className="w-[48%] text-[#DDDFE4] border-[#DDDFE4] border py-2 rounded-md font-medium">
                  Cancel
                </button>
                <button className="w-[48%] bg-black text-[#F5FA80] py-2 rounded-md">
                  Sign
                </button>
              </div>
            </div>
          </div>
        </Fragment> : 
        <Fragment>
          <h4 className="font-semibold my-2 mt-6">Allow https://app.swaplux.org to spend your Swaplux V2</h4>
          <p className="text-[#636A7E] text-sm">
            Do you trust this site? By granting this ppermission, you're allowing 
            https://app.swaplux.org to withdraw your swaplux v2 and automate
            transactions for you.
          </p>
          <div className="mt-2">
            <h4 className="font-semibold mt-6 text-[12px]">Edit permission</h4>
            <div className="mt-8">
              <div className='flex justify-between items-center'>
                <h2 className='text-sm font-semibold'>Transaction Fee</h2>
                <button className='text-[12px] font-medium bg-[#D7E4E3] py-[4px] px-2 rounded-md cursor-pointer'>Edit</button>
              </div>
              <div className='flex justify-between items-center mt-6'>
                <h2 className='text-sm text-[#636A7E]'>A fee is associated</h2>
                <p className='text-sm font-semibold'>$6.92</p>
              </div>
              <p className="text-[#636A7E] text-right text-sm">0.001456 ETH</p>
              <p className="font-semibold text-center py-2 text-sm mt-4">View Full Transactiondetails</p>
              <div className="flex items-center justify-between mt-6">
                <button className="w-[48%] text-[#DDDFE4] border-[#DDDFE4] border py-2 rounded-md font-medium">
                  Reject
                </button>
                <button className="w-[48%] bg-black text-[#F5FA80] py-2 rounded-md">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      }
      </div>
    </div>
  );
};

export default SignatureRequest;
