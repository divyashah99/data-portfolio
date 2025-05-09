
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  // Data Analytics Projects
  {
    id: 1,
    title: "Customer Segmentation Analysis",
    description: "Using clustering algorithms to segment customers based on purchasing behavior and demographics for targeted marketing campaigns.",
    image: "/placeholder.svg",
    category: "data-analytics",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Tableau"],
    link: "#"
  },
  {
    id: 2,
    title: "Sales Performance Dashboard",
    description: "Interactive dashboard tracking sales performance across regions with drill-down capabilities and forecasting features.",
    image: "/placeholder.svg",
    category: "data-analytics",
    technologies: ["Power BI", "DAX", "SQL Server", "Excel"],
    link: "#"
  },
  {
    id: 3,
    title: "Web Analytics Tracking System",
    description: "Custom analytics tracking system providing insights into user behavior and conversion funnels on e-commerce platforms.",
    image: "/placeholder.svg",
    category: "data-analytics",
    technologies: ["JavaScript", "Google Analytics API", "BigQuery", "Data Studio"],
    link: "#"
  },
  
  // Data Science Projects
  {
    id: 4,
    title: "Time Series Forecasting Model",
    description: "ARIMA and Prophet models for forecasting stock prices with evaluation of prediction accuracy and confidence intervals.",
    image: "/placeholder.svg",
    category: "data-science",
    technologies: ["Python", "Pandas", "Prophet", "Statsmodels", "Matplotlib"],
    link: "#"
  },
  {
    id: 5,
    title: "Recommendation Engine",
    description: "Collaborative filtering system recommending products to users based on their past behavior and similar user preferences.",
    image: "/placeholder.svg",
    category: "data-science",
    technologies: ["Python", "Surprise", "NumPy", "Redis", "Flask"],
    link: "#"
  },
  {
    id: 6,
    title: "Anomaly Detection System",
    description: "System to identify unusual patterns in financial transactions that could indicate fraud or operational issues.",
    image: "/placeholder.svg",
    category: "data-science",
    technologies: ["Python", "Isolation Forest", "PyCaret", "Streamlit"],
    link: "#"
  },
  
  // AI & ML Projects
  {
    id: 7,
    title: "Customer Churn Prediction",
    description: "ML model that predicts customer churn with 89% accuracy using historical customer data and behavior patterns.",
    image: "/placeholder.svg",
    category: "ai-ml",
    technologies: ["Python", "TensorFlow", "Scikit-Learn", "Pandas"],
    link: "#"
  },
  {
    id: 8,
    title: "Sentiment Analysis Tool",
    description: "NLP system analyzing customer reviews and social media mentions to gauge brand perception and product feedback.",
    image: "/placeholder.svg",
    category: "ai-ml",
    technologies: ["Python", "BERT", "Hugging Face", "Flask", "React"],
    link: "#"
  },
  {
    id: 9,
    title: "Computer Vision for Quality Control",
    description: "Deep learning system detecting manufacturing defects from images with 95% accuracy, reducing manual inspection needs.",
    image: "/placeholder.svg",
    category: "ai-ml",
    technologies: ["Python", "PyTorch", "OpenCV", "CUDA", "Docker"],
    link: "#"
  },
  
  // Data Engineering Projects
  {
    id: 10,
    title: "ETL Data Pipeline",
    description: "Scalable ETL pipeline processing 1TB+ of data daily, transforming raw data into structured formats for analysis.",
    image: "/placeholder.svg",
    category: "data-engineering",
    technologies: ["Apache Airflow", "AWS", "Python", "Spark"],
    link: "#"
  },
  {
    id: 11,
    title: "Data Lake Architecture",
    description: "Cloud-based data lake storing structured and unstructured data with proper governance and security controls.",
    image: "/placeholder.svg",
    category: "data-engineering",
    technologies: ["AWS S3", "AWS Glue", "AWS Lake Formation", "Terraform"],
    link: "#"
  },
  {
    id: 12,
    title: "Real-time Streaming Platform",
    description: "System processing and analyzing streaming data from IoT devices for immediate insights and automated actions.",
    image: "/placeholder.svg",
    category: "data-engineering",
    technologies: ["Kafka", "Spark Streaming", "Redis", "Grafana"],
    link: "#"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "data-analytics", label: "Data Analytics" },
  { id: "data-science", label: "Data Science" },
  { id: "ai-ml", label: "AI & ML" },
  { id: "data-engineering", label: "Data Engineering" }
];

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  useEffect(() => {
    const category = searchParams.get("category") || "all";
    setActiveCategory(category);
    
    const filtered = category === "all" 
      ? projectsData 
      : projectsData.filter(project => project.category === category);
    
    setFilteredProjects(filtered);
  }, [searchParams]);
  
  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeader 
            title="My Projects" 
            subtitle="Explore my work across different domains of data expertise" 
          />
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 cursor-pointer hover:bg-accent hover:text-white transition-colors ${activeCategory === category.id ? 'bg-accent text-white' : 'bg-secondary'}`}
              >
                {category.label}
              </Badge>
            ))}
          </div>
          
          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                  technologies={project.technologies}
                  link={project.link}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
