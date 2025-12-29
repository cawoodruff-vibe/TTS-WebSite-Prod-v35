import { BookOpen, Star, ExternalLink, Library } from 'lucide-react';

export default function Booklist() {
  const books = [
    {
      id: 1,
      title: "The Purpose Driven Life",
      author: "Rick Warren",
      category: "Spiritual Growth",
      rating: 5,
      description: "A groundbreaking manifesto on the meaning of life that has inspired millions worldwide.",
      keyTakeaway: "Understanding God's purpose for your life and living accordingly",
      featured: true
    },
    {
      id: 2,
      title: "Mere Christianity",
      author: "C.S. Lewis",
      category: "Apologetics",
      rating: 5,
      description: "A brilliant defense of the Christian faith that appeals to both believers and skeptics.",
      keyTakeaway: "The logical foundation of Christian belief and practice",
      featured: false
    },
    {
      id: 3,
      title: "The Treasure Principle",
      author: "Randy Alcorn",
      category: "Stewardship",
      rating: 5,
      description: "Discovering the secret of joyful giving and eternal investment.",
      keyTakeaway: "How to use money and resources for eternal impact",
      featured: true
    },
    {
      id: 4,
      title: "Let Your Life Speak",
      author: "Parker Palmer",
      category: "Vocation",
      rating: 4,
      description: "Listening for the voice of vocation and discovering your unique calling.",
      keyTakeaway: "Finding your calling through listening to your life",
      featured: false
    },
    {
      id: 5,
      title: "Developing the Leader Within You",
      author: "John C. Maxwell",
      category: "Leadership",
      rating: 5,
      description: "Essential principles for developing leadership skills and influence.",
      keyTakeaway: "How to grow your leadership capacity and impact",
      featured: false
    },
    {
      id: 6,
      title: "The Gifts of Imperfection",
      author: "Brené Brown",
      category: "Personal Growth",
      rating: 4,
      description: "Let go of who you think you're supposed to be and embrace who you are.",
      keyTakeaway: "Living authentically and courageously despite imperfections",
      featured: false
    },
    {
      id: 7,
      title: "Boundaries",
      author: "Henry Cloud & John Townsend",
      category: "Relationships",
      rating: 5,
      description: "When to say yes, how to say no, to take control of your life.",
      keyTakeaway: "Creating healthy boundaries in all areas of life",
      featured: false
    },
    {
      id: 8,
      title: "The Power of Habit",
      author: "Charles Duhigg",
      category: "Personal Development",
      rating: 4,
      description: "Why we do what we do in life and business, and how to change it.",
      keyTakeaway: "Understanding and transforming habits for better results",
      featured: false
    },
    {
      id: 9,
      title: "Radical",
      author: "David Platt",
      category: "Discipleship",
      rating: 5,
      description: "Taking back your faith from the American dream.",
      keyTakeaway: "Living out radical obedience to Christ's call",
      featured: false
    }
  ];

  const categories = ["All", "Spiritual Growth", "Stewardship", "Leadership", "Personal Development"];

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
            <Library className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 text-sm font-semibold">Curated Collection</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
            Booklist
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Recommended reading to deepen your faith and multiply your impact
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-xl font-bold transition-all ${
                category === "All"
                  ? "bg-gradient-to-r from-slate-400 to-slate-500 text-white shadow-2xl shadow-slate-400/40 scale-105"
                  : "bg-white/10 backdrop-blur-md text-gray-300 hover:text-white hover:bg-white/20 border border-white/20 hover:border-slate-300/50 hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border-4 border-white/10 hover:border-white transition-all duration-300 ease-out overflow-hidden group hover:shadow-2xl hover:shadow-slate-400/30 hover:-translate-y-2 hover:scale-105 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-20 h-24 bg-gradient-to-br from-teal-700 to-cyan-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-xl shadow-teal-600/40">
                    <BookOpen className="w-10 h-10 text-white group-hover:-rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(book.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-slate-300 fill-slate-300 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-full border border-teal-700/40">
                    <span className="text-xs text-teal-400 font-bold">{book.category}</span>
                  </div>
                  {book.featured && (
                    <span className="text-xs bg-gradient-to-r from-slate-400/20 to-slate-500/20 text-slate-300 px-3 py-1 rounded-full border border-slate-400/40 font-semibold">
                      Staff Pick
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-slate-200 transition-colors">
                  {book.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 font-medium">by {book.author}</p>

                <p className="text-gray-400 group-hover:text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {book.description}
                </p>

                <div className="bg-gradient-to-r from-teal-900/40 to-cyan-900/40 rounded-xl p-4 mb-4 border border-teal-800/40 backdrop-blur-sm">
                  <p className="text-xs text-slate-300 font-bold mb-2">Key Takeaway</p>
                  <p className="text-sm text-gray-300">{book.keyTakeaway}</p>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-teal-900/20 to-cyan-900/20 text-teal-400 rounded-xl hover:from-slate-400 hover:to-slate-500 hover:text-white transition-all font-bold group/btn border border-teal-700/40 hover:border-transparent hover:scale-105">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-teal-900/60 via-cyan-900/40 to-gray-900/70 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-4 border-white/10 hover:border-white transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-slate-400/30 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Have a Book Recommendation?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              We'd love to hear about books that have impacted your faith journey and helped you multiply your talents for God's kingdom.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-slate-400 to-slate-500 text-white rounded-xl font-bold hover:from-slate-300 hover:to-slate-400 transition-all shadow-2xl shadow-slate-400/40 hover:shadow-slate-400/60 hover:scale-105">
              Submit a Recommendation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
