import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Check, ArrowRight, Zap, Shield, Cloud, Palette, ShoppingBag, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "cms",
    icon: Palette,
    title: "Enterprise CMS",
    subtitle: "Content Management Made Easy",
    description: "A powerful, flexible content management system designed for businesses of all sizes. Manage your website content with ease using our intuitive drag-and-drop interface.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    features: [
      "Drag & Drop Page Builder",
      "Multi-language Support",
      "SEO Optimization Tools",
      "Custom Workflow Management",
      "Role-based Access Control",
      "Real-time Collaboration",
      "Media Library",
      "API Integration",
    ],
    pricing: "Starting at $99/month",
  },
  {
    id: "saas",
    icon: Cloud,
    title: "BlueBug Cloud Suite",
    subtitle: "All-in-One Business Platform",
    description: "Comprehensive cloud-based software solutions including CRM, project management, HR tools, and analytics - all integrated in one powerful platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    features: [
      "Customer Relationship Management",
      "Project Management Tools",
      "HR & Payroll System",
      "Analytics Dashboard",
      "Automated Reporting",
      "Team Collaboration",
      "Third-party Integrations",
      "Mobile Apps",
    ],
    pricing: "Starting at $199/month",
  },
  {
    id: "ready-made",
    icon: ShoppingBag,
    title: "Ready-Made Websites",
    subtitle: "Launch Your Business Fast",
    description: "Pre-built, professionally designed website templates ready for quick deployment. Perfect for startups and small businesses looking to establish their online presence quickly.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    features: [
      "10+ Industry Templates",
      "E-commerce Ready",
      "Mobile Responsive",
      "SEO Optimized",
      "One-click Deployment",
      "Customizable Design",
      "Free Hosting (1 year)",
      "24/7 Support",
    ],
    pricing: "Starting at $499 one-time",
  },
  {
    id: "pos",
    icon: Database,
    title: "Restaurant POS System",
    subtitle: "Smart Point of Sale",
    description: "Complete point-of-sale system designed specifically for restaurants and cafes. Manage orders, inventory, and staff all from one intuitive interface.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    features: [
      "Table Management",
      "Order Processing",
      "Inventory Tracking",
      "Staff Management",
      "Kitchen Display System",
      "Payment Processing",
      "Sales Analytics",
      "Offline Mode",
    ],
    pricing: "Starting at $149/month",
  },
];

const Products = () => {
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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              CMS & SaaS Solutions
            </h1>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
              Ready-to-deploy digital products designed to accelerate your business growth and streamline operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <product.icon className="w-4 h-4" />
                    {product.subtitle}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    {product.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {product.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button asChild size="lg">
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <span className="text-lg font-semibold text-primary">{product.pricing}</span>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 gradient-bg text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              We can customize any of our products or build something completely new for your specific needs.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
