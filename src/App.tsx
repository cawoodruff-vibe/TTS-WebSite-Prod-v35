import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Music from './pages/Music';
import Booklist from './pages/Booklist';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-950">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/music" element={<Music />} />
          <Route path="/booklist" element={<Booklist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
