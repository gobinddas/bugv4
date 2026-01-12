import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { MapPin, Briefcase, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const jobs = [
  {
    id: "1",
    title: "Senior React Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Kathmandu, Nepal",
    description: "We're looking for an experienced React developer to join our team and help build amazing web applications for our clients.",
    requirements: [
      "5+ years of experience with React.js",
      "Strong understanding of TypeScript",
      "Experience with state management (Redux, MobX)",
      "Familiarity with modern build tools",
      "Excellent problem-solving skills",
    ],
  },
  {
    id: "2",
    title: "Mobile App Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Kathmandu, Nepal",
    description: "Join our mobile team to develop cross-platform applications using React Native.",
    requirements: [
      "3+ years of React Native experience",
      "Published apps on App Store and Play Store",
      "Understanding of native modules",
      "Experience with app performance optimization",
      "Team collaboration skills",
    ],
  },
  {
    id: "3",
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Kathmandu, Nepal",
    description: "We need a creative designer to craft beautiful and intuitive user interfaces for our web and mobile projects.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and Adobe Suite",
      "Strong portfolio showcasing web/mobile design",
      "Understanding of design systems",
      "User research experience",
    ],
  },
  {
    id: "4",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Kathmandu, Nepal",
    description: "Help our clients grow their online presence through strategic digital marketing campaigns.",
    requirements: [
      "3+ years of digital marketing experience",
      "Experience with SEO, SEM, and social media",
      "Data-driven approach to marketing",
      "Content creation skills",
      "Strong analytical skills",
    ],
  },
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Application submitted successfully! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", coverLetter: "" });
    setSelectedJob(null);
  };

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
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Build Your Career with Us
            </h1>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
              Join a team of passionate professionals dedicated to creating exceptional digital solutions. 
              Grow your skills while working on exciting projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Join Blue Bug?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer a dynamic work environment with opportunities for growth and learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Competitive Salary", desc: "Industry-leading compensation packages" },
              { title: "Learning Budget", desc: "Annual budget for courses and conferences" },
              { title: "Flexible Hours", desc: "Work-life balance is our priority" },
              { title: "Growth Path", desc: "Clear career progression opportunities" },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border text-center"
              >
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find your next opportunity with us.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {selectedJob === job.id ? "Close" : "View Details"}
                      <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${selectedJob === job.id ? "rotate-90" : ""}`} />
                    </Button>
                  </div>
                </div>

                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-border"
                  >
                    <div className="pt-6">
                      <p className="text-muted-foreground mb-6">{job.description}</p>
                      
                      <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                      <ul className="space-y-2 mb-8">
                        {job.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>

                      {/* Application Form */}
                      <div className="bg-muted/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-4">Apply for this position</h4>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your full name"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your@email.com"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+977 98XXXXXXXX"
                            />
                          </div>
                          <div>
                            <Label htmlFor="coverLetter">Cover Letter</Label>
                            <Textarea
                              id="coverLetter"
                              value={formData.coverLetter}
                              onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                              placeholder="Tell us why you're interested in this position..."
                              rows={4}
                            />
                          </div>
                          <Button type="submit">
                            Submit Application
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </form>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
