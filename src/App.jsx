import { Routes, Route } from 'react-router-dom'
import Onboarding from './pages/Onboarding'
import Home from './pages/Home'
import Article from './pages/Article'
import Discover from './pages/Discover'
import Reels from './pages/Reels'
import StoryArc from './pages/StoryArc'
import Profile from './pages/Profile'
import BottomNav from './components/BottomNav'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  const hideNavRoutes = ['/onboarding', '/reels'];
  const showNav = !hideNavRoutes.includes(location.pathname) && !location.pathname.startsWith('/article/') && !location.pathname.startsWith('/arc/');

  return (
    <div className="app-container">
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/arc/:id" element={<StoryArc />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {showNav && <BottomNav />}
    </div>
  )
}

export default App
