import React, {Fragment, useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import euthereumIcon from "../assets/images/euthereum.svg";
import bnbIcon from "../assets/images/bnb.svg";

const HomePool = ({liquidity, setShowHomePool, setShowCreatePair}) => {
  const [manage, setManage] = useState(false);

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-11/12 max-w-[486px]" style={{margin: manage && "2em 0"}}>
        <div className="border-2 p-4 rounded-md">
          <h1 className="font-semibold text-[#090A0B]">Liquidity provider rewards</h1>
          <p className="text-[13px] text-[#636A7E] mt-2">
            Liquidity providers earn 0.3% on all trades proportional 
            to their share of the pool. Fees are added to the pool, 
            accrue in real time and can be claimed by withdrawing your liquidity.
          </p>
        </div>
        <div className="bg-[#F8F8F9] mx-auto p-6 relative mt-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-[#090A0B]">Liquidity</h1>
            <div className='flex flex-1 gap-2 ml-4 justify-end'>
              <button 
                className="px-2 py-2 rounded-md border-[1px] border-black text-[#090A0B] text-sm"
                onClick={()=> {setShowCreatePair(true); setShowHomePool(false)}}
              >
                Create a pair
              </button>
              <button className="px-2 py-2 rounded-md bg-black text-[#F5FA80] text-sm">Add liquidity</button>
            </div>
          </div>
         {!liquidity && <p className="p-2 rounded-md bg-[#F4F4F6] text-center mt-6 text-[15px]">No liquidity found.</p>}
         {liquidity && <Fragment>
            <Fragment>
              <div className="p-4 rounded-md bg-white flex items-center justify-between mt-6 text-[15px] cursor-pointer">
                <h5 className="font-medium text-sm">Account analytics and accrued fees</h5>
                <KeyboardArrowDownIcon />
              </div>
              <div 
                className="p-4 rounded-md bg-white flex items-center justify-between mt-2 text-[15px] cursor-pointer" 
                onClick={()=> setManage(!manage)}
              >
                <div className="flex items-center gap-2">
                  <img src={euthereumIcon} alt="" />
                  <img src={bnbIcon} alt="" />
                  <p>ETH/BNB</p>
                </div>
                <div className="flex gap-[2px] items-center">
                  <p className="text-[12px] font-semibold">Manage</p>
                  <KeyboardArrowDownIcon fontSize="medium" />
                </div>
              </div>
            </Fragment>
            {manage && 
              <div className="mt-4">
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#636A7E] text-sm flex items-center gap-4">
                    Your total pool token
                  </p>
                  <p className="text-[#090A0B]">0.0000000004943</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#636A7E] text-sm flex items-center gap-4">
                    Pooled ETH
                  </p>
                  <p className="text-[#090A0B] flex items-center gap-2">
                    0.0000000004943
                    <img src={euthereumIcon} alt="" className="h-6 w-6" />
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#636A7E] text-sm flex items-center gap-4">
                    Pooled BNB
                  </p>
                  <p className="text-[#090A0B] flex items-center gap-2">
                    0.0000000004943
                    <img src={bnbIcon} alt="" className="h-6 w-6" />
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-[#636A7E] text-sm flex items-center gap-4">
                    Your pool share
                  </p>
                  <p className="text-[#090A0B]">&#60;0.01%</p>
                </div>
                <h5 className="text-center font-semibold text-[#090A0B] mt-4 text-sm">View Pair Analytics</h5>
                <div className="flex items-center justify-between mt-4">
                  <button className="w-[48%] text-[#090A0B] border border-[#090A0B] py-2 rounded-md font-semibold">Remove</button>
                  <button className="w-[48%] bg-black text-[#F5FA80] py-2 rounded-md">Add</button>
                </div>
              </div>
            }
          </Fragment>}
          {!manage && <p className="mt-6 text-center mb-2 text-sm">Don't see a pool yet? <span className="font-medium">Import it</span></p>}
        </div>
      </div>
    </div>
  )
}

export default HomePool