
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  const activeClassName = "text-accent font-medium";
  const inactiveClassName = "text-foreground hover:text-accent transition-colors";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className="font-bold text-xl">
            Portfolio<span className="text-accent">.</span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
              end
            >
              {item.name}
            </NavLink>
          ))}
          <Button className="bg-accent hover:bg-accent/90">
            <a href="#contact">Contact</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background z-40 animate-fade-in">
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-xl ${isActive ? activeClassName : inactiveClassName}`
                  }
                  onClick={toggleMenu}
                  end
                >
                  {item.name}
                </NavLink>
              ))}
              <Button className="bg-accent hover:bg-accent/90">
                <a href="#contact" onClick={toggleMenu}>Contact</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
