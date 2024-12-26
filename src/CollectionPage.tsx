import React from 'react';
import { useParams } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import TrendingNowSpan from './components/trendingNowSpan';
import { useAppContext } from './context/appContext'
import ArtistInfo from './components/ArtistInfo';
import NftCard from './components/NftCard';



const CollectionPage: React.FC = () => {
    const { title } = useParams<{ title: string }>();
    const { state } = useAppContext()

    const collection = state.nftCollections.find((collection) => collection.collectionTitle === title)

    console.log(title);

    return (
        <>
            <Header />
            <main className=" max-w-[1512px] mx-auto ">
                <div className="p-8 flex items-center space-x-8 mx-12 gap-6">
                    <div className="flex-1">
                        <TrendingNowSpan />
                        <p className="text-gray-500 mt-10">Collection</p>
                        <h1 className="text-4xl font-bold">{collection?.collectionTitle}</h1>
                        <p className="mt-4 leading-relaxed">
                            {collection?.description}
                        </p>
                        <ArtistInfo artistName={collection?.artist.name} artistImageUrl={collection?.artist.artistImage} />
                    </div>
                    <div>
                        <img
                            src={collection?.collectionImage}
                            alt="Night Sky Artwork"
                            className="w-[27.3125rem] h-[25.6875rem] object-cover rounded-[52px]"
                        />
                    </div>
                </div>
                <div className='my-20'>
                    <h2 className=' text-2xl font-bold mx-6 '> NFTs</h2>
                    <div className='flex justify-center gap-8 mx-2 flex-wrap'>
                        {collection?.nfts.map((nft, i) => (<NftCard key={i} nft={nft} />))}
                    </div>
                    
                </div>

            </main>
            <Footer />
        </>
    );
};

export default CollectionPage;
