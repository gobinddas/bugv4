import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Define the Interface based on your Laravel Model
interface BlogData {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  author: string;
  details: string;
  image: string;
  created_at: string;
  tags: string[];
}

export const Blog = () => {
  const [posts, setPosts] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Calling the index route: Route::get('/', [BlogApiController::class, 'index'])
        const response = await fetch("http://127.0.0.1:8000/api/blogs");
        const json = await response.json();
        // Laravel paginate() returns an object where the list is in 'data'
        setPosts(json.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="py-32 text-center text-blue-900">
          Loading insights...
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 lg:py-32 bg-gradient-to-b from-blue-950 to-blue-900 text-blue-50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Insights & Updates
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={`http://127.0.0.1:8000/storage/${post.image}`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2">
                      {post.subtitle}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-sm font-medium">
                        By {post.author}
                      </span>
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
