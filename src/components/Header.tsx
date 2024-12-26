// Code for the Header component
import React, { useContext } from 'react';
import ConnectWallet from './ConnectWalletBtn';
import { useAppContext } from '../context/appContext';
import AccountBtn from './AccountBtn';
import { NavLink } from "react-router";

export default function Header() {
    const { state, dispatch } = useAppContext();

    return (
        <header className=" py-4">
            <div className="flex justify-between items-center max-w-[1512px] mx-auto px-4">
            <NavLink to='/' className="text-3xl font-bold uppercase">
                marketplace.
            </NavLink>
            {state.isWalletConnected ? <AccountBtn /> : <ConnectWallet />} 
            </div>
        </header>
    );
}