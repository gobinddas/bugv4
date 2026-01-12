import { motion } from "framer-motion";
import { ArrowRight, Check, Zap, Shield, Cloud, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "cms",
    icon: Palette,
    title: "Enterprise CMS",
    description: "Powerful content management system for businesses of all sizes.",
    features: ["Drag & Drop Editor", "Multi-language Support", "SEO Optimized", "Custom Workflows"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "saas",
    icon: Cloud,
    title: "SaaS Solutions",
    description: "Scalable cloud-based software solutions for modern businesses.",
    features: ["Multi-tenant Architecture", "API Integration", "Analytics Dashboard", "Auto Scaling"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "ready-made",
    icon: Zap,
    title: "Ready-Made Websites",
    description: "Pre-built website templates ready for quick launch.",
    features: ["Fast Deployment", "Customizable Design", "Mobile Responsive", "Support Included"],
    color: "from-indigo-500 to-blue-500",
  },
];

export function ProductsShowcase() {
  return (
    <section className="py-20 lg:py-32 bg-blue-950 text-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            CMS & SaaS Solutions
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Ready-to-deploy digital products designed to accelerate your business growth.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-900/50 rounded-2xl p-8 border border-blue-800 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold mb-3">
                {product.title}
              </h3>
              <p className="text-blue-200 mb-6">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-blue-100">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={`/products#${product.id}`}
                className="inline-flex items-center text-cyan-400 font-medium hover:gap-3 gap-2 transition-all group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-blue-950 group">
            <Link to="/products">
              Explore All Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
