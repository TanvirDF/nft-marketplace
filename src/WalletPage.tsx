import React from 'react';
import Header from './components/Header';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router';



const WalletPage: React.FC = () => {
    const { dispatch } = useAppContext();
    const navigate = useNavigate();
    const handleWalletClick = () => {
        dispatch({ type: 'CONNECT_WALLET' });
        navigate('/');
     };
    return (
        <div className='bg-[#E6E9F2] h-screen'>
            <Header/>
                <div className="flex flex-col justify-center items-center h-[90vh]">
                <h1 className="text-3xl font-extrabold ">Choose the wallet to connect</h1>
                <div className='flex justify-center items-center mt-10 gap-10 flex-wrap'>
                    <button onClick={handleWalletClick} className=' bg-white p-20 rounded-[19px] '>
                    </button>
                    <button onClick={handleWalletClick} className=' bg-white p-20 rounded-[19px] '>
                    </button>
                    <button onClick={handleWalletClick} className=' bg-white p-20 rounded-[19px] '>
                    </button>
                </div>

                </div>
        </div>
  );
};

export default WalletPage;
