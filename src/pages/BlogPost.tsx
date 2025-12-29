import { Calendar, User, Clock, Share2, Bookmark, ArrowLeft, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface BlogPostData {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content: Array<{
    type: 'paragraph' | 'heading' | 'quote' | 'list';
    text?: string;
    items?: string[];
  }>;
}

export default function BlogPost() {
  const { slug } = useParams();

  const posts: Record<string, BlogPostData> = {
    'discovering-your-spiritual-gifts': {
      id: 2,
      title: 'Discovering Your Spiritual Gifts',
      date: 'December 15, 2024',
      author: 'Sarah Mitchell',
      category: 'Spiritual Growth',
      readTime: '6 min read',
      content: [
        {
          type: 'paragraph',
          text: 'Every believer has been given spiritual gifts by God, unique abilities meant to build up the body of Christ and advance His kingdom. Yet many Christians go through life unsure of what their gifts are or how to use them effectively. Understanding your spiritual gifts is not just about self-knowledge; it\'s about discovering your divine purpose and stepping into the fullness of what God has called you to do.'
        },
        {
          type: 'heading',
          text: 'What Are Spiritual Gifts?'
        },
        {
          type: 'paragraph',
          text: 'Spiritual gifts are special abilities given by the Holy Spirit to believers for the purpose of serving others and glorifying God. The apostle Paul writes extensively about these gifts in Romans 12, 1 Corinthians 12, and Ephesians 4. These gifts are not natural talents we\'re born with, though God can certainly use our natural abilities. Rather, they are supernatural endowments given at salvation and developed through faith and practice.'
        },
        {
          type: 'quote',
          text: 'Now there are varieties of gifts, but the same Spirit; and there are varieties of service, but the same Lord; and there are varieties of activities, but it is the same God who empowers them all in everyone. - 1 Corinthians 12:4-6'
        },
        {
          type: 'heading',
          text: 'Why Discovering Your Gifts Matters'
        },
        {
          type: 'paragraph',
          text: 'When you operate in your spiritual gifts, several powerful things happen. First, you experience deep fulfillment and joy because you\'re functioning in the way God designed you. Second, you become far more effective in ministry and service because you\'re working with God\'s power rather than your own strength. Third, the entire body of Christ benefits as each member contributes their unique gifts to the whole.'
        },
        {
          type: 'paragraph',
          text: 'Think of it like a symphony orchestra. Every instrument has a specific role to play. The violin cannot do what the trumpet does, and the trumpet cannot replace the drums. But when each instrument plays its part, the result is beautiful music that glorifies the composer. Similarly, when believers discover and use their spiritual gifts, the church functions as God intended and His glory is revealed to the world.'
        },
        {
          type: 'heading',
          text: 'Practical Steps to Identify Your Gifts'
        },
        {
          type: 'paragraph',
          text: 'Discovering your spiritual gifts is a journey that combines prayer, experience, and community feedback. Here are practical steps you can take:'
        },
        {
          type: 'list',
          items: [
            'Study Scripture: Begin by reading the passages that describe spiritual gifts. Familiarize yourself with the different gifts listed in Romans 12:6-8, 1 Corinthians 12:8-10, 1 Corinthians 12:28, and Ephesians 4:11.',
            'Pray for Insight: Ask the Holy Spirit to reveal your gifts to you. God wants you to know your gifts even more than you do, and He will guide you as you seek Him.',
            'Experiment with Service: Try serving in different areas of ministry. You\'ll often discover your gifts by doing. Notice what energizes you and where you see fruit.',
            'Seek Feedback: Ask mature believers who know you well what gifts they see in you. Others can often recognize our gifts before we do.',
            'Look for Patterns: Where do you see consistent fruit? What types of ministry or service come naturally to you? Where do others frequently ask for your help?',
            'Consider Your Passions: While spiritual gifts and passions aren\'t the same thing, God often gives us a heart for the areas where He\'s gifted us to serve.'
          ]
        },
        {
          type: 'heading',
          text: 'Common Spiritual Gifts'
        },
        {
          type: 'paragraph',
          text: 'While theologians debate the exact number and nature of spiritual gifts, here are some commonly recognized ones:'
        },
        {
          type: 'paragraph',
          text: 'Teaching: The ability to explain biblical truth clearly and help others understand and apply it. Administration: The gift of organizing, planning, and leading ministry efforts effectively. Serving: A heart and ability to meet practical needs and support others in their ministry. Mercy: The capacity to show compassion and provide comfort to those who are hurting. Giving: A supernatural generosity and joy in providing financial support for kingdom work. Encouragement: The ability to inspire, motivate, and build up others in their faith. Leadership: The gift of casting vision and guiding others toward God\'s purposes. Faith: An extraordinary trust in God that inspires others and moves mountains in prayer.'
        },
        {
          type: 'heading',
          text: 'Developing Your Gifts'
        },
        {
          type: 'paragraph',
          text: 'Discovering your gifts is just the beginning. Like any ability, spiritual gifts must be developed through practice and faithfulness. Start small and be consistent. If you have the gift of teaching, begin by leading a small group study. If you have the gift of mercy, volunteer regularly with those who are suffering. If you have the gift of administration, offer to help organize a ministry event.'
        },
        {
          type: 'paragraph',
          text: 'Remember that spiritual gifts are given for the common good, not for personal glory. They are tools entrusted to us as stewards, meant to be used to build up others and advance God\'s kingdom. As you discover and develop your gifts, keep your focus on Christ and His purposes, not on your own recognition or success.'
        },
        {
          type: 'quote',
          text: 'As each has received a gift, use it to serve one another, as good stewards of God\'s varied grace. - 1 Peter 4:10'
        },
        {
          type: 'heading',
          text: 'The Joy of Living in Your Gifts'
        },
        {
          type: 'paragraph',
          text: 'There is profound joy that comes from operating in your spiritual gifts. It\'s the joy of knowing you\'re doing exactly what God created you to do. It\'s the satisfaction of seeing your service bear fruit. It\'s the excitement of being used by God to impact others\' lives in eternal ways.'
        },
        {
          type: 'paragraph',
          text: 'Don\'t let another year go by without actively pursuing an understanding of your spiritual gifts. God has equipped you specifically and purposefully. Your gifts are needed in the body of Christ. Take the time to discover them, develop them, and deploy them for His glory. The kingdom awaits your unique contribution.'
        }
      ]
    }
  };

  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1e1b4b] to-[#312e81] text-white pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-teal-400 hover:text-teal-300">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-slate-300 hover:text-slate-200 mb-8 group transition-colors"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Blog</span>
        </Link>

        <article className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border-4 border-white/10 p-8 md:p-12">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-900/30 to-cyan-900/30 px-4 py-2 rounded-full mb-6 border border-teal-700/40">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-teal-400 text-sm font-bold">{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-slate-300 via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-slate-400" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-slate-400" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-slate-400 to-slate-500 text-white rounded-lg font-bold hover:from-slate-300 hover:to-slate-400 transition-all shadow-lg shadow-slate-400/40 hover:shadow-slate-400/60 hover:scale-105">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20 hover:border-slate-300/50 hover:scale-105">
                <Bookmark className="w-5 h-5" />
                <span>Save</span>
              </button>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            {post.content.map((block, index) => {
              if (block.type === 'paragraph') {
                return (
                  <p key={index} className="text-gray-300 leading-relaxed mb-6">
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'heading') {
                return (
                  <h2 key={index} className="text-3xl font-bold text-white mt-12 mb-6">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'quote') {
                return (
                  <blockquote key={index} className="border-l-4 border-teal-500 pl-6 py-4 my-8 bg-gradient-to-r from-teal-900/20 to-transparent rounded-r-lg">
                    <p className="text-slate-200 italic text-lg leading-relaxed">{block.text}</p>
                  </blockquote>
                );
              }
              if (block.type === 'list' && block.items) {
                return (
                  <ul key={index} className="space-y-4 my-8">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 leading-relaxed flex">
                        <span className="text-teal-400 mr-3 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors">
                  <Heart className="w-6 h-6" />
                  <span className="font-semibold">124</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-semibold">18</span>
                </button>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-teal-700 to-cyan-700 text-white rounded-lg font-bold hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg shadow-teal-600/40 hover:shadow-teal-600/60 hover:scale-105">
                Subscribe for More
              </button>
            </div>
          </div>
        </article>

        <div className="mt-12 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border-4 border-white/10 p-8">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-700 to-cyan-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-600/40">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">About {post.author}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sarah Mitchell is a spiritual formation coach and speaker passionate about helping believers discover and develop their God-given gifts. She has served in ministry for over 15 years and loves equipping the church to walk in their calling.
              </p>
              <div className="flex items-center space-x-4">
                <button className="text-teal-400 hover:text-teal-300 font-semibold transition-colors">
                  View Profile
                </button>
                <button className="text-teal-400 hover:text-teal-300 font-semibold transition-colors">
                  More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
