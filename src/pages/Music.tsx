import { Play, Music2, ListMusic, Headphones } from 'lucide-react';

export default function Music() {
  const playlists = [
    {
      id: 1,
      title: "Podcast Theme & Intros",
      description: "Official theme music and episode intros",
      tracks: 8,
      duration: "24 min",
      color: "from-slate-500 to-slate-600"
    },
    {
      id: 2,
      title: "Worship & Reflection",
      description: "Songs that inspire faithful stewardship",
      tracks: 15,
      duration: "67 min",
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Kingdom Living",
      description: "Music for walking in purpose and calling",
      tracks: 12,
      duration: "52 min",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const featuredTracks = [
    { title: "Faithful Servant", artist: "Worship Collective", duration: "4:32" },
    { title: "Multiply", artist: "Kingdom Sound", duration: "5:18" },
    { title: "Well Done", artist: "Covenant Worship", duration: "4:45" },
    { title: "Talents Unleashed", artist: "Purpose Music", duration: "3:52" },
    { title: "For His Glory", artist: "Grace Notes", duration: "5:03" },
  ];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-900/20 to-cyan-900/20 px-4 py-2 rounded-full mb-4 border border-teal-700/40">
            <Headphones className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 text-sm font-semibold">Curated Playlists</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
            Music
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Worship music, podcast themes, and songs that inspire faithful living
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-br from-teal-900/60 via-cyan-900/40 to-gray-900/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-4 border-white/10 hover:border-white transition-all duration-500 ease-out group hover:shadow-2xl hover:shadow-slate-400/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex flex-col md:flex-row items-center justify-between relative z-10 space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-400/30 to-slate-500/30 px-4 py-2 rounded-full mb-4 border border-slate-400/40">
                  <Music2 className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-300 text-sm font-bold">Now Playing</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">The Talented Servant Theme</h2>
                <p className="text-xl text-gray-300">Podcast Original Music</p>
              </div>
              <button className="w-24 h-24 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center hover:from-slate-300 hover:to-slate-400 transition-all hover:scale-110 group/btn shadow-2xl shadow-slate-400/50">
                <Play className="w-12 h-12 text-white ml-1 group-hover/btn:scale-110 transition-transform" fill="currentColor" />
              </button>
            </div>
            <div className="mt-8 relative z-10">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-sm text-gray-400 font-medium">1:32</span>
                <div className="flex-1 h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                  <div className="h-full w-1/3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full shadow-lg"></div>
                </div>
                <span className="text-sm text-gray-400 font-medium">3:45</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center text-white">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-slate-400/40">
              <ListMusic className="w-6 h-6 text-white" />
            </div>
            Playlists
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border-4 border-white/10 hover:border-white transition-all duration-300 ease-out group cursor-pointer hover:shadow-2xl hover:shadow-slate-400/30 hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className={`w-full aspect-square bg-gradient-to-br ${playlist.color} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xl`}>
                    <Music2 className="w-20 h-20 text-white/90 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-slate-200 transition-colors">
                    {playlist.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 text-sm mb-4">{playlist.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
                    <span>{playlist.tracks} tracks</span>
                    <span>{playlist.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Featured Tracks</h2>
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border-4 border-white/10 hover:border-white overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-slate-400/30">
            {featuredTracks.map((track, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5 hover:bg-white/5 transition-all group cursor-pointer border-b border-white/5 last:border-b-0"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <button className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center group-hover:from-slate-400 group-hover:to-slate-500 transition-all group-hover:scale-110 shadow-lg">
                    <Play className="w-5 h-5 text-gray-300 group-hover:text-white ml-0.5 transition-colors" fill="currentColor" />
                  </button>
                  <div>
                    <div className="font-bold text-white group-hover:text-slate-200 transition-colors">
                      {track.title}
                    </div>
                    <div className="text-sm text-gray-400">{track.artist}</div>
                  </div>
                </div>
                <div className="text-gray-400 font-medium">{track.duration}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-400/10 via-slate-500/10 to-slate-400/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 border-4 border-slate-400/40 hover:border-white text-center transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-slate-400/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 to-slate-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Listen on Your Favorite Platform</h3>
            <p className="text-gray-300 mb-8 text-lg">Stream our podcast and music playlists wherever you listen</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-slate-300/50 hover:scale-105">
                Spotify
              </button>
              <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-slate-300/50 hover:scale-105">
                Apple Music
              </button>
              <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-slate-300/50 hover:scale-105">
                YouTube Music
              </button>
              <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-slate-300/50 hover:scale-105">
                SoundCloud
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
