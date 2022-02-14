import React, {useState, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import accountOneAvatar from "../assets/images/account1.svg";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import MenuIcon from '@mui/icons-material/Menu';
import {motion, AnimatePresence} from "framer-motion"

function Navbar({setShowConnectWallet, user}) {
  const [showNotification, setShowNotification] = useState(true)
  const [showMobileNav, setShowMobileNav] = useState(false);
  const linkStyle = "font-medium h-full px-4 flex items-center";
  const activeLinkStyle = linkStyle + " " + "border-b-black border-b-2";
  const mobileLinkStyle = "flex items-center w-full gap-2 group p-4 hover:bg-[#F5F5F5]";
  const activeMobileLinkStyle = "flex items-center w-full gap-2 group p-4 bg-[#F5F5F5]";

  return (
    <div className="bg-[#F8F8F9]">
      <AnimatePresence>
        <div className="container h-[80px] mx-auto px-6 lg:px-12 flex items-center relative">
          <div className="flex-1 flex space-x-4 items-center h-full">
            <span className="text-[#8cc4fc] bg-clip-text text-transparent lg:mr-8 text-2xl font-semibold bg-gradient-to-br from-[#000000] via-[#000000] to-[#F5FA80]">SWADEX</span>
            <div className="hidden lg:flex items-center space-x-4 h-full">
              <NavLink 
                className={(navData) => (navData.isActive ? activeLinkStyle : linkStyle)} 
                to="/"
              >
                Swap
              </NavLink>
              <NavLink 
                className={(navData) => (navData.isActive ? activeLinkStyle : linkStyle)}
                to="/pool"
              >
                Pool
              </NavLink>
              <NavLink 
                className={(navData) => (navData.isActive ? activeLinkStyle : linkStyle)} 
                to="/vote"
              >
                Vote
              </NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden h-[40px] bg-[#D7E4E3] w-[74px] lg:flex items-center justify-center rounded-md font-medium">0 SAP</span>
            {user &&
              <Fragment>
                <h1 className="hidden lg:block text-xl font-medium">4.8279 ETH</h1>
                <span className="hidden lg:block text-sm bg-[#F4F4F6] p-2 rounded-md">0xBAD7...E18</span>
                <img src={accountOneAvatar} alt="" />
                <span className="hidden lg:block text-sm bg-[#F4F4F6] p-2 px-3 rounded-md cursor-pointer"><MoreHorizOutlinedIcon /></span>
              </Fragment>
            }
            <span className="lg:hidden">
              <MenuIcon onClick={()=> setShowMobileNav(true)} />
            </span>
            {!user && <button 
              className="hidden lg:block bg-black h-[40px] px-8 text-[#F5FA80] rounded-md"
              onClick={()=> setShowConnectWallet(true)}
            >
              Connect to Wallet
            </button>}
          </div>
          <AnimatePresence>
            {showNotification && 
              <motion.div 
                className="absolute bg-[#CDF9D0] rounded-md p-4 right-6 top-[90px] z-30"
                key="notification"
                initial={{x: 100}}
                animate={{x: [100, 0]}}
                transition={{ duration: 1 }}
                exit={{x: "100%"}}
              >
                <div className="flex items-center gap-2">
                  <CheckCircleOutlinedIcon />
                  <h6 className="font-medium">Approve Swaplux V2</h6>
                  <CloseOutlinedIcon style={{fontSize: "14px", cursor: "pointer"}} onClick={()=> setShowNotification(false)} />
                </div>
                <button className="font-semibold text-sm text-center w-full mt-2">View on etherscan</button>
              </motion.div>
            }
          </AnimatePresence>
        </div>
        {showMobileNav && 
          <div className='absolute h-screen w-screen bg-black inset-0 z-20 bg-opacity-20 lg:hidden'>
            <motion.div 
              className="absolute right-0 top-0 bg-white w-[379px] h-full pt-4"
              initial={{x: 100}}
              animate={{x: [100, 0]}}
            >
              <span className="w-full flex justify-end pr-4"><ClearIcon onClick={()=> setShowMobileNav(false)} className="text-right text-gray-600 cursor-pointer" /></span>
              <div className="w-full mt-4">
                <NavLink to="/" className={(navData) => (navData.isActive ? activeMobileLinkStyle : mobileLinkStyle)} >
                  <SwapVertIcon className="text-[#707A8A] group-hover:text-[#F0B90B]" />
                  Swap
                </NavLink>
                <NavLink to="/pool" className={(navData) => (navData.isActive ? activeMobileLinkStyle : mobileLinkStyle)} >
                  <SwapVertIcon className="text-[#707A8A] group-hover:text-[#F0B90B]" />
                  Pool
                </NavLink>
                <NavLink to="/vote" className={(navData) => (navData.isActive ? activeMobileLinkStyle : mobileLinkStyle)} >
                  <SwapVertIcon className="text-[#707A8A] group-hover:text-[#F0B90B]" />
                  Vote
                </NavLink>
              </div>
              <div className="p-4">
                <button 
                  className="bg-black font-medium w-full mx-auto text-[#F5FA80] py-3 px-6 rounded-md mt-6 text-sm"
                  onClick={()=> {setShowConnectWallet(true); setShowMobileNav(false)}}
                >
                  Connect to wallet
                </button>
              </div>
            </motion.div>
          </div>
        }
      </AnimatePresence>
    </div>
  )
}

export default Navbar;
