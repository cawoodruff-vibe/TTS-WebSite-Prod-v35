import { Sparkles, Heart, BookOpenCheck, Radio, Share2, Clock, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const featuredAudioRef = useRef<HTMLAudioElement>(null);
  const worshipAudioRef = useRef<HTMLAudioElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeIn = (audioRef: React.RefObject<HTMLAudioElement>) => {
    if (isMobile || !audioRef.current) return;

    const audio = audioRef.current;
    audio.volume = 0;
    audio.currentTime = 0;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    let volume = 0;
    const fadeInterval = setInterval(() => {
      if (volume < 0.3) {
        volume += 0.02;
        audio.volume = Math.min(volume, 0.3);
      } else {
        clearInterval(fadeInterval);
      }
    }, 50);

    audio.dataset.fadeInterval = fadeInterval.toString();
  };

  const fadeOut = (audioRef: React.RefObject<HTMLAudioElement>) => {
    if (isMobile || !audioRef.current) return;

    const audio = audioRef.current;

    if (audio.dataset.fadeInterval) {
      clearInterval(parseInt(audio.dataset.fadeInterval));
    }

    let volume = audio.volume;
    const fadeInterval = setInterval(() => {
      if (volume > 0) {
        volume -= 0.03;
        audio.volume = Math.max(volume, 0);
      } else {
        clearInterval(fadeInterval);
        audio.pause();
        audio.currentTime = 0;
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1e1b4b] to-[#312e81] text-white pt-16 relative overflow-hidden animate-bg-drift">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_600px_at_30%_35%,_rgba(99,102,241,0.15),transparent)]"></div>
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1600' height='1600' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23ffffff' fill='none' stroke-width='2'%3E%3Cpath d='M 800 200 L 800 400' /%3E%3Cpath d='M 700 300 L 900 300' /%3E%3Cpath d='M 200 800 L 200 1000' /%3E%3Cpath d='M 100 900 L 300 900' /%3E%3Cpath d='M 1400 400 L 1400 600' /%3E%3Cpath d='M 1300 500 L 1500 500' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '1600px 1600px'
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='2000' height='1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 500 Q 250 450 500 500 T 1000 500 T 1500 500 T 2000 500' stroke='%23ffffff' fill='none' stroke-width='2.5' opacity='0.5'/%3E%3Cpath d='M 0 520 Q 250 480 500 520 T 1000 520 T 1500 520 T 2000 520' stroke='%23ffffff' fill='none' stroke-width='2' opacity='0.3'/%3E%3Cpath d='M 0 480 Q 250 430 500 480 T 1000 480 T 1500 480 T 2000 480' stroke='%23ffffff' fill='none' stroke-width='1.5' opacity='0.25'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-x',
          backgroundSize: '2000px auto',
          backgroundPosition: 'center'
        }}
      ></div>

      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1200' height='1200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='150' cy='150' r='2'/%3E%3Ccircle cx='450' cy='200' r='1.5'/%3E%3Ccircle cx='750' cy='180' r='2'/%3E%3Ccircle cx='1050' cy='220' r='1.5'/%3E%3Ccircle cx='250' cy='450' r='1.5'/%3E%3Ccircle cx='550' cy='500' r='2'/%3E%3Ccircle cx='850' cy='480' r='1.5'/%3E%3Ccircle cx='200' cy='750' r='2'/%3E%3Ccircle cx='600' cy='800' r='1.5'/%3E%3Ccircle cx='950' cy='780' r='2'/%3E%3Ccircle cx='350' cy='1050' r='1.5'/%3E%3Ccircle cx='700' cy='1100' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '1200px 1200px'
        }}
      ></div>

      <div
        className="absolute top-0 left-1/2 w-[2000px] h-[2000px] -translate-x-1/2 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='2000' height='2000' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23ffffff' fill='none' stroke-width='1.5' opacity='0.6'%3E%3Cline x1='1000' y1='1000' x2='1000' y2='0' /%3E%3Cline x1='1000' y1='1000' x2='1500' y2='200' /%3E%3Cline x1='1000' y1='1000' x2='1800' y2='600' /%3E%3Cline x1='1000' y1='1000' x2='1900' y2='1000' /%3E%3Cline x1='1000' y1='1000' x2='1800' y2='1400' /%3E%3Cline x1='1000' y1='1000' x2='1500' y2='1800' /%3E%3Cline x1='1000' y1='1000' x2='500' y2='1800' /%3E%3Cline x1='1000' y1='1000' x2='200' y2='1400' /%3E%3Cline x1='1000' y1='1000' x2='100' y2='1000' /%3E%3Cline x1='1000' y1='1000' x2='200' y2='600' /%3E%3Cline x1='1000' y1='1000' x2='500' y2='200' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center'
        }}
      ></div>

      <audio ref={featuredAudioRef} loop preload="auto">
        <source src="/audio/featured-ambient.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={worshipAudioRef} loop preload="auto">
        <source src="/audio/worship-ambient.mp3" type="audio/mpeg" />
      </audio>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-900/20 to-cyan-900/20 px-4 py-2 rounded-full mb-4 border border-teal-700/40">
            <Award className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 text-sm font-semibold">Jesus Centered Podcast</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent leading-tight">
            The Talented Servant
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
           Using and Multiplying Our Gifts And Talents To Build God's Kingdom 
          </p>
          <div className="flex items-center justify-center space-x-4 pt-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-slate-400 to-slate-500 text-white rounded-xl font-bold hover:from-slate-300 hover:to-slate-400 transition-all flex items-center space-x-2 shadow-2xl shadow-slate-400/40 hover:shadow-slate-400/60 hover:scale-105 transform">
              <Radio className="w-5 h-5 group-hover:animate-pulse" />
              <span>Listen Now</span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl font-bold hover:bg-white/20 transition-all flex items-center space-x-2 border border-white/20 hover:border-slate-300/50 hover:scale-105 transform">
              <Share2 className="w-5 h-5" />
              <span>Subscribe</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-300">Luke</div>
              <div className="text-sm text-gray-400">16:10-12</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-300">Matthew</div>
              <div className="text-sm text-gray-400">25:14-30</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-300">Luke</div>
              <div className="text-sm text-gray-400">12:42-48</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          <div
            className="peer peer/featured md:col-span-2 lg:row-span-2 bg-gradient-to-br from-teal-900/60 via-cyan-900/40 to-gray-900/70 backdrop-blur-xl rounded-3xl p-8 border-4 border-white/10 hover:border-white transition-all duration-500 ease-out group hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden animate-ambient-drift"
            style={{
              boxShadow: '0 0 80px 40px rgba(226, 232, 240, 0.04), 0 0 120px 60px rgba(226, 232, 240, 0.02), 0 20px 40px -10px rgba(148, 163, 184, 0.3)'
            }}
            onMouseEnter={() => fadeIn(featuredAudioRef)}
            onMouseLeave={() => fadeOut(featuredAudioRef)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-400/30 to-slate-500/30 px-4 py-2 rounded-full mb-6 border border-slate-400/40">
                  <Sparkles className="w-5 h-5 text-slate-300 group-hover:rotate-180 transition-transform duration-700" />
                  <span className="text-slate-300 text-sm font-bold">Featured Episode</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-white group-hover:text-slate-100 transition-colors">
                  Multiply Your Talents
                </h2>
                <p className="text-gray-300 group-hover:text-gray-200 mb-6 text-lg leading-relaxed">
                  Join us as we explore the parable of the talents and discover how to faithfully steward the gifts God has entrusted to us. Learn practical ways to grow, share, and multiply your unique abilities for kingdom impact.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">45 min</span>
                  <span>•</span>
                  <span className="font-medium">Episode 42</span>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-slate-400 to-slate-500 text-white rounded-lg font-bold hover:from-slate-300 hover:to-slate-400 transition-all shadow-lg shadow-slate-400/40 hover:shadow-slate-400/60">
                  Play
                </button>
              </div>
            </div>
          </div>

          <Link to="/blog" className="peer peer/blog bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border-4 border-white/10 hover:border-white peer-hover/featured:border-slate-300/50 peer-hover/featured:shadow-xl peer-hover/featured:shadow-slate-400/20 transition-all duration-300 ease-out group hover:shadow-2xl hover:shadow-slate-400/30 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-slate-400/40">
                <BookOpenCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-slate-200 transition-colors">Blog</h3>
              <p className="text-gray-400 group-hover:text-gray-300">
                Dive deeper into faith, stewardship, and spiritual growth
              </p>
            </div>
          </Link>

          <Link
            to="/music"
            className="peer peer/worship bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border-4 border-white/10 hover:border-white peer-hover/blog:border-slate-300/50 peer-hover/blog:shadow-xl peer-hover/blog:shadow-slate-400/20 transition-all duration-300 ease-out group hover:shadow-2xl hover:shadow-slate-400/30 hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
            onMouseEnter={() => fadeIn(worshipAudioRef)}
            onMouseLeave={() => fadeOut(worshipAudioRef)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-700 to-cyan-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-teal-600/40">
                <Radio className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-slate-200 transition-colors">Worship</h3>
              <p className="text-gray-400 group-hover:text-gray-300">
                Listen to curated worship music and podcast theme songs
              </p>
            </div>
          </Link>

          <div className="peer peer/mission md:col-span-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border-4 border-white/10 hover:border-white peer-hover/worship:border-slate-300/50 peer-hover/worship:shadow-xl peer-hover/worship:shadow-slate-400/20 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-slate-400/30 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-start space-x-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-700 to-cyan-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-teal-600/40">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-slate-200 transition-colors">Our Mission</h3>
                <p className="text-gray-400 group-hover:text-gray-300 text-lg leading-relaxed">
                  We believe every believer has been given unique talents and gifts. Our mission is to inspire and equip you to use those gifts boldly for God's glory, creating lasting impact in your community and beyond.
                </p>
              </div>
            </div>
          </div>

          <Link to="/booklist" className="peer peer/booklist lg:row-span-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border-4 border-white/10 hover:border-white peer-hover/mission:border-slate-300/50 peer-hover/mission:shadow-xl peer-hover/mission:shadow-slate-400/20 transition-all duration-300 ease-out group flex flex-col justify-between hover:shadow-2xl hover:shadow-slate-400/30 hover:-translate-y-2 hover:scale-105 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-700 to-cyan-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg shadow-teal-600/40">
                <BookOpenCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-slate-200 transition-colors">Recommended Reading</h3>
              <p className="text-gray-400 group-hover:text-gray-300 mb-6">
                Explore our curated collection of books on stewardship, spiritual gifts, and faithful living
              </p>
            </div>
            <div className="flex items-center text-slate-300 font-bold relative z-10 group-hover:text-slate-200">
              <span>View Booklist</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <div className="md:col-span-2 bg-gradient-to-r from-slate-400/10 via-slate-500/10 to-slate-400/10 backdrop-blur-xl rounded-2xl p-8 border-4 border-slate-400/40 hover:border-white peer-hover/booklist:border-slate-400/70 peer-hover/booklist:shadow-xl peer-hover/booklist:shadow-slate-400/30 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-slate-400/30 hover:-translate-y-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-slate-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-white">Subscribe & Stay Connected</h3>
              <p className="text-gray-300 mb-6">Never miss an episode - subscribe on your favorite platform</p>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-slate-300/50 hover:scale-105">
                  Apple Podcasts
                </button>
                <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-slate-300/50 hover:scale-105">
                  Spotify
                </button>
                <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-slate-300/50 hover:scale-105">
                  YouTube
                </button>
                <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-slate-300/50 hover:scale-105">
                  RSS Feed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
