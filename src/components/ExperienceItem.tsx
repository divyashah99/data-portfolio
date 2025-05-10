
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  details?: string[];
}

const ExperienceItem = ({ title, company, period, description, skills, details }: ExperienceItemProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="font-medium text-foreground">
              {company}
            </CardDescription>
            <CardDescription className="text-sm text-muted-foreground">
              {period}
            </CardDescription>
          </div>
          <div className="rounded-full bg-secondary p-2">
            <Briefcase className="h-5 w-5 text-accent" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{description}</p>
        
        {details && details.length > 0 && (
          <ul className="space-y-2 list-disc pl-5">
            {details.map((detail, index) => (
              <li key={index} className="text-base">{detail}</li>
            ))}
          </ul>
        )}
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceItem;
