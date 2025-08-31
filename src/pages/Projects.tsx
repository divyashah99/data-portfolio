
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";

const projectsData = [
    {
  id: 1,
  title: "Employee Data ETL Pipeline",
  description: "Automated daily ETL pipeline generating synthetic employee data with privacy transformations using Google Cloud Platform services.",
  image: "/images/pic24.png", 
  category: "data-engineering",
  technologies: ["Apache Airflow", "Google Cloud Data Fusion", "Python", "ETL", "Data Privacy"],
  links: [
    { type: "GitHub", url: "https://github.com/divyashah99/gcp-employee-etl-pipeline" }
  ]
},
  // Data Visualization & BI Projects
   {
    id: 17,
    title: "Netflix Data Analysis",
    description: "Interactive Tableau visualizations exploring Netflix content distribution, genre preferences, release patterns, and user ratings to uncover valuable insights on user behavior and content trends.",
    image: "/images/pic17.jpg",
    category: "data-visualization",
    technologies: ["Tableau", "Data Visualization", "Exploratory Data Analysis"],
    links: [
      { type: "Tableau", url: "https://public.tableau.com/app/profile/divya.babulal.shah/viz/NetflixDashboard_17073368231790/Netflix?publish=yes" }
    ]
  },
  {
    id: 16,
    title: "Myntra Sales Analysis",
    description: "Power BI dashboard analyzing e-commerce product performance with KPIs including Sales, Quantity, Profit, and Shipping Cost to provide valuable business insights.",
    image: "/images/pic11.jpg",
    category: "data-visualization",
    technologies: ["Power BI", "Data Visualization", "KPI Analysis"],
    links: [
      { type: "Power BI", url: "https://github.com/divyashah99/Myntra-Sales-Analysis/blob/main/MyntraSalesDashboard.pdf" }
    ]
  },
  {
    id: 15,
    title: "SFO Air Traffic Analysis",
    description: "Detailed analysis of San Francisco International Airport traffic patterns, passenger flows, and operational metrics to identify optimization opportunities.",
    image: "/images/pic18.jpg",
    category: "data-visualization",
    technologies: ["Data Analysis", "Visualization", "Transportation Analytics"],
    links: [
      { type: "Website", url: "https://sites.google.com/view/projectgroup9/" }
    ]
  },

  {
    id: 14,
    title: "Youtube API Analysis",
    description: "Analysis of YouTube channel statistics using the YouTube Data API, performing exploratory data analysis on video metrics with visualizations of key insights.",
    image: "/images/pic13.png",
    category: "data-analytics",
    technologies: ["Python", "YouTube API", "Data Visualization", "EDA"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/Youtube-API-Analysis" }
    ]
  },
  {
    id: 13,
    title: "Facebook-AdWords Comparative Analysis",
    description: "Comprehensive analysis comparing Facebook and Google AdWords advertising platforms, evaluating performance metrics, ROI, and audience targeting effectiveness.",
    image: "/images/pic19.png",
    category: "data-analytics",
    technologies: ["Data Analysis", "Marketing Analytics", "Visualization", "ROI Analysis"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/facebook-adwords-comparative-analysis" }
    ]
  },
  {
    id: 12,
    title: "Data Cleaning in SQL",
    description: "Addressing data quality issues in the Nashville Housing dataset by enhancing overall quality, standardizing formats, and streamlining for more effective analysis.",
    image: "/images/pic14.jpg",
    category: "data-analytics",
    technologies: ["SQL", "Data Cleaning", "Data Quality"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/Data-Cleaning-in-SQL" }
    ]
  },
  {
    id: 11,
    title: "Los Angeles Crime Analysis",
    description: "Analysis of real-world crime data from 2020 to present, focusing on cleaning, exploratory analysis, and addressing questions about crime trends, patterns, and influencing factors.",
    image: "/images/pic16.jpg",
    category: "data-analytics",
    technologies: ["Python", "Data Cleaning", "EDA", "Statistical Analysis"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/Los-Angeles-Crime-Analysis" }
    ]
  },
  {
    id: 10,
    title: "FIFA 21 Data Cleaning and Transformation",
    description: "Cleaning and transforming FIFA 2021 player data to make it more suitable for analysis, including player attributes, personal details, and performance metrics.",
    image: "/images/pic15.jpg",
    category: "data-analytics",
    technologies: ["Python", "Data Cleaning", "Data Transformation"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/FIFA-21" }
    ]
  },

  {
    id: 9,
    title: "Fraudulent Transactions Detection",
    description: "Machine learning models for identifying fraudulent financial transactions, emphasizing data cleaning and exploratory analysis to enhance security and prevent financial losses.",
    image: "/images/pic10.jpg",
    category: "data-science",
    technologies: ["Python", "Machine Learning", "Data Cleaning", "EDA"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/Fraud-Detection" }
    ]
  },
  {
    id: 8,
    title: "Customer Segmentation using RFM Analysis",
    description: "Leveraging e-Commerce dataset to conduct customer segmentation using Recency, Frequency, and Monetary (RFM) analysis for targeted marketing strategies.",
    image: "/images/pic12.jpg",
    category: "data-science",
    technologies: ["Python", "RFM Analysis", "Customer Segmentation", "Data Analysis"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/Customer-Segmentation-using-RFM-Analysis" }
    ]
  },
  {
    id: 7,
    title: "Data Science Book Analysis",
    description: "Analysis of Kaggle-sourced Data Science Books dataset from Amazon, exploring correlations between prices and reviews, book length impact, and identifying top Python and ML books.",
    image: "/images/pic13.jpg",
    category: "data-science",
    technologies: ["Python", "Cluster Analysis", "Web Scraping", "Text Analysis"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/Data-Science-Book-Analysis" }
    ]
  },
  {
    id: 6,
    title: "Image Captioning",
    description: "Deep learning model that automatically generates descriptive captions for images using computer vision and natural language processing techniques.",
    image: "/images/pic20.png",
    category: "data-science",
    technologies: ["Python", "Deep Learning", "Computer Vision", "NLP", "TensorFlow"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/image-captioning" }
    ]
  },

  {
    id: 5,
    title: "ETL File Automation",
    description: "Serverless data pipeline automating file transfer, transformation, and ingestion using AWS Lambda, Glue, SNS, and Snowpipe to load data into Snowflake in real-time.",
    image: "/images/architecture.png",
    category: "data-engineering",
    technologies: ["AWS Lambda", "AWS Glue", "Snowflake", "Snowpipe", "ETL"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/aws-sftp-data-pipeline" }
    ]
  },
  {
    id: 4,
    title: "Realtime Data Streaming Pipeline",
    description: "End-to-end data streaming solution that processes and analyzes data in real-time using modern streaming technologies for immediate insights and actions.",
    image: "/images/pic21.png",
    category: "data-engineering",
    technologies: ["Kafka", "Spark Streaming", "AWS", "Real-time Analytics"],
    links: [
      { type: "GitHub", url: "https://github.com/divyashah99/realtime-data-streaming-pipeline" }
    ]
  },

  {
    id: 3,
    title: "Chat with Database",
    description: "Natural language interface that allows users to query databases using conversational language, translating plain English to SQL queries.",
    image: "/images/pic22.png",
    category: "gen-ai",
    technologies: ["Python", "NLP", "SQL", "LLMs", "Database Integration"],
    links: [
      { type: "GitHub", url: "https://github.com/DataBridgeAI/ChatwithDatabase/tree/main" }
    ]
  },
  {
  id: 2,
  title: "NYC Taxi Trip Analytics",
  description: "Modern data engineering pipeline transforming NYC taxi trip data using dbt and dimensional modeling.",
  image: "/images/pic23.png", 
  category: "data-engineering",
  technologies: ["dbt", "Data Engineering", "Dimensional Modeling", "ETL"],
  links: [
    { type: "GitHub", url: "https://github.com/divyashah99/nyc_taxi_dbt" },
    { type: "Tableau", url: "https://public.tableau.com/app/profile/divya.babulal.shah/viz/NYC_Taxi_Analysis/Dashboard1" }
  ]
}

  
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "data-analytics", label: "Data Analytics" },
  { id: "data-visualization", label: "Data Visualization & BI" },
  { id: "data-science", label: "Data Science & ML" },
  { id: "data-engineering", label: "Data Engineering" },
  { id: "gen-ai", label: "Gen-AI" }
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
                  links={project.links}
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
