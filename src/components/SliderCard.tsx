import React from 'react';
import ArtistInfo from './ArtistInfo';
import BuyBtn from './BuyBtn';
import SeeCollectionBtn from './SeeCollectionBtn';
import TrendingNowSpan from './trendingNowSpan';
import nightSky from '../assets/NightSky.png';
import { useNavigate } from "react-router";
import { NFT } from '../types';
import { useAppContext } from '../context/appContext';

interface CardProps {
    nft: NFT;
    collection: string;
    artist:{name: string, artistImage: string};
}

const SliderCard: React.FC<CardProps> = ({ nft, artist, collection }) => {
    
    const { dispatch } = useAppContext();
    const navigate = useNavigate();

    const handleSeeCollectionClick = () => {
        navigate(`/collection/${collection}`);
    }

    const handleBuyClick = () => {
        dispatch({ type: 'add_nft', payload: nft });
    }
    
    
    return (
      <>
    <div className=" bg-[#E6E9F2]  rounded-[31px] p-14 flex items-center justify-between w-full">
      <div className=" px-5">
        <TrendingNowSpan />
        <h3 className="text-gray-500 text-2xl mt-4 relative top-2">{ collection} collection</h3>
        <h1 className="text-6xl font-extrabold text-start">{nft.nftTitle}</h1>
        <ArtistInfo artistName={artist.name} artistImageUrl={artist.artistImage} />
        <div className="mt-6 flex flex-row  gap-6 flex-shrink">
            <BuyBtn handleBuyClick={handleBuyClick} />
            <SeeCollectionBtn handleCollectionClick={handleSeeCollectionClick} />    
        </div>
      </div>
      <div className=" w-[27.3125rem] h-[25.6875rem]   ">
        <img src={nft.nftImage} alt="Artwork" className="w-full h-full rounded-[52px] object-cover" />
      </div>
    </div>
      
      </>

  );
};

export default SliderCard;
