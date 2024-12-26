
import Header from './components/Header'
import Footer from './components/Footer'
import SliderCard from './components/SliderCard'
import CollectionCard from './components/CollectionCard'
//import Carousel from './components/Carousel'
import { useAppContext } from './context/appContext'



function HomePage() {
  const { state } = useAppContext()
  const nftCollections = state.nftCollections

  const nftCollection1 = nftCollections[0]
  const slidersData = nftCollection1.nfts.map((nft) => ( 
    {
      nft: nft,
      collectionTitle: nftCollection1.collectionTitle,
      artist: nftCollection1.artist,

    }
  ))
  console.log(slidersData)

  return (
    <>
      <Header />
      <main className=' max-w-[1512px] mx-auto  '>
        {/* <Carousel>
      {[slidersData.map((item, i) => (
        <SliderCard key={i} title={item.nftTitle} artist={item.artist} image={item.nftImage} />
      ))]}
    </Carousel> */}
        {/* <SliderCard title='test' artist={artist} image={nightSky} /> */}
        <SliderCard  nft={slidersData[0].nft} artist={slidersData[0].artist} collection={slidersData[0].collectionTitle} />

        <div className=' my-20'>
          <div className='text-2xl font-extrabold mt-2'>
            Collections
          </div>
          <div className='flex flex-row gap-4 mt-4 justify-between'>
            {nftCollections.map((collection, i) => (
              <CollectionCard key={i} collection={collection} artist={collection.artist} />
            ))}
          </div>
        </div>
        
      </main>
      <Footer />
    </>

  )
}

export default HomePage