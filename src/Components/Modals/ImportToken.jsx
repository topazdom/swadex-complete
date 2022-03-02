import React from "react";
import euthereumIcon from "../../assets/images/euthereum.svg";
import closeIcon from "../../assets/images/close.svg";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import { motion } from "framer-motion";

const ImportToken = ({
  setShowSelectToken,
  setShowImportToken,
  setShowManageList
}) => {
  return (
    <div className="w-screen h-screen fixed inset-0 bg-[#50505099] flex items-center justify-center">
      <motion.div
        className="py-6 px-4 bg-[#D9D9DA] w-11/12 max-w-[364px] rounded-md"
        key="importTokenModal"
        initial={{ y: 90 }}
        animate={{ y: [90, 0] }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-md text-[#090A0B] font-semibold flex items-center gap-2">
            <ArrowBackOutlinedIcon
              fontSize="small"
              className="cursor-pointer"
              onClick={() => {
                setShowImportToken(false);
                setShowSelectToken(true);
              }}
            />
            Import token
          </h3>
          <img
            src={closeIcon}
            alt=""
            className="cursor-pointer"
            onClick={() => {
              setShowImportToken(false);
              setShowSelectToken(false);
            }}
          />
        </div>
        <div>
          <div className="cursor-pointer p-2 mt-2 rounded-md bg-white flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <img src={euthereumIcon} alt="" />
              <div>
                <h6 className="text-[#090A0B] font-medium text-base">ETH</h6>
                <p className="text-xs text-blue-400">
                  003ed0a0d3e0da83e0eru09wc90we9w0rqe9r
                </p>
                <p className="text-[#AFB4C0] text-[14px]">via Coin Geko</p>
              </div>
            </div>
          </div>
          <div className="text-center px-2 py-4 mt-4 rounded-md bg-white">
            <ReportProblemOutlinedIcon
              style={{ fontSize: "54px" }}
              className="text-orange-500 text-center mb-6 mx-auto block"
            />
            <h3 className="text-orange-500 font-medium block">
              Trade at your own risk!
            </h3>
            <p className="text-gray-500 leading-6 mt-3">
              Anyone can create a token, including creating a fake version of
              existing token that claims to represent projects. if you purchase
              this token, you may not be able to sell it back
            </p>
            <label className="mx-auto text-center flex items-center justify-center mb-2 mt-4 cursor-pointer">
              <input
                type="checkbox"
                className="bg-yellow-600 text-yellow-600 accent-[#000000]"
              />
              <span className="text-[14px] text-[#090A0B] leading-5 ml-2">
                I understand
              </span>
            </label>
          </div>
        </div>
        <div className="py-2 w-full pt-4">
          <button
            className="bg-black font-semibold w-full text-[#F5FA80] py-4 px-6 rounded-md"
            onClick={() => {
              setShowImportToken(false);
              setShowManageList(true);
            }}
          >
            Import
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ImportToken;
