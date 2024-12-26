import React from 'react';
import { Link } from 'react-router';


interface SeeCollectionBtnProps {
    handleCollectionClick: () => void;
}

const SeeCollectionBtn: React.FC<SeeCollectionBtnProps> = ({ handleCollectionClick }) => {
    return (
        <button onClick={handleCollectionClick} className="rounded-[87px] border-black text-black border-[1px]  w-[15.5rem] h-[4.1875rem] text-base">
            See collection
        </button>
        // <a href='/collection' className="rounded-[87px] border-black text-black border-[1px]  w-[15.5rem] h-[4.1875rem] text-base">
        //     See collection 
        // </a>
  );
};

export default SeeCollectionBtn;