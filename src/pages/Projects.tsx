
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
    title: "Netflix Data Analysis",
    description: "Interactive Tableau visualizations exploring Netflix content distribution, genre preferences, release patterns, and user ratings to uncover valuable insights on user behavior and content trends.",
    image: "/images/pic17.jpg",
    category: "data-analytics",
    technologies: ["Tableau", "Data Visualization", "Exploratory Data Analysis"],
    link: "https://public.tableau.com/app/profile/divya.babulal.shah/viz/NetflixDashboard_17073368231790/Netflix?publish=yes"
  },
  {
    id: 2,
    title: "Myntra Sales Analysis",
    description: "Power BI dashboard analyzing e-commerce product performance with KPIs including Sales, Quantity, Profit, and Shipping Cost to provide valuable business insights.",
    image: "/images/pic11.jpg",
    category: "data-analytics",
    technologies: ["Power BI", "Data Visualization", "KPI Analysis"],
    link: "https://github.com/divyashah99/Myntra-Sales-Analysis/blob/main/MyntraSalesDashboard.pdf"
  },
  {
    id: 3,
    title: "Youtube API Analysis",
    description: "Analysis of YouTube channel statistics using the YouTube Data API, performing exploratory data analysis on video metrics with visualizations of key insights.",
    image: "/images/pic13.png",
    category: "data-analytics",
    technologies: ["Python", "YouTube API", "Data Visualization", "EDA"],
    link: "https://github.com/divyashah99/Youtube-API-Analysis"
  },
  
  // Data Science Projects
  {
    id: 4,
    title: "Fraudulent Transactions Detection",
    description: "Machine learning models for identifying fraudulent financial transactions, emphasizing data cleaning and exploratory analysis to enhance security and prevent financial losses.",
    image: "/images/pic10.jpg",
    category: "data-science",
    technologies: ["Python", "Machine Learning", "Data Cleaning", "EDA"],
    link: "https://github.com/divyashah99/Fraud-Detection"
  },
  {
    id: 5,
    title: "Customer Segmentation using RFM Analysis",
    description: "Leveraging e-Commerce dataset to conduct customer segmentation using Recency, Frequency, and Monetary (RFM) analysis for targeted marketing strategies.",
    image: "/images/pic12.jpg",
    category: "data-science",
    technologies: ["Python", "RFM Analysis", "Customer Segmentation", "Data Analysis"],
    link: "https://github.com/divyashah99/Customer-Segmentation-using-RFM-Analysis"
  },
  {
    id: 6,
    title: "Data Science Book Analysis",
    description: "Analysis of Kaggle-sourced Data Science Books dataset from Amazon, exploring correlations between prices and reviews, book length impact, and identifying top Python and ML books.",
    image: "/images/pic13.jpg",
    category: "data-science",
    technologies: ["Python", "Cluster Analysis", "Web Scraping", "Text Analysis"],
    link: "https://github.com/divyashah99/Data-Science-Book-Analysis"
  },
  
  // Data Engineering Projects
  {
    id: 7,
    title: "ETL File Automation",
    description: "Serverless data pipeline automating file transfer, transformation, and ingestion using AWS Lambda, Glue, SNS, and Snowpipe to load data into Snowflake in real-time.",
    image: "/images/architecture.png",
    category: "data-engineering",
    technologies: ["AWS Lambda", "AWS Glue", "Snowflake", "Snowpipe", "ETL"],
    link: "https://github.com/divyashah99/aws-sftp-data-pipeline"
  },
  
  // Data Cleaning Projects
  {
    id: 8,
    title: "Data Cleaning in SQL",
    description: "Addressing data quality issues in the Nashville Housing dataset by enhancing overall quality, standardizing formats, and streamlining for more effective analysis.",
    image: "/images/pic14.jpg",
    category: "data-analytics",
    technologies: ["SQL", "Data Cleaning", "Data Quality"],
    link: "https://github.com/divyashah99/Data-Cleaning-in-SQL"
  },
  {
    id: 9,
    title: "Los Angeles Crime Analysis",
    description: "Analysis of real-world crime data from 2020 to present, focusing on cleaning, exploratory analysis, and addressing questions about crime trends, patterns, and influencing factors.",
    image: "/images/pic16.jpg",
    category: "data-analytics",
    technologies: ["Python", "Data Cleaning", "EDA", "Statistical Analysis"],
    link: "https://github.com/divyashah99/Los-Angeles-Crime-Analysis"
  },
  {
    id: 10,
    title: "FIFA 21 Data Cleaning and Transformation",
    description: "Cleaning and transforming FIFA 2021 player data to make it more suitable for analysis, including player attributes, personal details, and performance metrics.",
    image: "/images/pic15.jpg",
    category: "data-analytics",
    technologies: ["Python", "Data Cleaning", "Data Transformation"],
    link: "https://github.com/divyashah99/FIFA-21"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "data-analytics", label: "Data Analytics" },
  { id: "data-science", label: "Data Science" },
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
