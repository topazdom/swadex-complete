import React, {useState, Fragment} from "react";
import closeIcon from "../../assets/images/close.svg";

const CustomGas = ({setShowImportToken, setShowManageList}) => {
  const [showBasicSetting, setShowBasicSetting] = useState(true);

  const buttonStyle = {
    backgroundColor: "#000000",
    color: "#F5FA80"
  }

  return (
    <div className="w-screen h-screen absolute inset-0 bg-[#50505099] flex items-center justify-center">
      <div className="py-6 px-4 bg-[#D9D9DA] w-11/12 max-w-[364px] rounded-md md:h-[556px] relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-md text-[#090A0B] font-semibold">
            Customize Gas
          </h3>
          <img src={closeIcon} alt="" className="cursor-pointer" onClick={()=>{setShowImportToken(false); setShowManageList(false)}} />
        </div>
        <div className="flex items-center bg-white rounded-md mb-3">
          <button 
            style={showBasicSetting ? buttonStyle : {}}
            className="flex-1 py-2 text-sm px-6 rounded-md font-medium transition duration-200" 
            onClick={()=> setShowBasicSetting(true)}
          >
            Basic
          </button>
          <button 
            style={!showBasicSetting ? buttonStyle : {}}
             className="flex-1 py-2 text-sm px-6 rounded-md font-medium transition duration-200" 
             onClick={()=> setShowBasicSetting(false)}
            >
              Advanced
          </button>
        </div>
        {
          showBasicSetting ? 
            <Fragment>
              <h2 className="font-semibold mt-2">Estimated Processing Times</h2>
              <p className="text-[13px] text-[#636A7E] mt-2">Select a higher gas fee accelerate the processing of your transaction</p>
              <div className="flex gap-2 items-center mt-2">
                <div className="rounded-md p-2 bg-white flex-1">
                  <p className="text-sm text-[#636A7E]">Slow</p>
                  <p className="text-[12px] mt-2">0.0047527 ETH</p>
                  <p className="text-sm mt-2">$6.52</p>
                </div>
                <div className="rounded-md p-2 bg-white flex-1">
                  <p className="text-sm text-[#636A7E]">Slow</p>
                  <p className="text-[12px] mt-2">0.0047527 ETH</p>
                  <p className="text-sm mt-2">$6.52</p>
                </div>
                <div className="rounded-md p-2 bg-white flex-1">
                  <p className="text-sm text-[#636A7E]">Slow</p>
                  <p className="text-[12px] mt-2">0.0047527 ETH</p>
                  <p className="text-sm mt-2">$6.52</p>
                </div>
              </div>
              <p className="text-[13px] text-[#636A7E] mt-3">
                Acceleraating a transaction by using a higher gas
                increases its chance of getting processed by the network faster, but
                it is not always guaranteed.
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[#636A7E] text-sm">Send Amount</p>
                <p className="text-[#636A7E] text-sm">0.00000012904 ETH</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-[#636A7E] text-sm">Transaction Fee</p>
                <p className="text-[#636A7E] text-sm">0.001483930 ETH</p>
              </div>
              <div className="mt-5">
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm">
                  New Total
                </p>
                <p className="text-sm font-semibold">
                  0.003943940239493439 ETH
                </p>
              </div>
              <p className="text-right text-sm mt-2">
                $6.52
              </p>
            </div>
            <button className="bg-black font-medium w-full text-[#F5FA80] py-2 px-6 rounded-md mt-3 text-sm">
              Save
            </button>
            </Fragment> 
                :
            <Fragment>
              <input type="text" placeholder="0x0000" className="w-full p-3 mb-2 rounded-md outline-0 text-sm"/>
              <p className="font-semibold">0 custom token</p>
              <p className="bg-white p-2 rounded-md text-[12px] absolute bottom-6 text-center w-11/12 mx-auto font-medium">Tip: Custom tokens are stored locally in your browser</p>
            </Fragment>
        }
      </div>
    </div>
  );
};

export default CustomGas;
