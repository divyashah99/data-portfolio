
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                About Me
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Data professional with expertise in analytics, data science, ML/AI, and data engineering.
              </p>
              <p className="mb-6">
                With over 8 years of experience in the data space, I've worked across diverse industries including finance, e-commerce, healthcare, and tech. My passion lies in transforming complex data challenges into actionable solutions that drive business value.
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
                  src="/placeholder.svg" 
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
          <div className="prose max-w-none">
            <p className="mb-4 text-lg">
              My journey in the data world began with a deep curiosity about how information can be transformed into actionable insights. Starting as a data analyst, I quickly developed a passion for extracting meaningful patterns from complex datasets.
            </p>
            <p className="mb-4">
              As my career progressed, I expanded my expertise into data science, machine learning, and AI, developing models that predict customer behavior, optimize operations, and automate decision processes. The tangible impact of my work—seeing how data-driven solutions improved business outcomes—fueled my continued growth.
            </p>
            <p className="mb-4">
              Recognizing the importance of robust data infrastructure, I ventured into data engineering, designing scalable pipelines and architectures that form the backbone of analytical capabilities. This holistic experience across the data ecosystem allows me to approach problems with a comprehensive perspective.
            </p>
            <p>
              Today, I balance technical expertise with strategic thinking, helping organizations leverage their data assets to gain competitive advantages in an increasingly data-driven landscape.
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
