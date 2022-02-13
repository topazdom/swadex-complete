import React, {useState} from 'react';
import AddLiquidity from '../Components/AddLiquidity';
import RemoveLiquidity from '../Components/RemoveLiquidity';
import CreatePair from '../Components/CreatePair';
import HomePool from '../Components/HomePool';
import Navbar from '../Components/Navbar';
import SignatureRequest from '../Components/SignatureRequest';
import CustomGas from '../Components/Modals/CustomGas';
import ConfirmLiquidityModal from '../Components/Modals/ConfirmLiquidityModal';

const Pool = () => {
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const [liquidity, setLiquidity] = useState(false);
  const [showHomePool, setShowHomePool] = useState(true);
  const [showCreatePair, setShowCreatePair] = useState(false);
  const [showAddLiquidity, setShowAddLiquidity] = useState(false);
  const [showRemoveLiquidity, setShowRemoveLiquidity] = useState(false);
  const [showSignatureRequest, setShowSignatureRequest] = useState(false);
  const [showCustomGas, setShowCustomGas] = useState(false);
  const [showConfirmLiquidityModal, setShowConfirmLiquidityModal] = useState(false);

  return (
  <div className="flex flex-col min-h-screen">
    <Navbar setShowConnectWallet={setShowConnectWallet} />
    {showHomePool && <HomePool setShowCreatePair={setShowCreatePair} liquidity={liquidity} setShowHomePool={setShowHomePool} />}
    {showCreatePair && <CreatePair setShowAddLiquidity={setShowAddLiquidity} setShowCreatePair={setShowCreatePair} setShowHomePool={setShowHomePool} />}
    {showAddLiquidity && <AddLiquidity setLiquidity={setLiquidity} setShowAddLiquidity={setShowAddLiquidity} setShowCreatePair={setShowCreatePair} setShowHomePool={setShowHomePool} />}
    {showRemoveLiquidity && <RemoveLiquidity />}
    {showSignatureRequest && <SignatureRequest />}
    {showCustomGas && <CustomGas />}
    {showConfirmLiquidityModal && <ConfirmLiquidityModal />}
  </div>
  )
}

export default Pool