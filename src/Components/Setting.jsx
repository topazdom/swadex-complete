import React, {useState} from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';

const blue = {
  500: '#007FFF',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
};

const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

const Setting = () => {
  const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };
  const [showTooltips, setShowTooltips] = useState({tipOne: false, tipTwo: false, tipThree: false, tipFour: false})

  return (
    <div className="w-11/12 p-6 border-[1px] absolute top-[47px] right-0 z-10 bg-[#F8F8F9] bg-opacity-90 rounded-md">
      <h3 className="font-semibold">Transaction Setting</h3>
      <div className="flex items-center gap-14 mt-4 relative">
        <p className="text-[#676A75] text-[14px]">Slippage tolerance</p>
        <HelpOutlineIcon 
          style={{color: "#676A75", fontSize: "14px", cursor: "pointer"}} 
          onClick={()=> setShowTooltips({tipOne: !showTooltips.tipOne, tipTwo: false, tipThree: false, tipFour: false})} 
        />
        {showTooltips.tipOne && <p className="pointer-events-none absolute text-white bg-black p-2 rounded-md text-[12px] w-52 top-[25px] right-0">
          <p className="absolute top-[-12px] left-[35px] border-[6px] border-b-black w-0 h-0 border-t-transparent border-l-transparent border-r-transparent"></p>
          Your transaction will revert if the price changes 
          unfavorably by more than this percentage
        </p>}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <button className="bg-[#F4F4F6] p-2 text-sm rounded-md shadow-xl">0.1%</button>
        <button className="bg-[#F4F4F6] p-2 text-sm rounded-md shadow-xl">0.5%</button>
        <button className="bg-[#F4F4F6] p-2 text-sm rounded-md shadow-xl">1%</button>
        <input type="text" placeholder="1.00%" className="bg-white rounded-md flex-1 p-2 text-sm outline-0"/>
      </div>
      <div className="flex items-center gap-10 mt-4 relative">
        <p className="text-[#676A75] text-[14px]">Transaction deadline</p>
        <HelpOutlineIcon 
          style={{color: "#676A75", fontSize: "14px", cursor: "pointer"}} 
          onClick={()=> setShowTooltips({tipOne: false, tipTwo: !showTooltips.tipTwo, tipThree: false, tipFour: false})} 
        />
        {showTooltips.tipTwo && <p className="pointer-events-none absolute text-white bg-black p-2 rounded-md text-[12px] w-52 top-[25px] right-0">
          <p className="absolute top-[-12px] left-[35px] border-[6px] border-b-black w-0 h-0 border-t-transparent border-l-transparent border-r-transparent"></p>
          Your transaction will revert if it is
          pending for more than this long
        </p>}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <input type="text" placeholder="20" className="bg-white rounded-md w-32 p-2 text-sm outline-0"/>
        <p className="text-sm">minutes</p>
      </div>
      <h3 className="font-semibold mt-4">Interface Setting</h3>
      <div className="flex items-center gap-12 mt-4 relative">
        <p className="text-[#676A75] text-[14px]">Toggle expert mode</p>
        <HelpOutlineIcon 
          style={{color: "#676A75", fontSize: "14px", cursor: "pointer"}} 
          onClick={()=> setShowTooltips({tipOne: false, tipTwo: false, tipThree: !showTooltips.tipThree, tipFour: false})} 
        />
        <SwitchUnstyled component={Root} {...label} /> 
        {showTooltips.tipThree && <p className="pointer-events-none absolute text-white bg-black p-2 rounded-md text-[12px] w-52 top-[35px] right-0 z-10">
          <p className="absolute top-[-12px] left-[39px] border-[6px] border-b-black w-0 h-0 border-t-transparent border-l-transparent border-r-transparent"></p>
            Bypasses confirmation modals and allows high spillage trades. <br />
            Use at your own risk
          </p>   }              
      </div>
      <div className="flex items-center gap-16 mt-4 relative">
        <p className="text-[#676A75] text-[14px]">Disable multihops</p>
        <HelpOutlineIcon 
          style={{color: "#676A75", fontSize: "14px", cursor: "pointer"}} 
          onClick={()=> setShowTooltips({tipOne: false, tipTwo: false, tipThree: false, tipFour: !showTooltips.tipFour})} 
        />
        <div className="ml-[-15px]">
          <SwitchUnstyled component={Root} {...label} />
        </div>
        {showTooltips.tipFour && <p className="pointer-events-none absolute text-white bg-black p-2 rounded-md text-[12px] w-52 top-[37px] right-0 z-10">
          <p className="absolute top-[-12px] left-[39px] border-[6px] border-b-black w-0 h-0 border-t-transparent border-l-transparent border-r-transparent"></p>
          Restricts swaps to direct pairs only.
        </p>}
      </div>
    </div>
  )
}

export default Setting