import { Routes, Route } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import Home from './pages/Home'
import Teams from './pages/Teams'
import Schedule from './pages/Schedule'
import News from './pages/News'
import Favorites from './pages/Favorites'
import Contact from './pages/Contact'
import Team from './pages/Team'
import TeamNews from './pages/TeamNews'


export default function App(){
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/news" element={<News />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team/:slug" element={<Team />} />
        <Route path="/team/:slug/news" element={<TeamNews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </SiteLayout>
  )
}
