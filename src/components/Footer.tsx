import React from 'react';
import socialIcons from '../assets/socialIcons.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E6E9F2] py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <span className="font-bold text-lg">MARKETPLACE.</span>
        <div className=''>
            <img src={socialIcons} alt="social icons" className="h-5" /> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;