
import React from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight, Brain, Database, UserCircle, Folder, BarChart3, PieChart } from "lucide-react";
import { NavLink } from "react-router-dom";
import Layout from "@/components/Layout";

const projectCategories = [
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Extract insights from data through analysis",
    icon: <BarChart3 className="h-6 w-6 text-accent" />,
    link: "/projects?category=data-analytics"
  },
  {
    id: "data-visualization",
    title: "Data Visualization & BI",
    description: "Transform raw data into visual insights",
    icon: <PieChart className="h-6 w-6 text-accent" />,
    link: "/projects?category=data-visualization"
  },
  {
    id: "data-science",
    title: "Data Science & ML",
    description: "Discover patterns and predict outcomes",
    icon: <UserCircle className="h-6 w-6 text-accent" />,
    link: "/projects?category=data-science"
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Design robust data infrastructure and pipelines",
    icon: <Database className="h-6 w-6 text-accent" />,
    link: "/projects?category=data-engineering"
  },
  {
    id: "gen-ai",
    title: "Gen-AI",
    description: "Build intelligent generative AI systems",
    icon: <Brain className="h-6 w-6 text-accent" />,
    link: "/projects?category=gen-ai"
  }
];

const featuredProjects = [
  {
    title: "Chat with Database",
    description: "Natural language interface that allows users to query databases using conversational language, translating plain English to SQL queries.",
    image: "/images/pic22.png",
    category: "AI & ML",
    technologies: ["Python", "NLP", "SQL", "LLMs", "Database Integration"],
    link: "https://github.com/DataBridgeAI/ChatwithDatabase/tree/main"
  },
  {
    title: "Realtime Data Streaming Pipeline",
    description: "End-to-end data streaming solution that processes and analyzes data in real-time using modern streaming technologies for immediate insights and actions.",
    image: "/images/pic21.png",
    category: "Data Engineering",
    technologies: ["Kafka", "Spark Streaming", "AWS", "Real-time Analytics"],
    link: "https://github.com/divyashah99/realtime-data-streaming-pipeline"
  },
  {
    title: "Netflix Data Analysis",
    description: "Interactive Tableau visualizations exploring Netflix content distribution, genre preferences, release patterns, and user ratings to uncover valuable insights on user behavior and content trends.",
    image: "/images/pic17.jpg",
    category: "Data Analytics",
    technologies: ["Tableau", "Data Visualization", "Exploratory Data Analysis"],
    link: "https://public.tableau.com/app/profile/divya.babulal.shah/viz/NetflixDashboard_17073368231790/Netflix?publish=yes"
  },
  {
    title: "ETL File Automation",
    description: "Serverless data pipeline automating file transfer, transformation, and ingestion using AWS Lambda, Glue, SNS, and Snowpipe to load data into Snowflake in real-time.",
    image: "/images/architecture.png",
    category: "Data Engineering",
    technologies: ["AWS Lambda", "AWS Glue", "Snowflake", "Snowpipe", "ETL"],
    link: "https://github.com/divyashah99/aws-sftp-data-pipeline"
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
                Divya Shah <span className="text-gradient">Portfolio</span>
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary">
                <a href="mailto:shah.divyab99@gmail.com">Email Me</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10">
                <a href="https://www.linkedin.com/in/divyashah99/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
