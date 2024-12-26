import React, { useState } from 'react';
import { useAppContext } from '../context/appContext';

function AccountBtn() {
    const [isOpen, setIsOpen] = useState(false);
    const { state } = useAppContext();
    const myNfts = state.myNfts;

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='relative'>
            <button onClick={handleClick} className="rounded-[5.4375em] border-[1px] border-black w-[12.6875rem] h-[4.1875rem] px-10 py-5 font-semibold">
                Account
            </button>
            {isOpen && (
                <div className="fixed right-0 top-0 h-1/2 flex flex-row w-72 backdrop-blur-sm shadow-lg rounded-lg z-50">
                    <button onClick={handleClick} className=' '>
                        <div className="relative -translate-y-72">&gt;&gt;</div>
                    </button>
                    <div className="p-4 bg-white w-full border-solid border-[1px] border-black rounded-lg">
                        <div className='flex justify-between items-center mb-10'>
                            <div className='flex items-center'>
                                <div className='bg-[#29627F] h-12 w-12 rounded-full'></div>
                                <p className="px-2 text-sm text-center">wallet id</p>
                            </div>
                            <button onClick={handleClick} className='bg-black rounded-full h-6 w-6'>
                                <p className='text-white text-left'>→</p>
                            </button>
                        </div>
                        <p className="text-sm text-gray-500">In your wallet</p>
                        <p className="text-xl font-bold">0.129 BTC</p>
                        <div className="mt-12 ">
                            <p className="text-lg font-bold">Your NFTs</p>
                            <div className="flex flex-col h-1/2 overflow-hidden ">
                                {myNfts.length > 0 ? myNfts.map((nft, i) => (
                                    <div className=''>
                                       <img key={i} className='rounded-2xl max-h-30 object-fit' src={nft.nftImage} alt="" /> 
                                    </div>))
                                     :
                                    <div className='flex flex-col items-center'>
                                        <p className="text-gray-400 mt-10">You don't own any NFTs yet</p>
                                        <button className="w-3/4 bg-black text-white rounded-[47px] mt-10 py-2">
                                        Start shopping
                                        </button>
                                    </div>}  
                                
                            </div>
                            
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default AccountBtn;