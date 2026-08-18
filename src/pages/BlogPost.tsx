import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "./Blog"; // or move data to a separate file

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find((p) => p.slug === slug);

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
              <span>{post.author}</span>
              <span>•</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto prose prose-lg prose-blue"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Back */}
      <section className="py-12 bg-muted/50 text-center">
        <Button asChild>
          <Link to="/blog">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Blog
          </Link>
        </Button>
      </section>
    </Layout>
  );
};

export default BlogPost;
