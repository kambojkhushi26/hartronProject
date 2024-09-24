import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componnents/Navbar';
import Home from './componnents/Home';
import About from './componnents/About';
import Profile from './componnents/Profile'
import Certificate from './componnents/Certificate'
import Courses from './componnents/Courses';
import Hire from './componnents/Hire'
import Roadmaps from './componnents/Roadmaps';
import Training from './componnents/Training';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Training' element={<Training />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Certificate' element={<Certificate />} />
        <Route path='/Hire' element={<Hire />} />
        <Route path='/Roadmaps' element={<Roadmaps />} />
      </Routes>
    </BrowserRouter>
  )
}





