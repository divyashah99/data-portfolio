
import React from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ExperienceItem from "@/components/ExperienceItem";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

const workExperience = [
  {
    title: "Senior Data Scientist",
    company: "TechCorp Inc.",
    period: "Jan 2020 - Present",
    description: "Led a team of data scientists in developing machine learning models for customer segmentation and product recommendation. Improved conversion rates by 23% through optimized targeting algorithms.",
    skills: ["Python", "TensorFlow", "SQL", "AWS", "Team Leadership"]
  },
  {
    title: "Data Engineer",
    company: "DataFlow Systems",
    period: "Mar 2018 - Dec 2019",
    description: "Designed and implemented scalable ETL pipelines handling 500GB+ of daily data. Optimized database performance resulting in 35% faster query response times.",
    skills: ["Spark", "Kafka", "Python", "AWS", "PostgreSQL"]
  },
  {
    title: "Data Analyst",
    company: "Analytics Plus",
    period: "Jul 2016 - Feb 2018",
    description: "Conducted statistical analysis on customer data to identify market trends. Created interactive dashboards for executive reporting that reduced manual reporting time by 75%.",
    skills: ["SQL", "Tableau", "Excel", "Statistics", "Business Intelligence"]
  },
];

const skills = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 90 },
  { name: "SQL", level: 85 },
  { name: "Data Visualization", level: 90 },
  { name: "Big Data Technologies", level: 80 },
  { name: "Cloud Platforms", level: 85 },
];

const certifications = [
  {
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    date: "2022"
  },
  {
    name: "Google Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2021"
  },
  {
    name: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "2020"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2019"
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
                  />
                  {index < workExperience.length - 1 && <Separator className="my-10" />}
                </div>
              ))}
            </div>
            
            <div className="space-y-12">
              {/* Skills */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Skills</h2>
                <div className="space-y-5">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Certifications */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-medium">{cert.name}</h3>
                      <div className="text-sm text-muted-foreground flex justify-between mt-1">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Education</h2>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Master of Science in Data Science</h3>
                    <div className="text-sm text-muted-foreground flex justify-between mt-1">
                      <span>Stanford University</span>
                      <span>2015-2016</span>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                    <div className="text-sm text-muted-foreground flex justify-between mt-1">
                      <span>MIT</span>
                      <span>2011-2015</span>
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
