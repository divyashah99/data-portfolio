
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border py-12 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Portfolio<span className="text-accent">.</span></h3>
          <p className="text-muted-foreground">
            Experienced data professional specializing in analytics,
            data science, AI/ML, and data engineering solutions.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-muted-foreground hover:text-accent transition-colors duration-200">Home</a></li>
            <li><a href="/experience" className="text-muted-foreground hover:text-accent transition-colors duration-200">Experience</a></li>
            <li><a href="/projects" className="text-muted-foreground hover:text-accent transition-colors duration-200">Projects</a></li>
            <li><a href="/about" className="text-muted-foreground hover:text-accent transition-colors duration-200">About</a></li>
          </ul>
        </div>
        
        <div id="contact">
          <h3 className="font-bold text-lg mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors duration-200 p-2 rounded-full hover:bg-secondary">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors duration-200 p-2 rounded-full hover:bg-secondary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-accent transition-colors duration-200 p-2 rounded-full hover:bg-secondary">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-muted-foreground">contact@example.com</p>
        </div>
      </div>
      
      <div className="container mt-8 pt-8 border-t border-border">
        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
