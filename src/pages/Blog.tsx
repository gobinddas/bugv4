import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "1",
    title: "The Future of Web Development in Nepal",
    excerpt: "Exploring the latest trends and technologies shaping the web development landscape in Nepal and beyond.",
    content: `
      <p>The web development industry in Nepal is experiencing unprecedented growth. As more businesses recognize the importance of digital presence, the demand for skilled developers continues to rise.</p>
      
      <h2>Key Trends Shaping the Industry</h2>
      <p>Several trends are defining the future of web development in Nepal:</p>
      <ul>
        <li><strong>Jamstack Architecture:</strong> The adoption of modern web architecture patterns is increasing, with developers embracing headless CMS and static site generators.</li>
        <li><strong>Progressive Web Apps:</strong> PWAs are becoming more popular due to their ability to work offline and provide app-like experiences.</li>
        <li><strong>AI Integration:</strong> More websites are incorporating AI-powered features for personalization and automation.</li>
      </ul>
      
      <h2>Opportunities for Nepali Developers</h2>
      <p>The growing freelance market and remote work opportunities have opened new doors for Nepali developers to work with international clients while staying in Nepal.</p>
      
      <h2>Conclusion</h2>
      <p>The future looks bright for web development in Nepal. With continued investment in skills development and infrastructure, the country is well-positioned to become a significant player in the global tech landscape.</p>
    `,
    author: "Rajesh Sharma",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
  },
  {
    id: "2",
    title: "Building Scalable Mobile Apps with React Native",
    excerpt: "A comprehensive guide to creating high-performance mobile applications using React Native.",
    content: `
      <p>React Native has revolutionized mobile app development by allowing developers to build cross-platform applications using JavaScript. At Blue Bug Software, we've successfully delivered numerous React Native projects.</p>
      
      <h2>Why React Native?</h2>
      <p>React Native offers several advantages for mobile development:</p>
      <ul>
        <li><strong>Code Reusability:</strong> Write once, run on both iOS and Android.</li>
        <li><strong>Native Performance:</strong> Unlike hybrid apps, React Native compiles to native code.</li>
        <li><strong>Hot Reloading:</strong> See changes instantly during development.</li>
      </ul>
      
      <h2>Best Practices for Scalable Apps</h2>
      <p>To build apps that scale well, consider these practices:</p>
      <ul>
        <li>Use proper state management (Redux, MobX, or Context API)</li>
        <li>Implement lazy loading for better performance</li>
        <li>Write modular, reusable components</li>
        <li>Optimize images and assets</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>React Native continues to be an excellent choice for building mobile applications. With proper architecture and best practices, you can build apps that scale effortlessly.</p>
    `,
    author: "Sunita Thapa",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
  },
  {
    id: "3",
    title: "The Rise of SaaS in South Asian Markets",
    excerpt: "How software-as-a-service is transforming business operations across South Asia.",
    content: `
      <p>The SaaS industry in South Asia is experiencing rapid growth, with businesses increasingly adopting cloud-based solutions for their operations.</p>
      
      <h2>Market Growth</h2>
      <p>The South Asian SaaS market has seen exponential growth in recent years, driven by:</p>
      <ul>
        <li>Increased internet penetration</li>
        <li>Growing smartphone adoption</li>
        <li>Digital transformation initiatives</li>
        <li>Cost-effective cloud solutions</li>
      </ul>
      
      <h2>Opportunities for Local Companies</h2>
      <p>Local SaaS companies have a unique advantage in understanding regional business needs and providing localized solutions.</p>
      
      <h2>Conclusion</h2>
      <p>The SaaS revolution in South Asia is just beginning. Companies that can adapt and innovate will thrive in this growing market.</p>
    `,
    author: "Amit Gurung",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Industry Trends",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
  },
  {
    id: "4",
    title: "UI/UX Design Principles for Better Conversions",
    excerpt: "Essential design principles that can significantly improve your website's conversion rates.",
    content: `
      <p>Good UI/UX design is crucial for converting visitors into customers. Here are the key principles we follow at Blue Bug Software.</p>
      
      <h2>Core Design Principles</h2>
      <ul>
        <li><strong>Clarity:</strong> Users should immediately understand what your product does.</li>
        <li><strong>Consistency:</strong> Maintain visual and functional consistency throughout.</li>
        <li><strong>Accessibility:</strong> Design for all users, including those with disabilities.</li>
        <li><strong>Feedback:</strong> Provide clear feedback for user actions.</li>
      </ul>
      
      <h2>Conversion Optimization Tips</h2>
      <p>To improve conversions, focus on:</p>
      <ul>
        <li>Clear call-to-action buttons</li>
        <li>Streamlined forms</li>
        <li>Trust signals and social proof</li>
        <li>Fast loading times</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Investing in good UI/UX design pays dividends in improved user satisfaction and higher conversion rates.</p>
    `,
    author: "Priya Maharjan",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-950 to-blue-900 text-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Insights & Updates
            </h1>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
              Stay updated with the latest tech insights, industry trends, and company news from Blue Bug Software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-foreground">{post.author}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <Button asChild className="mt-4">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-950 to-blue-900 text-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={post.image}
            alt={post.title}
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto prose prose-lg prose-blue"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Button asChild>
            <Link to="/blog">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
