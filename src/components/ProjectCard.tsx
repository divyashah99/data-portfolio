
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

const ProjectCard = ({ title, description, image, category, technologies, link }: ProjectCardProps) => {
  return (
    <Card className="project-card overflow-hidden border border-border">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-sm">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-xl mt-2">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {link && (
        <CardFooter>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm font-medium text-accent hover:underline"
          >
            View Project <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
