
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-secondary/30">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-accent mb-6">404</h1>
          <p className="text-2xl font-medium mb-4">Oops! Page not found</p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
