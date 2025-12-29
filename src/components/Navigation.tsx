import { Link, useLocation } from 'react-router-dom';
import { Mic2, BookOpen, Music, Library } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home', icon: Mic2 },
    { path: '/blog', label: 'Blog', icon: BookOpen },
    { path: '/music', label: 'Music', icon: Music },
    { path: '/booklist', label: 'Booklist', icon: Library },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-slate-400/40">
              <Mic2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">The Talented Servant</span>
              <span className="text-slate-300 text-xs font-semibold">Podcast</span>
            </div>
          </Link>

          <div className="flex space-x-2">
            {links.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  location.pathname === path
                    ? 'bg-gradient-to-r from-slate-400 to-slate-500 text-white font-bold shadow-lg shadow-slate-400/40'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline font-semibold">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
