import React from 'react';
import { NFT } from '../types';
import { useAppContext } from '../context/appContext';

interface NftCardProps {
    nft: NFT
}


const NftCard: React.FC<NftCardProps> = ({ nft }) => {
    const { dispatch } = useAppContext();

    const handleBuyClick = () => {
        dispatch({ type: 'add_nft', payload: nft });
    }

    return (
            <div className=' rounded-[47px] shadow-xl bg-white p-8 flex flex-col  max-w-[26.5rem] max-h-[31.125rem] group'>
                <div className='relative'>
                <img className=' rounded-[34px] h-[21rem]  object-fit' src={nft.nftImage} alt="" />
                <button onClick={handleBuyClick} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[87px] boarder-[1px] bg-white border-black text-black border-[1px] px-10 py-5  opacity-0 group-hover:opacity-100 transition-opacity'>
                    Buy now →
                </button>
                </div>
                <div className=' flex justify-between mt-8 '>
                    <p className=' font-bold text-2xl'>
                        {nft.nftTitle}
                    </p>
                    <span className=' bg-[#D4D3EB] h-[2.0625rem] w-[7.375rem] rounded-[49px] text-center py-1.5'>
                    {nft.price}
                    </span>  
                </div>
            </div>

  );
};

export default NftCard;

