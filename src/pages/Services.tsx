import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Globe, Code, Smartphone, Share2, Database, ShoppingBag, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "web-design",
    icon: Globe,
    title: "Website Designing",
    description: "Create stunning, responsive websites that captivate your audience and drive conversions.",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "E-commerce Solutions",
      "Landing Pages",
      "Corporate Websites",
      "Portfolio Sites",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "software",
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to streamline your business operations and boost productivity.",
    features: [
      "Enterprise Applications",
      "API Development",
      "Database Solutions",
      "System Integration",
      "Cloud Solutions",
      "Legacy Modernization",
    ],
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Apps",
      "App Maintenance",
      "UI/UX Design",
      "App Store Optimization",
    ],
    color: "from-blue-600 to-blue-500",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Handling",
    description: "Strategic social media management to grow your brand presence and engage your audience.",
    features: [
      "Content Strategy",
      "Social Media Marketing",
      "Community Management",
      "Analytics & Reporting",
      "Influencer Outreach",
      "Paid Advertising",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "cms-saas",
    icon: Database,
    title: "CMS & SaaS Products",
    description: "Scalable content management and software-as-a-service solutions for modern businesses.",
    features: [
      "Custom CMS Development",
      "SaaS Architecture",
      "Multi-tenant Systems",
      "Subscription Management",
      "API Integration",
      "White-label Solutions",
    ],
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: "ready-made",
    icon: ShoppingBag,
    title: "Ready-Made Websites",
    description: "Pre-built website templates ready for quick deployment and customization.",
    features: [
      "Quick Deployment",
      "Customizable Themes",
      "Business Templates",
      "E-commerce Ready",
      "SEO Optimized",
      "Support Included",
    ],
    color: "from-teal-500 to-cyan-500",
  },
];

const Services = () => {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end digital services to help your business 
              thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${service.color} opacity-20`} />
                  <div className="absolute inset-8 rounded-xl bg-card border border-border shadow-xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/30" />
                  </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
