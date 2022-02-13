import React, {useState, Fragment} from "react";
import closeIcon from "../../assets/images/close.svg";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import TokenList from "./ModalElements/TokenList";

const ManageList = ({setShowImportToken, setShowManageList}) => {
  const [showLists, setShowLists] = useState(true);

  const buttonStyle = {
    backgroundColor: "#000000",
    color: "#F5FA80"
  }

  return (
    <div className="w-screen h-screen absolute inset-0 bg-[#50505099] flex items-center justify-center">
      <div className="py-6 px-4 bg-[#D9D9DA] w-11/12 max-w-[364px] rounded-md md:h-[546px] relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-md text-[#090A0B] font-semibold flex items-center gap-2">
            <ArrowBackOutlinedIcon fontSize="small" className="cursor-pointer" onClick={()=>{setShowImportToken(true); setShowManageList(false)}} />
            Manage
          </h3>
          <img src={closeIcon} alt="" className="cursor-pointer" onClick={()=>{setShowImportToken(false); setShowManageList(false)}} />
        </div>
        <div className="flex items-center bg-white rounded-md mb-3">
          <button style={showLists ? buttonStyle : {}} className="flex-1 py-3 px-6 rounded-md font-medium transition duration-200" onClick={()=> setShowLists(true)}>Lists</button>
          <button style={!showLists ? buttonStyle : {}} className="flex-1 py-3 px-6 rounded-md font-medium transition duration-200" onClick={()=> setShowLists(false)}>Tokens</button>
        </div>
        {
          showLists ? 
            <Fragment>
              <input type="text" placeholder="http:// or ipfs:// or ENS name" className="w-full p-3 mb-2 rounded-md outline-0 text-sm"/>
              <TokenList />
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

export default ManageList;
