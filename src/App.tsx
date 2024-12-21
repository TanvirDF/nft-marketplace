import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SliderCard from './components/SliderCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="">
        <SliderCard title='' artist='' imageSrc=''/>
      </main>
      <Footer />
    </>
  )
}

export default App