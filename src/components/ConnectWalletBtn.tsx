// Desc: Component to connect wallet

import { useNavigate } from 'react-router';


function ConnectWalletBtn() {

    const nagivate = useNavigate();
    const handleConnectWallet = () => {
        nagivate('/wallet');
    }

    return (  
        <button onClick={handleConnectWallet} className="rounded-[5.4375em]  border-[1px] border-black w-[12.6875rem] h-[4.1875rem] px-10 py-5 font-semibold ">
            Connect Wallet
        </button>
    );
}

export default ConnectWalletBtn;