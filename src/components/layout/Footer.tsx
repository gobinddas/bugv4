import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Website Designing", href: "/services#web-design" },
    { label: "Software Development", href: "/services#software" },
    { label: "Mobile App Development", href: "/services#mobile" },
    { label: "Social Media Handling", href: "/services#social-media" },
  ],
  products: [
    { label: "CMS Solutions", href: "/products#cms" },
    { label: "SaaS Products", href: "/products#saas" },
    { label: "Ready-Made Websites", href: "/products#ready-made" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/bluebugsoftware.np", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/bluebug-software", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/bluebug.soft/", label: "Instagram" },
  { icon: Github, href: "https://github.com/bluebug-developer", label: "GitHub" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className=" w-32 lg:w-64 rounded-lg  flex items-center justify-center">
                <img src="public/images/brand_white.png" />
              </div>
             
            </Link>
            <p className="text-blue-200 mb-6 max-w-sm">
              Transforming ideas into powerful digital solutions. Your trusted partner for web development, 
              mobile apps, and software solutions in Nepal.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@bluebugsoft.com" className="flex items-center gap-3 text-blue-200 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@bluebugsoft.com</span>
              </a>
              <a href="tel:+9779825147838" className="flex items-center gap-3 text-blue-200 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+977 9825147838</span>
              </a>
              <div className="flex items-start gap-3 text-blue-200">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-blue-50 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-blue-200 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-blue-50 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-blue-200 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-blue-50 mb-4">Products</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-blue-200 hover:text-cyan-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h4 className="font-display font-semibold text-blue-50 mb-2">Subscribe to our Newsletter</h4>
              <p className="text-blue-200">Stay updated with the latest tech insights and company news.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3 w-full lg:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-blue-900/50 border-blue-700 text-blue-50 placeholder:text-blue-400 w-full lg:w-72"
              />
              <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-blue-950 shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Blue Bug Software. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-blue-800/50 flex items-center justify-center text-blue-200 hover:bg-cyan-500 hover:text-blue-950 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
