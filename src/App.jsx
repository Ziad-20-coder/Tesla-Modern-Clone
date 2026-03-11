import './App.css'
import Hero from './Components/Hero'
import Promotions from './Components/Promotions'
import SnapScrollingcarousel from './Components/SnapScrollingcarousel'
import Offers from './Components/Offers'
import Map from './Components/Map'
import SecCarousel from './Components/SecCarousel'

function App() {

  return (
    <div className='overflow-hidden'>
      <Hero />
      <SnapScrollingcarousel />
      <Promotions />
      <Offers />
      <Map />
      <SecCarousel />
    </div>
  )
}

export default App
