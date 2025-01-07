import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WeddingWebsite from './pages/WeddingWebsite';
import MoviesWebsite from './pages/MoviesApp';
import BarberBookingApp from './pages/BarberBookingApp';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='wedding-website' element={<WeddingWebsite/>} />
        <Route path='movies-app' element={<MoviesWebsite/>} />
        <Route path='barber-booking-app' element={<BarberBookingApp/>} />
      </Routes>
    </div>
  );
}

export default App;
