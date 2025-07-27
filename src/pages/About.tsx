
import React from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-foreground">
                About Me
              </h1>
              <h2 className="text-xl font-medium mb-4 text-accent">Divya Babulal Shah</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Data professional with expertise in analytics, data science, ML/AI, and data engineering.
              </p>
              <p className="mb-6 text-justify text-foreground/90 leading-relaxed">
                I am a passionate and results-driven Data Analytics professional currently pursuing a Master's in Data Analytics Engineering at Northeastern University. With a strong foundation in ETL, data pipelines, and cloud technologies, I specialize in building scalable data solutions that optimize machine learning workflows and drive data-driven decision-making. My expertise spans across data visualization, interactive dashboards, and working with both structured and unstructured data. Enthusiastic about exploring the potential of LLMs, Generative AI, and leveraging advanced analytics techniques to solve complex problems and deliver impactful insights. Dedicated to continuously learning and contributing to innovative, data-centric projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-muted rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/images/divyashahphoto.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <SectionHeader title="My Approach" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-secondary/80 p-2 w-fit">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data-Driven Decision Making</h3>
                <p className="text-muted-foreground">
                  I believe in letting data guide strategic decisions, using robust methodologies to extract actionable insights from complex datasets.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-secondary/80 p-2 w-fit">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">End-to-End Solutions</h3>
                <p className="text-muted-foreground">
                  From data collection and processing to analysis and visualization, I focus on building comprehensive solutions that address business needs.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-secondary/80 p-2 w-fit">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  The data field evolves rapidly, and I'm committed to staying at the forefront of new technologies, techniques, and best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container px-4 md:px-6">
          <SectionHeader title="Professional Journey" align="left" />
          <div className="max-w-none">
            <p className="mb-5 text-base text-justify text-foreground/90 leading-relaxed">
              My journey in the data world began with a strong engineering foundation, sparking a passion for transforming data into insights. Starting as a Data Engineer at TCS, I quickly honed my skills in building data pipelines, designing models, and streamlining data collection processes.
            </p>
            <p className="mb-5 text-base text-justify text-foreground/90 leading-relaxed">
              As my career progressed, I expanded my expertise into data engineering at Fidelity Investments, where I designed scalable data pipelines using Python, AWS, and Snowflake. I've developed a particular talent for automating ETL workflows and creating interactive dashboards that drive stakeholder decision-making. The tangible impact of my work—seeing how data-driven solutions improved business outcomes—fueled my continued growth.
            </p>
            <p className="mb-5 text-base text-justify text-foreground/90 leading-relaxed">
              My academic pursuit of a Master's in Data Analytics Engineering at Northeastern University has further deepened my technical capabilities, allowing me to explore cutting-edge technologies like LLMs and Generative AI. Projects such as "Chat with Database" and "Realtime Data Streaming Pipeline" showcase my ability to bridge the gap between theoretical knowledge and practical applications.
            </p>
            <p className="text-base text-justify text-foreground/90 leading-relaxed">
              Today, I balance technical expertise with strategic thinking, focusing on creating end-to-end data solutions that extract meaningful patterns from complex datasets. My diverse experience across the data ecosystem—from visualization to engineering to AI—allows me to approach problems with a comprehensive perspective, helping organizations leverage their data assets for competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <SectionHeader title="Core Values" align="left" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border border-border bg-card/50 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-muted-foreground mb-8">
                I constantly seek innovative approaches to data challenges, exploring new methodologies and technologies to deliver better results.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                I hold myself to high standards of technical excellence, ensuring that my solutions are robust, efficient, and maintainable.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card/50 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Collaboration</h3>
              <p className="text-muted-foreground mb-8">
                I believe the best solutions emerge from collaborative efforts, working closely with stakeholders to understand needs and deliver tailored solutions.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Impact</h3>
              <p className="text-muted-foreground">
                I focus on creating solutions that drive meaningful business impact, translating technical work into tangible value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-accent/90 text-accent-foreground">
        <div className="container px-4 md:px-6">
          <SectionHeader title="Beyond the Data" align="center" />
          <div className="text-center max-w-3xl mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-lg shadow-lg">
            <p className="mb-8">
              When I'm not exploring datasets or building models, you'll find me hiking mountain trails, reading about emerging technologies, participating in data science competitions, and mentoring aspiring data professionals. I believe that diverse experiences enrich our perspectives and ultimately improve our work.
            </p>
            <Separator className="my-8" />
            <p className="text-lg font-medium italic">
              "The goal is to turn data into information, and information into insight." - Carly Fiorina
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
