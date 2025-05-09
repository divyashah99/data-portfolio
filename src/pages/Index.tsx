
import React from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight, Brain, Database, UserCircle, Folder } from "lucide-react";
import { NavLink } from "react-router-dom";
import Layout from "@/components/Layout";

const projectCategories = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform raw data into actionable insights",
    icon: <Database className="h-6 w-6 text-accent" />,
    link: "/projects?category=data-analytics"
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Discover patterns and predict outcomes",
    icon: <UserCircle className="h-6 w-6 text-accent" />,
    link: "/projects?category=data-science"
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Build intelligent systems and algorithms",
    icon: <Brain className="h-6 w-6 text-accent" />,
    link: "/projects?category=ai-ml"
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Design robust data infrastructure and pipelines",
    icon: <Folder className="h-6 w-6 text-accent" />,
    link: "/projects?category=data-engineering"
  }
];

const featuredProjects = [
  {
    title: "Customer Churn Prediction",
    description: "An ML model that predicts customer churn with 89% accuracy using historical customer data and behavior patterns.",
    image: "/placeholder.svg",
    category: "AI & ML",
    technologies: ["Python", "TensorFlow", "Scikit-Learn", "Pandas"],
    link: "/projects/churn-prediction"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Interactive dashboard for monitoring business metrics in real-time with customizable views and alerts.",
    image: "/placeholder.svg",
    category: "Data Analytics",
    technologies: ["React", "D3.js", "Kafka", "PostgreSQL"],
    link: "/projects/analytics-dashboard"
  },
  {
    title: "ETL Data Pipeline",
    description: "Scalable ETL pipeline processing 1TB+ of data daily, transforming raw data into structured formats for analysis.",
    image: "/placeholder.svg",
    category: "Data Engineering",
    technologies: ["Apache Airflow", "AWS", "Python", "Spark"],
    link: "/projects/etl-pipeline"
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Data Professional <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Transforming complex data into valuable insights and innovative solutions
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/about">About Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 bg-background" id="projects">
        <div className="container px-4 md:px-6">
          <SectionHeader 
            title="Project Categories" 
            subtitle="Explore my work across different domains of data expertise"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectCategories.map((category) => (
              <NavLink to={category.link} key={category.id}>
                <div className="h-full p-6 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-lg transition-all">
                  <div className="mb-4 rounded-full bg-secondary p-3 w-fit">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center text-accent">
                    <span className="text-sm font-medium">Explore Projects</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="A selection of my most impactful work across various domains"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <NavLink to="/projects">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <SectionHeader title="Skills & Expertise" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4">Data Analytics</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Statistical Analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Data Visualization</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Business Intelligence</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>SQL & Reporting</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Excel & Power BI</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4">AI & Machine Learning</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Deep Learning</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Natural Language Processing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Computer Vision</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Predictive Modeling</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>TensorFlow & PyTorch</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4">Data Engineering</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>ETL Pipeline Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Cloud Data Solutions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Data Warehousing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Big Data Technologies</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></div>
                  <span>Data Governance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to collaborate on your next data project?
            </h2>
            <p className="mx-auto max-w-[600px]">
              I'm always open to discussing new opportunities and challenges in the data space.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
