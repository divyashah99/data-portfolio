
import React from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ExperienceItem from "@/components/ExperienceItem";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const workExperience = [
  {
    title: "Data Engineer Co-op",
    company: "Fidelity Investments",
    description: "Working on data pipeline development, ETL processes, and data visualization to deliver insights to stakeholders.",
    skills: ["Python", "AWS S3", "Snowflake", "Power BI", "Tableau", "ETL", "Web Scraping"]
  },
  {
    title: "Data Engineer",
    company: "Tata Consultancy Services",
    description: "Designed and implemented data collection, automation, and analytics solutions using full-stack web technologies, SQL, Python, and Power BI, significantly improving efficiency, integration, and data-driven insights.",
    skills: ["ETL","HTML", "CSS", "JavaScript", "jQuery", "SQL", "Python", "Data Analysis"]
  },
];

// Update the detailed descriptions for each role
const experienceDetails = {
  "Data Engineer Co-op": [
    "Designed and implemented scalable data pipelines using Python, AWS S3, and Snowflake, automating data ingestion and transformation, eliminating manual data processing efforts.",
    "Optimized and managed Snowflake ETL workflows, including Snowpipe, streams, and scheduled tasks, significantly enhancing data freshness and efficiency.",
    "Engineered an advanced web data extraction solution using Python and BeautifulSoup, leveraging concurrent processing to maximize data extraction speed and accuracy.",
    "Developed impactful interactive dashboards in Power BI and Tableau, utilizing DAX and Power Query to drive data exploration and insights for stakeholders."
  ],
  "Data Engineer": [
   "Build 50+ dynamic web forms (HTML, CSS, JS, jQuery), streamlining data collection and enhancing efficiency across teams",
   "Designed standardized data models to unify application structures, reducing integration issues and improving maintainability",
   "Automated ETL, reporting, and integration workflows using SQL and SSIS, saving 10+ hours per week and accelerating project delivery timelines",
   "Analyzed form behavior and submission data using Python, increasing completion rates by 25% through UX optimizations and data-driven improvements",
   "Developed advanced Power BI reports with custom DAX measures and calculated columns to support complex KPIs and business logic for stakeholder dashboards"
  ]
};

const certifications = [
  {
    name: "AWS Certified Data Engineer",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "https://www.credly.com/badges/64d26c10-5a96-49c2-b6b7-4ffe2d39cd42/public_url"
  },
];

const Experience = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeader 
            title="Professional Experience" 
            subtitle="A timeline of my professional journey and expertise in the data field" 
          />
        </div>
      </section>
      
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <h2 className="text-2xl font-bold">Work Experience</h2>
              {workExperience.map((job, index) => (
                <div key={index}>
                  <ExperienceItem
                    title={job.title}
                    company={job.company}
                    period={job.period}
                    description={job.description}
                    skills={job.skills}
                    details={experienceDetails[job.title]}
                  />
                  {index < workExperience.length - 1 && <Separator className="my-10" />}
                </div>
              ))}
            </div>
            
            <div className="space-y-12">
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Master of Science in Data Analytics Engineering</h3>
                    <div className="text-sm text-muted-foreground flex justify-between mt-1">
                      <span>Northeastern University</span>
                      <span>2023-2025</span>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Bachelor of Technology in Electrical Engineering</h3>
                    <div className="text-sm text-muted-foreground flex justify-between mt-1">
                      <span>University of Mumbai</span>
                      <span>2017-2021</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Certifications */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div>
                        {cert.link ? (
                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-medium hover:text-accent transition-colors flex items-center gap-2 group"
                          >
                            {cert.name}
                            <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <h3 className="font-medium">{cert.name}</h3>
                        )}
                        <div className="text-sm text-muted-foreground flex justify-between mt-1">
                          <span>{cert.issuer}</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Skills */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Skills</h2>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-accent">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "R", "SQL", "MATLAB", "JavaScript", "HTML", "CSS"].map((skill) => (
                        <Badge key={skill} variant="outline" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-accent">Database & Modeling</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Snowflake", "AWS Redshift", "BigQuery", "MySQL", "NoSQL", "Data Warehousing", "Data Lakes"].map((skill) => (
                        <Badge key={skill} variant="outline" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-accent">Libraries & Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "TensorFlow", "Keras", "BeautifulSoup", "LangChain", "Hugging Face"].map((skill) => (
                        <Badge key={skill} variant="outline" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-accent">Methodology</h3>
                    <div className="flex flex-wrap gap-2">
                      {["ETL", "Machine Learning", "Deep Learning", "Data Mining", "Data Visualization", "NLP", "EDA", "Time Series Forecasting"].map((skill) => (
                        <Badge key={skill} variant="outline" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-accent">Business Intelligence</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Tableau", "Power BI", "DAX", "Power Query"].map((skill) => (
                        <Badge key={skill} variant="outline" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-accent">Cloud & DevOps</h3>
                    <div className="flex flex-wrap gap-2">
                      {["AWS S3", "AWS Lambda", "AWS Glue", "Snowpipe", "Google Cloud", "BigQuery", "Vertex AI", "Docker", "Kubernetes", "GitHub"].map((skill) => (
                        <Badge key={skill} variant="outline" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
