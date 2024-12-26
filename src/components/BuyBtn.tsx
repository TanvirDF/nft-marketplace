import React from 'react';

interface BuyBtnProps { 
    handleBuyClick: () => void
}

const BuyBtn: React.FC<BuyBtnProps> = ({handleBuyClick}) => {
    return (
        <button onClick={handleBuyClick} className="rounded-[87px] w-[15.5rem] h-[4.1875rem] text-white border-[1px] bg-[#23252B] ">
            Buy
        </button>
  );
};

export default BuyBtn;

