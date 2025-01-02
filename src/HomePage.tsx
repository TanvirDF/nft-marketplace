import Header from './components/Header';
import Footer from './components/Footer';
import SliderCard from './components/SliderCard';
import CollectionCard from './components/CollectionCard';
//import Carousel from './components/Carousel'
import { useAppContext } from './context/appContext';
import { useEffect, useState } from 'react';

function HomePage() {
  const { state } = useAppContext();
  const nftCollections = state.nftCollections;
  const [sliderIndex, setSliderIndex] = useState(0);

  const nftCollection1 = nftCollections[0];
  const slidersData = nftCollection1.nfts.map((nft) => ({
    nft: nft,
    collectionTitle: nftCollection1.collectionTitle,
    artist: nftCollection1.artist,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((sliderIndex + 1) % slidersData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderIndex, slidersData.length]);

  return (
    <>
      <Header />
      <main className="max-w-[1512px] mx-auto">
        <div className="flex gap-2 mt-8 mb-2 w-full px-4">
          {slidersData.map((_, i) => (
            <button
              key={i}
              onClick={() => setSliderIndex(i)}
              className="flex-1 h-3 rounded-3xl overflow-hidden bg-[#E6E9F2]"
            >
              <div
                className={`h-full transition-all duration-[3000ms] ${
                  i <= sliderIndex ? 'bg-black w-[100%]' : ' w-0'
                }`}/>
            </button>
          ))}
        </div>
        <SliderCard
          nft={slidersData[sliderIndex].nft}
          artist={slidersData[sliderIndex].artist}
          collection={slidersData[sliderIndex].collectionTitle}
        />

        <div className="my-20">
          <div className="text-2xl font-extrabold mt-2">Collections</div>
          <div className="flex flex-row gap-4 mt-4 justify-between">
            {nftCollections.map((collection, i) => (
              <CollectionCard key={i} collection={collection} artist={collection.artist} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
