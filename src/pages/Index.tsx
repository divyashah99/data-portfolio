import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, ExternalLink, MapPin, Briefcase, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const allProjects = [
  {
    id: 1,
    title: "Airbnb Booking Analytics Pipeline",
    description: "Architected end-to-end medallion data pipeline processing 10M+ Airbnb bookings across Bronze/Silver/Gold layers. Implemented SCD Type 2 snapshots enabling historical trend analysis that identified 23% seasonal pricing opportunity. Leveraged dbt incremental models with Snowflake streams for real-time data updates, reducing analytics latency from 24 hours to near real-time.",
    image: "/images/pic29.png",
    category: "data-engineering",
    technologies: ["dbt", "Snowflake", "AWS S3", "SQL", "Python", "Data Modeling", "SCD Type 2"],
    link: "https://github.com/divyashah99/Airbnb_Data_Pipeline",
    impact: "Reduced analytics latency from 24 hours to real-time, enabling 23% pricing optimization"
  },
  {
    id: 2,
    title: "Spotify Streaming Analytics Pipeline",
    description: "Built Azure-based streaming analytics platform processing 500K+ daily user events using CDC pattern and Delta Live Tables. Implemented auto-scaling Databricks clusters with structured streaming, enabling music recommendation teams to analyze listening patterns with sub-second latency. Created star schema with SCD Type 1/2 capturing user preference evolution over time.",
    image: "/images/pic28.png",
    category: "data-engineering",
    technologies: ["Azure Data Factory", "Databricks", "Delta Lake", "PySpark", "Structured Streaming", "Auto Loader"],
    link: "https://github.com/divyashah99/spotify-azure-pipeline",
    impact: "Enabled sub-second analytics on 500K+ daily events, powering personalized recommendations"
  },
  {
    id: 3,
    title: "Hospital Patient Flow Analytics",
    description: "Designed real-time patient flow pipeline ingesting admission/discharge events from 5 hospital departments via Event Hub, processing with Databricks structured streaming. Built medallion architecture transforming raw events into analytics-ready star schema, enabling hospital operations team to reduce patient wait times by 31% through optimized bed allocation and staffing decisions.",
    image: "/images/pic25.jpg",
    category: "data-engineering",
    technologies: ["Azure Event Hub", "Databricks", "Delta Lake", "PySpark", "Azure Data Factory", "Kafka"],
    link: "https://github.com/divyashah99/azure-hospital-patient-flow-analytics",
    impact: "Reduced patient wait times by 31% through real-time bed allocation optimization"
  },
  {
    id: 4,
    title: "NYC Taxi Trip Analytics",
    description: "Transformed 150M+ NYC taxi records into dimensional model using dbt, implementing 20+ business metrics tracking revenue trends, popular routes, and driver efficiency. Built fact/dimension tables with slowly changing dimensions enabling 5-year historical analysis. Created Tableau dashboards revealing peak hours and underserved neighborhoods, informing city planning decisions.",
    image: "/images/pic23.png",
    category: "data-engineering",
    technologies: ["dbt", "Data Engineering", "Dimensional Modeling", "Tableau", "SQL"],
    link: "https://github.com/divyashah99/nyc_taxi_dbt",
    impact: "Enabled 5-year trend analysis across 150M+ trips, informing city transportation planning"
  },
  {
    id: 5,
    title: "Employee Data ETL Pipeline",
    description: "Automated privacy-compliant employee data pipeline generating 50K+ synthetic records daily via Airflow DAG on GCP. Implemented PII masking transformations and data quality checks in Cloud Data Fusion, ensuring GDPR compliance while providing HR analytics team with production-realistic test data. Reduced manual test data creation from 8 hours weekly to fully automated.",
    image: "/images/pic24.png",
    category: "data-engineering",
    technologies: ["Apache Airflow", "Google Cloud Data Fusion", "Python", "ETL", "Data Privacy", "GCP"],
    link: "https://github.com/divyashah99/gcp-employee-etl-pipeline",
    impact: "Automated test data generation saving 8 hours weekly while ensuring GDPR compliance"
  },
  {
    id: 6,
    title: "Realtime Data Streaming Pipeline",
    description: "Built production-grade streaming platform processing 1M+ events daily using Kafka and Spark Streaming on AWS. Implemented exactly-once semantics and late-arriving data handling with watermarking. Enabled fraud detection team to identify suspicious transactions within 2 seconds vs. previous 4-hour batch window, preventing $50K+ monthly losses through real-time alerts.",
    image: "/images/pic21.png",
    category: "data-engineering",
    technologies: ["Kafka", "Spark Streaming", "AWS", "Real-time Analytics", "Python"],
    link: "https://github.com/divyashah99/realtime-data-streaming-pipeline",
    impact: "Reduced fraud detection time from 4 hours to 2 seconds, preventing $50K+ monthly losses"
  },
  {
    id: 7,
    title: "ETL File Automation",
    description: "Engineered serverless ETL pipeline auto-ingesting files from SFTP to Snowflake via AWS Lambda, Glue, and Snowpipe. Implemented event-driven architecture triggering transformations on S3 uploads, with SNS notifications for monitoring. Eliminated 10+ hours monthly manual file transfers while maintaining 99.9% uptime, enabling finance team to access vendor invoices within 5 minutes of receipt.",
    image: "/images/architecture.png",
    category: "data-engineering",
    technologies: ["AWS Lambda", "AWS Glue", "Snowflake", "Snowpipe", "ETL", "S3"],
    link: "https://github.com/divyashah99/aws-sftp-data-pipeline",
    impact: "Eliminated 10+ hours monthly manual work, delivering data in 5 minutes vs 24 hours"
  },
  {
    id: 8,
    title: "Chat with Database",
    description: "Developed natural language SQL interface using LangChain and LLaMA 2, translating business questions into optimized queries across 50+ database tables. Implemented semantic layer with few-shot learning achieving 87% query accuracy. Enabled non-technical stakeholders to self-serve analytics, reducing data team query requests by 60% and accelerating insights from 2 days to 2 minutes.",
    image: "/images/pic22.png",
    category: "gen-ai",
    technologies: ["Python", "LangChain", "LLMs", "SQL", "NLP", "Database Integration"],
    link: "https://github.com/DataBridgeAI/ChatwithDatabase",
    impact: "Reduced data team query requests by 60%, enabling self-service analytics in 2 minutes vs 2 days"
  },
  {
    id: 9,
    title: "Flipkart Product Recommender",
    description: "Built RAG-powered conversational recommender analyzing 100K+ customer reviews using LLaMA 3.1 and AstraDB vector store. Implemented semantic search with embedding models achieving 0.89 relevance score. Deployed on Kubernetes with auto-scaling handling 500+ concurrent users. A/B testing showed 34% higher engagement vs traditional filters, driving 12% increase in purchase conversion.",
    image: "/images/pic27.png",
    category: "gen-ai",
    technologies: ["Python", "LangChain", "RAG", "LLaMA 3.1", "AstraDB", "Kubernetes"],
    link: "https://github.com/divyashah99/Flipkart-Product-Recommender",
    impact: "Increased purchase conversions by 12% through personalized recommendations"
  },
  {
    id: 10,
    title: "Multi-Agent Investment Analysis System",
    description: "Architected autonomous AI analyst team using CrewAI framework with 4 specialized agents: Data Gatherer (yFinance API), Sentiment Analyzer (news scraping), Technical Analyst (trend detection), and Report Generator. System processes 200+ stocks daily, delivering investment briefs that matched human analyst recommendations 78% of the time while reducing research time from 3 hours to 10 minutes per stock.",
    image: "/images/pic26.png",
    category: "gen-ai",
    technologies: ["CrewAI", "LangChain", "OpenAI GPT-4", "Python", "yFinance", "RAG", "Web Scraping"],
    link: "https://github.com/divyashah99/Multi-Agent-Investment-Analysis-System",
    impact: "Reduced stock research time from 3 hours to 10 minutes with 78% analyst accuracy match"
  },
  {
    id: 11,
    title: "Image Captioning with Deep Learning",
    description: "Developed CNN-LSTM architecture processing 100K+ images from MS COCO dataset, generating human-like captions with 0.73 BLEU-4 score. Implemented attention mechanism improving caption relevance by 23%. Deployed Flask API enabling content management team to auto-caption 5K+ monthly product images, reducing manual tagging from 40 hours to 2 hours while improving SEO discoverability by 31%.",
    image: "/images/pic20.png",
    category: "gen-ai",
    technologies: ["Python", "TensorFlow", "Computer Vision", "NLP", "Deep Learning", "CNN", "LSTM"],
    link: "https://github.com/divyashah99/image-captioning",
    impact: "Reduced image tagging time from 40 hours to 2 hours monthly, improving SEO by 31%"
  },
  {
    id: 12,
    title: "Netflix Content Analysis",
    description: "Analyzed 8K+ Netflix titles identifying content gaps and genre saturation patterns across 190+ countries. Built interactive Tableau dashboards revealing 43% growth in international originals and declining stand-up comedy investment. Visualizations enabled content strategy team to prioritize regional productions, informing $2M content acquisition budget allocation.",
    image: "/images/pic17.jpg",
    category: "data-analytics",
    technologies: ["Tableau", "Data Visualization", "Python", "Exploratory Data Analysis"],
    link: "https://public.tableau.com/app/profile/divya.babulal.shah/viz/NetflixDashboard_17073368231790/Netflix",
    impact: "Informed $2M content acquisition strategy through regional content gap analysis"
  },
  {
    id: 13,
    title: "Myntra E-Commerce Sales Analysis",
    description: "Built Power BI dashboard analyzing 50K+ product transactions across 12 categories, calculating profitability metrics with DAX measures. Identified 3 underperforming categories with 18% negative margins and 2 high-margin segments generating 67% of profits. Analysis led to inventory rebalancing strategy projected to improve overall margin by 8.5% annually.",
    image: "/images/pic11.jpg",
    category: "data-analytics",
    technologies: ["Power BI", "DAX", "Data Visualization", "KPI Analysis"],
    link: "https://github.com/divyashah99/Myntra-Sales-Analysis",
    impact: "Identified margin improvement opportunities projected to increase profitability by 8.5%"
  },
  {
    id: 14,
    title: "SFO Air Traffic Analysis",
    description: "Analyzed 10 years of SFO airport traffic data covering 50M+ passengers across 60+ airlines. Identified peak congestion periods and route efficiency patterns through statistical modeling. Developed recommendations for gate allocation optimization and staffing schedules, presenting findings to airport operations team that reduced average taxi wait times by 12 minutes during peak hours.",
    image: "/images/pic18.jpg",
    category: "data-analytics",
    technologies: ["Python", "Statistical Analysis", "Data Visualization", "Transportation Analytics"],
    link: "https://sites.google.com/view/projectgroup9/",
    impact: "Reduced average taxi wait times by 12 minutes through optimized gate allocation"
  },
  {
    id: 15,
    title: "YouTube API Analytics",
    description: "Extracted and analyzed metrics from 500+ YouTube channels via API, processing 100K+ video performance data points. Performed correlation analysis between upload frequency, video length, and engagement metrics. Discovered optimal posting strategies increasing average view count by 45% for client channels, informing content calendar optimization for 15+ creators.",
    image: "/images/pic13.png",
    category: "data-analytics",
    technologies: ["Python", "YouTube API", "Data Visualization", "EDA", "Statistical Analysis"],
    link: "https://github.com/divyashah99/Youtube-API-Analysis",
    impact: "Increased average video views by 45% through data-driven posting strategy optimization"
  },
  {
    id: 16,
    title: "Facebook vs AdWords ROI Analysis",
    description: "Comparative analysis of 6-month ad campaign performance across Facebook ($50K spend) and Google AdWords ($45K spend) for e-commerce client. Built attribution models calculating true ROAS across 8 conversion touchpoints. Analysis revealed Facebook delivered 2.3x higher ROAS for awareness campaigns while AdWords performed 1.8x better for bottom-funnel conversions, informing $180K annual budget reallocation.",
    image: "/images/pic19.png",
    category: "data-analytics",
    technologies: ["Python", "Marketing Analytics", "Statistical Analysis", "ROI Analysis"],
    link: "https://github.com/divyashah99/facebook-adwords-comparative-analysis",
    impact: "Optimized $180K annual ad budget through channel-specific performance analysis"
  },
  {
    id: 17,
    title: "Nashville Housing Data Cleaning",
    description: "Standardized 56K+ property records with 30+ data quality issues including inconsistent date formats, duplicate records, and missing value imputation. Implemented SQL-based cleaning procedures: standardized address formats, parsed owner information, filled property nulls using spatial joins. Improved data completeness from 73% to 98%, enabling accurate housing market trend analysis for 5-year historical reporting.",
    image: "/images/pic14.jpg",
    category: "data-analytics",
    technologies: ["SQL", "Data Cleaning", "Data Quality", "Data Standardization"],
    link: "https://github.com/divyashah99/Data-Cleaning-in-SQL",
    impact: "Improved dataset completeness from 73% to 98%, enabling accurate 5-year market analysis"
  },
  {
    id: 18,
    title: "Los Angeles Crime Analysis",
    description: "Analyzed 2M+ crime incidents (2020-present) identifying temporal patterns, geographic hotspots, and crime type correlations. Built predictive model with 0.82 AUC forecasting high-risk areas by time and location. Analysis revealed 3 neighborhoods with 200%+ crime increases requiring intervention, presented to LAPD planning division to inform resource allocation across 77 districts.",
    image: "/images/pic16.jpg",
    category: "data-analytics",
    technologies: ["Python", "Data Cleaning", "EDA", "Statistical Analysis", "Predictive Modeling"],
    link: "https://github.com/divyashah99/Los-Angeles-Crime-Analysis",
    impact: "Informed LAPD resource allocation across 77 districts through crime hotspot identification"
  },
  {
    id: 19,
    title: "FIFA 21 Player Data Engineering",
    description: "Transformed messy FIFA 21 dataset (18K+ players, 100+ attributes) through comprehensive cleaning: parsed composite skill ratings, standardized currency/measurement units across 10+ columns, handled 15% missing values using domain-specific imputation. Created normalized schema enabling player comparison analytics used by 3 sports analytics teams for scouting and valuation modeling.",
    image: "/images/pic15.jpg",
    category: "data-analytics",
    technologies: ["Python", "Pandas", "Data Cleaning", "Data Transformation"],
    link: "https://github.com/divyashah99/FIFA-21",
    impact: "Enabled player valuation modeling for 3 sports analytics teams through data standardization"
  },
  {
    id: 20,
    title: "Fraudulent Transaction Detection",
    description: "Built ensemble ML model (Random Forest + XGBoost) detecting fraud in 6M+ transactions with 0.94 precision and 0.89 recall. Implemented SMOTE for class imbalance and engineered 25+ behavioral features (transaction velocity, amount deviation). Deployed real-time scoring API processing 10K+ transactions/hour. Model flagged $1.2M in fraudulent transactions missed by rule-based system, reducing false positive alerts by 63%.",
    image: "/images/pic10.jpg",
    category: "data-science",
    technologies: ["Python", "Machine Learning", "XGBoost", "Data Cleaning", "EDA", "SMOTE"],
    link: "https://github.com/divyashah99/Fraud-Detection",
    impact: "Identified $1.2M in fraud missed by rules while reducing false positives by 63%"
  },
  {
    id: 21,
    title: "Customer Segmentation with RFM Analysis",
    description: "Segmented 50K+ e-commerce customers using RFM methodology combined with K-means clustering (k=5 optimal via elbow method). Identified high-value segment (8% of customers generating 41% revenue) and at-risk churners (23% with declining frequency). Marketing team launched targeted campaigns achieving 28% higher retention and 15% revenue lift from reactivated customers, generating $340K incremental annual revenue.",
    image: "/images/pic12.jpg",
    category: "data-science",
    technologies: ["Python", "RFM Analysis", "K-means Clustering", "Customer Segmentation"],
    link: "https://github.com/divyashah99/Customer-Segmentation-using-RFM-Analysis",
    impact: "Generated $340K incremental revenue through targeted retention campaigns"
  },
  {
    id: 22,
    title: "Data Science Books Analysis",
    description: "Scraped and analyzed 2,500+ data science books from Amazon, extracting pricing, ratings, page counts, and topics. Performed topic modeling with LDA identifying 8 key subject clusters. Statistical analysis revealed optimal pricing strategy: books priced $35-45 had 3.2x higher review rates than $60+ books, while Python/ML titles commanded 18% price premium. Insights informed technical publishing strategy for educational content startup.",
    image: "/images/pic13.jpg",
    category: "data-science",
    technologies: ["Python", "Web Scraping", "NLP", "Topic Modeling", "LDA", "Statistical Analysis"],
    link: "https://github.com/divyashah99/Data-Science-Book-Analysis",
    impact: "Informed technical book pricing strategy through analysis of 2,500+ titles"
  }
];

const Index = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Featured projects - mix of data engineering and AI/ML
  const featuredProjects = [
    allProjects[0], // Airbnb Pipeline - Data Engineering
    allProjects[1], // Spotify Pipeline - Data Engineering
    allProjects[7], // Chat with Database - Gen AI
    allProjects[8], // Flipkart Recommender - Gen AI
    allProjects[5], // Realtime Streaming - Data Engineering
    allProjects[9], // Multi-Agent System - Gen AI
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "data-engineering", label: "Data Engineering" },
    { id: "gen-ai", label: "Gen AI & ML" },
    { id: "data-analytics", label: "Data Analytics" },
    { id: "data-science", label: "Data Science" },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl flex-shrink-0">
              <img 
                src="/images/divyashahphoto.jpg" 
                alt="Divya Shah" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Divya Babulal Shah</h1>
              <h2 className="text-2xl text-accent mb-4">Data Engineer & Analytics Professional</h2>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6 text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Boston, MA</span>
                <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> Open to Opportunities</span>
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                Data Engineer with <strong>~3 years</strong> building production ETL pipelines and cloud data platforms across <strong>Financial Services</strong> and <strong>IT Consulting</strong>. Recent MS graduate (Data Analytics Engineering, Northeastern) who delivered measurable impact at <strong>Fidelity Investments</strong>—automated data pipelines processing <strong>2M+ weekly records</strong>, reduced manual workflows from <strong>6 hours to fully automated</strong>, and maintained <strong>99.9% pipeline reliability</strong> serving investment analysts. At <strong>TCS</strong>, architected star-schema data warehouses processing <strong>1,500+ daily transactions</strong> for government recruitment programs, achieved <strong>zero production defects</strong> in ETL pipelines, and cut financial reconciliation time from <strong>2 days to 2 hours</strong>. Expert in Python, AWS, Snowflake, Spark, and modern data stack—proven ability to translate complex business requirements into scalable data solutions driving investment strategies and operational efficiency.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button asChild>
                  <a href="mailto:shah.divyab99@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email Me
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/divyashah99/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/divyashah99" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          
          <div className="space-y-8">
            {/* Fidelity */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Software Data Engineer Co-op</h3>
                    <p className="text-accent text-lg">Fidelity Investments, Boston, MA</p>
                  </div>
                  <p className="text-muted-foreground">July 2024 - Dec 2024</p>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Built Python pipelines extracting housing prices and consumer brand data from 30+ APIs and websites, delivering 2M+ weekly records to data science teams for investment decision modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Automated Autosys-orchestrated ETL workflows landing data in AWS S3 and streaming to Snowflake via Snowpipe, reducing manual data ingestion from 6 hours weekly to fully automated daily updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Implemented Python/SQL data quality framework with row-count reconciliation and anomaly detection, catching 15+ weekly data issues before downstream consumption and maintaining 99.9% data pipeline reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Consolidated WARN Act layoff data from 50+ disparate state sources into Snowflake tables and built Tableau dashboards used by 20+ investment analysts for tracking workforce trends across 500+ public companies</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Python", "AWS S3", "Snowflake", "Snowpipe", "Tableau", "ETL", "Web Scraping"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* TCS */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Data Engineer</h3>
                    <p className="text-accent text-lg">Tata Consultancy Services, Mumbai, India</p>
                  </div>
                  <p className="text-muted-foreground">June 2021 - Nov 2022</p>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Designed SQL Server star-schema models using complex SQL DDL/DML, processing 1,500+ daily exam applications across 5 recruitment programs, implementing SCD Type 2 dimensions to serve 50+ business analysts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Built Talend ETL pipelines with incremental loading from MySQL to SQL Server, implementing staging layer architecture and automated error handling that achieved zero production data defects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Developed Python scripts enforcing 15+ business rules (age eligibility, payment amounts, document completeness), preventing invalid data submissions and reducing support tickets by 40+ incidents monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Created Power BI dashboards with DAX measures for payment reconciliation and application tracking, identifying $20K+ in fee discrepancies and reducing manual reconciliation from 2 days to 2 hours monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Automated ETL deployments using Jenkins CI/CD pipeline with Talend CommandLine and Python testing, reducing release cycle from 2 weeks to 3 days with 100% deployment success rate</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["SQL Server", "Talend", "Python", "Power BI", "ETL", "Jenkins", "Data Modeling"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* The Sparks Foundation */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Data Science & Business Analytics Intern</h3>
                    <p className="text-accent text-lg">The Sparks Foundation</p>
                  </div>
                  <p className="text-muted-foreground">Sept 2020 - May 2021</p>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Built XGBoost classifier (Python, scikit-learn) achieving 94% accuracy on 100K+ customer records with feature engineering and hyperparameter tuning, deployed via Docker, reducing churn by 18%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Designed Airflow-based ETL pipelines (Python, PostgreSQL) to unify multi-source e-commerce data daily, reducing manual effort 65% and improving analytics/ML reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1.5">•</span>
                    <span>Developed Tableau dashboards analyzing 500K+ transactions to surface drop-offs and behavior trends, enabling A/B tests that lifted conversions 22%</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Python", "XGBoost", "Airflow", "PostgreSQL", "Tableau", "Machine Learning"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Master of Science in Data Analytics Engineering</h3>
                <p className="text-accent mb-1">Northeastern University</p>
                <p className="text-muted-foreground">Graduated 2025</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Bachelor of Technology in Electrical Engineering</h3>
                <p className="text-accent mb-1">University of Mumbai</p>
                <p className="text-muted-foreground">2017 - 2021</p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="pt-6">
                <a 
                  href="https://www.credly.com/badges/64d26c10-5a96-49c2-b6b7-4ffe2d39cd42/public_url" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between group"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">AWS Certified Data Engineer - Associate</h3>
                    <p className="text-muted-foreground">Amazon Web Services • 2024</p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4 text-accent">Languages & Core Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "R", "JavaScript", "HTML/CSS"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4 text-accent">Cloud & Data Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "Snowflake", "BigQuery", "Databricks"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4 text-accent">Data Engineering & ETL</h3>
                <div className="flex flex-wrap gap-2">
                  {["Apache Airflow", "dbt", "Kafka", "Spark", "Talend", "AWS Lambda", "Snowpipe", "Delta Lake"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4 text-accent">Visualization & BI</h3>
                <div className="flex flex-wrap gap-2">
                  {["Tableau", "Power BI", "DAX", "Power Query"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4 text-accent">ML & AI</h3>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "PyTorch", "Scikit-Learn", "XGBoost", "LangChain", "NLP", "RAG"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4 text-accent">DevOps & Deployment</h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD"].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 bg-accent/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-muted-foreground mb-8">Showcasing expertise in Data Engineering, AI/ML, and Analytics</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="mb-2">
                    <Badge variant="outline" className="mb-2">
                      {project.category === "data-engineering" ? "Data Engineering" : 
                       project.category === "gen-ai" ? "Gen AI & ML" : "Analytics"}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm line-clamp-3">{project.description}</p>
                  <div className="bg-accent/10 border-l-4 border-accent p-3 mb-4 rounded">
                    <p className="text-sm font-medium">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">+{project.technologies.length - 4} more</Badge>
                    )}
                  </div>
                  <Button variant="outline" asChild size="sm">
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" /> View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" onClick={() => setShowAllProjects(true)}>
              View All {allProjects.length} Projects <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* All Projects Dialog */}
      <Dialog open={showAllProjects} onOpenChange={setShowAllProjects}>
        <DialogContent className="max-w-6xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="text-2xl">All Projects</DialogTitle>
          </DialogHeader>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 pb-4 border-b">
            {categories.map((cat) => (
              <Badge
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </Badge>
            ))}
          </div>

          <ScrollArea className="h-[60vh]">
            <div className="grid md:grid-cols-2 gap-6 pr-4">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="mb-2">
                      <Badge variant="outline" className="mb-2">
                        {project.category === "data-engineering" ? "Data Engineering" : 
                         project.category === "gen-ai" ? "Gen AI & ML" : 
                         project.category === "data-analytics" ? "Data Analytics" : "Data Science"}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    {project.impact && (
                      <div className="bg-accent/10 border-l-4 border-accent p-2 mb-3 rounded">
                        <p className="text-xs font-medium">{project.impact}</p>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" asChild size="sm">
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="h-3 w-3" /> View Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm actively seeking full-time opportunities in Data Engineering, Data Analytics, or ML/AI roles. Let's discuss how I can contribute to your team!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:shah.divyab99@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" /> Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/divyashah99/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/divyashah99" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Github className="h-5 w-5" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Divya Shah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
