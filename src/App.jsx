import { Routes, Route } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import BirdsOfPrey from './pages/BirdOfPrey'
import Powerhouses from './pages/Powerhouses'
import About from './pages/About'
import History from './pages/History'
import Contact from './pages/Contact'


export default function App(){
return (
<SiteLayout>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/birds-of-prey" element={<BirdsOfPrey />} />
<Route path="/powerhouses" element={<Powerhouses />} />
<Route path="/about" element={<About />} />
<Route path="/history" element={<History />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<Home />} />
</Routes>
</SiteLayout>
)
}