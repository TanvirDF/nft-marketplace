import React from 'react';
import artist from '../assets/artist1.png';

interface ArtistProps { 
    artistName: string,
    artistImageUrl: string
}


const Artist: React.FC<ArtistProps> = ({artistName, artistImageUrl: imageSrc}) => {
  return (
      <div className="flex items-center mt-4" >
          <div className="w-[68px] h-[68px] rounded-full flex items-center justify-center">
            <img src={imageSrc} alt="" />
          </div>
          <div className="ml-3">
            <p className=" text-sm text-gray-500 text-start">Artist</p>
              <p className=" font-medium text-gray-900">{ artistName}</p>
          </div>
    </div>
  );
};

export default Artist;

