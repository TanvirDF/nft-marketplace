import React from 'react';
import ArtistInfo from './ArtistInfo';
import { Collection, Artist } from '../types';
import { useNavigate } from "react-router";

type CollectionCardProps = {
    artist: Artist;
    collection: Collection;
    priceRange?: string;
    numberOftNfts?: number;
};
//w-[24.4375rem] h-[14.1875rem]
const CollectionCard: React.FC<CollectionCardProps> = ({ artist, collection,
    priceRange = '0.12BTC - 0.18BTC',
    numberOftNfts = '120 NFT' }) => {
    
    const navigate = useNavigate();
    const handleCollectionClick = () => {
        navigate(`/collection/${collection.collectionTitle}`);
    };
    
    return (
        <div className='flex flex-col items-center max-w-[26.5rem] bg-[#F4F4F4F6] rounded-[47px] pb-6 shadow-lg mt-5 px-4 group overflow-hidden'>
            <div className=' mt-5 relative '>
                <div className='max-w-[24.4375rem] max-h-[14.1875rem] border-solid  rounded-[34px] overflow-hidden'>
  
                    <img className='rounded-[34px] group-hover:brightness-50 object-cover ' src={collection.collectionImage} alt="" />   

                </div>

                <button onClick={handleCollectionClick} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[87px] boarder-[1px] bg-white border-black text-black border-[1px] px-6 py-5  opacity-0 group-hover:opacity-100 transition-opacity">
                 Go to collection →
                </button>
            </div>
            <div className='flex justify-between w-full mt-8 items-center'>
                <div className=' font-bold text-2xl '>{collection.collectionTitle}</div>
                <span className=' bg-[#E1EDD9] h-[2.0625rem] w-[7.375rem] rounded-[49px] text-center py-1.5'> {numberOftNfts}</span>
            </div>
            <div className='w-full mt-2 text-left'>
                <p className="text-gray-500 text-sm ">Price Range: {priceRange}</p>
                <p className="text-black text-sm mt-1 ">{collection.description}</p>
            </div>
            <div className='w-full mt-2'>
               <ArtistInfo artistName={artist.name} artistImageUrl={artist.artistImage} /> 
            </div>
            
            
        </div>
  );
};

export default CollectionCard;