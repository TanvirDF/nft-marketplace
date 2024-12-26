import React from 'react';

interface ArtistProps { 
    artistName: string | undefined,
    artistImageUrl: string| undefined
}


const ArtistInfo: React.FC<ArtistProps> = ({artistName, artistImageUrl: imageSrc}) => {
  return (
      <div className="flex items-center mt-4" >
          <div className="w-[4.25rem] h-[4.24rem] rounded-full flex items-center justify-center">
            <img className='object-cover' src={imageSrc} alt="" />
          </div>
          <div className="ml-3">
            <p className=" text-sm text-gray-500 text-start">Artist</p>
              <p className=" font-medium text-gray-900">{ artistName}</p>
          </div>
    </div>
  );
};

export default ArtistInfo;

