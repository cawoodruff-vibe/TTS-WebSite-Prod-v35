import { Calendar, User, ArrowRight, Tag, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Understanding the Parable of the Talents",
      excerpt: "A deep dive into Matthew 25:14-30 and what it teaches us about stewardship and faithful service in God's kingdom.",
      date: "December 20, 2024",
      author: "David Thompson",
      category: "Biblical Teaching",
      readTime: "8 min read",
      featured: true,
      slug: "understanding-parable-talents"
    },
    {
      id: 2,
      title: "Discovering Your Spiritual Gifts",
      excerpt: "Practical steps to identify and develop the unique gifts God has given you for building up the body of Christ.",
      date: "December 15, 2024",
      author: "Sarah Mitchell",
      category: "Spiritual Growth",
      readTime: "6 min read",
      featured: false,
      slug: "discovering-your-spiritual-gifts"
    },
    {
      id: 3,
      title: "The Courage to Step Out in Faith",
      excerpt: "How overcoming fear and taking risks with our talents can lead to extraordinary kingdom impact.",
      date: "December 10, 2024",
      author: "David Thompson",
      category: "Faith & Action",
      readTime: "10 min read",
      featured: false,
      slug: "courage-step-out-faith"
    },
    {
      id: 4,
      title: "Stewardship in the Modern World",
      excerpt: "Applying biblical principles of stewardship to our careers, finances, and daily responsibilities.",
      date: "December 5, 2024",
      author: "Rachel Adams",
      category: "Practical Living",
      readTime: "7 min read",
      featured: false,
      slug: "stewardship-modern-world"
    },
    {
      id: 5,
      title: "Multiplying Impact Through Mentorship",
      excerpt: "Why investing in others is one of the most powerful ways to multiply your talents and create lasting change.",
      date: "November 28, 2024",
      author: "Michael Chen",
      category: "Leadership",
      readTime: "9 min read",
      featured: false,
      slug: "multiplying-impact-mentorship"
    },
    {
      id: 6,
      title: "When God Calls You to More",
      excerpt: "Recognizing and responding to God's invitation to greater responsibility and influence in His kingdom.",
      date: "November 22, 2024",
      author: "Sarah Mitchell",
      category: "Spiritual Growth",
      readTime: "8 min read",
      featured: false,
      slug: "when-god-calls-you-more"
    }
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
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-400/20 to-slate-500/20 px-4 py-2 rounded-full mb-4 border border-slate-400/40">
            <TrendingUp className="w-4 h-4 text-slate-300" />
            <span className="text-teal-400 text-sm font-semibold">Fresh Insights Weekly</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Insights, teachings, and reflections on faithful stewardship and spiritual growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border-4 border-white/10 hover:border-white transition-all duration-300 ease-out overflow-hidden group hover:shadow-2xl hover:shadow-slate-400/30 hover:-translate-y-2 hover:scale-105 relative block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-500 rounded-lg flex items-center justify-center shadow-lg shadow-slate-400/40">
                      <Tag className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-slate-300 font-bold">{post.category}</span>
                  </div>
                  {post.featured && (
                    <span className="text-xs bg-gradient-to-r from-slate-400/20 to-slate-500/20 text-slate-300 px-3 py-1 rounded-full border border-slate-400/40 font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-slate-200 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-400 group-hover:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <span className="font-medium">{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300 font-bold group-hover:text-slate-200 transition-colors">
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-slate-400 to-slate-500 text-white rounded-xl font-bold hover:from-slate-300 hover:to-slate-400 transition-all shadow-2xl shadow-slate-400/40 hover:shadow-slate-400/60 hover:scale-105">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}
