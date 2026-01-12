import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    category: "Web Development",
    client: "TechNepal Pvt. Ltd.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    description: "A full-featured online shopping platform with payment integration, inventory management, and customer analytics.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    challenge: "The client needed a scalable e-commerce solution that could handle thousands of concurrent users.",
    solution: "We built a microservices architecture with real-time inventory tracking and seamless payment processing.",
    results: ["300% increase in online sales", "50% reduction in cart abandonment", "99.9% uptime achieved"],
  },
  {
    id: "2",
    title: "Healthcare App",
    category: "Mobile Development",
    client: "HealthFirst Nepal",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    description: "Telemedicine app connecting patients with healthcare providers for virtual consultations.",
    technologies: ["React Native", "Firebase", "WebRTC", "Node.js"],
    challenge: "Creating a reliable video consultation platform that works on low-bandwidth connections.",
    solution: "Implemented adaptive streaming and offline-first architecture for reliable healthcare access.",
    results: ["10,000+ consultations completed", "4.8 star rating on app stores", "Reduced wait times by 60%"],
  },
  {
    id: "3",
    title: "Hotel Booking System",
    category: "Software Development",
    client: "Himalayan Hotels Group",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    description: "Complete hotel management and booking solution with multi-property support.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    challenge: "Managing inventory across multiple properties with real-time availability updates.",
    solution: "Developed a centralized booking engine with instant synchronization across all channels.",
    results: ["40% increase in direct bookings", "Eliminated double bookings", "Unified 15 properties"],
  },
  {
    id: "4",
    title: "Restaurant POS",
    category: "SaaS Product",
    client: "Multiple Restaurant Chains",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    description: "Point-of-sale system for restaurant management with inventory and staff tracking.",
    technologies: ["Electron", "React", "Express", "MongoDB"],
    challenge: "Building an offline-capable POS that syncs when connectivity is restored.",
    solution: "Created a resilient system with local-first architecture and cloud synchronization.",
    results: ["Used by 50+ restaurants", "99.99% transaction accuracy", "30% faster order processing"],
  },
  {
    id: "5",
    title: "Learning Management System",
    category: "Web Development",
    client: "EduNepal Academy",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    description: "Comprehensive LMS for online courses with live classes and progress tracking.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    challenge: "Supporting thousands of concurrent students during live sessions.",
    solution: "Implemented scalable streaming infrastructure with CDN distribution.",
    results: ["25,000+ active students", "95% course completion rate", "Live classes for 500+ students"],
  },
  {
    id: "6",
    title: "Inventory Management",
    category: "Software Development",
    client: "Retail Chain Nepal",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    description: "Multi-warehouse inventory system with barcode scanning and automated reordering.",
    technologies: ["Angular", "NestJS", "PostgreSQL", "Redis"],
    challenge: "Tracking inventory across 20+ warehouses in real-time.",
    solution: "Built a distributed system with event-driven architecture for instant updates.",
    results: ["70% reduction in stockouts", "Automated 80% of reorders", "Real-time tracking across all locations"],
  },
];

const Projects = () => {
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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Projects We're Proud Of
            </h1>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
              Explore our latest work and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-white font-medium">
                        View Case Study
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
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
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with our expertise.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Button asChild className="mt-4">
            <Link to="/projects">Back to Projects</Link>
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
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-blue-200">Client: {project.client}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={project.image}
            alt={project.title}
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto grid gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground text-lg">{project.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground text-lg">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Solution</h2>
              <p className="text-muted-foreground text-lg">{project.solution}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-4">Results</h2>
              <ul className="space-y-3">
                {project.results.map(result => (
                  <li key={result} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {result}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Button asChild>
            <Link to="/projects">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to All Projects
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
