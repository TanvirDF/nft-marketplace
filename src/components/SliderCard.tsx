import React from 'react';
import Artist from './Artist';
import BuyBtn from './BuyBtn';
import SeeCollectionBtn from './SeeCollectionBtn';

import artistImage from '../assets/artist1.png';

interface CardProps {
  title: string;
  artist: string;
  imageSrc: string;
}

const SliderCard: React.FC<CardProps> = ({ title , artist, imageSrc }) => {
    title = 'With the stars'
  return (
    <div className="bg-[#E6E9F2] rounded-lg p-6 flex items-center justify-between mx-6 ">
      <div className=" flex flex-col items-start px-5">
        <span className="text-[12px] bg-[#FADFE4]  px-[35px] py-[9px] rounded-full w-[150px] h-[33px] ">Trending Now</span>
        <h3 className="text-gray-500 mt-4">Night sky collection</h3>
        <h1 className="text-[64px] font-[800] text-start">{title}</h1>
        <Artist artistName='Test Name' artistImageUrl={artistImage} />
        <div className="mt-6 flex space-x-4 gap-[16px]">
            <BuyBtn />
            <SeeCollectionBtn/>    
                  
            {/* <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-200">See collection</button> */}
        </div>
      </div>
      <div className="w-72 h-72">
        <img src={imageSrc} alt="Artwork" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default SliderCard;
