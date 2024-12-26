import React, { createContext, useReducer, useContext } from 'react';
import nightIsComing from '../assets/night-is-coming.png';
import withTheStars from '../assets/NightSky.png';
import summer from '../assets/summer.png';
import quiet from '../assets/quiet.png';
import travel from '../assets/travel.png';
import theRain from '../assets/the-rain.png';
import leaJacqoutImage from '../assets/artist1.png';
import futureCollection from '../assets/future-collections.png';
import motherNature from '../assets/motherNature.png';
import julienImage from '../assets/julien.png';
import maria from '../assets/maria.png';
import { Collection, NFT, Artist } from '../types';


type State = {
    isWalletConnected: boolean;
    nftCollections: Collection[];
    myNfts: NFT[];
};

const nfts: NFT[] = [
    {
        nftTitle: 'Night is coming',
        nftImage: nightIsComing,
        price: '0.12 BTC',
    },
    {
        nftTitle: 'With the stars',
        nftImage: withTheStars,
        price: '0.12 BTC',
    },
    {
        nftTitle: 'Summer',
        nftImage: summer,
        price: '0.12 BTC',
    },
    {
        nftTitle: 'Quiet',
        nftImage: quiet,
        price: '0.12 BTC',
    },
    {
        nftTitle: 'Travel',
        nftImage: travel,
        price: '0.12 BTC',
    },
    {
        nftTitle: 'The rain',
        nftImage: theRain,
        price: '0.12 BTC',
    },
];



const initialState: State = {
    isWalletConnected: false,
    nftCollections: [{
        collectionTitle: 'Night Sky',
        artist: {
            name: 'Lea Jacqout',
            artistImage:leaJacqoutImage
        },
        collectionImage: withTheStars,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        nfts: nfts
    },{
        collectionTitle: 'Future',
        artist: {
            name: 'Julien',
            artistImage:julienImage
        },
        collectionImage: futureCollection,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        nfts: nfts
    },{
        collectionTitle: 'Mother Nature',
        artist: {
            name: 'Maria',
            artistImage:maria
        },
        collectionImage: motherNature,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
        nfts: nfts
    },],
    myNfts: [],
};


type Action = 
    | { type: 'CONNECT_WALLET' }
    | { type: 'add_nft'; payload: NFT };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'CONNECT_WALLET':
            return { ...state, isWalletConnected: true };
        case 'add_nft':
            return { ...state, myNfts: [...state.myNfts, action.payload] };
        default:
            return state;
    }
};

const appContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <appContext.Provider value={{ state, dispatch }}>{children}</appContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(appContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
};
