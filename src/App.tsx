
import { AppProvider } from './context/appContext'
import HomePage from './HomePage'
import { Routes, Route } from "react-router";
import CollectionPage from './CollectionPage';
 import WalletPage from './WalletPage';


function App() {


  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection/:title" element={<CollectionPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </AppProvider>
  )
}

export default App
