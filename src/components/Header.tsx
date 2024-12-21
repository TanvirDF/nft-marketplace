// Code for the Header component
import React from 'react';
import ConnectWallet from './ConnectWalletBtn';

export default function Header() {
    return (
        <header className=" flex justify-between items-center mx-6 py-4">
            <h1 className="text-3xl font-bold uppercase">
                marketplace.
            </h1>
            <ConnectWallet />
            
        </header>
    );
}