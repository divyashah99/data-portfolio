
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

const SectionHeader = ({ title, subtitle, align = "center" }: SectionHeaderProps) => {
  return (
    <div className={`space-y-2 mb-12 text-${align}`}>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
