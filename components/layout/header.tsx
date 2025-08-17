"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Menu, Download, ExternalLink, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/redaelhadfi", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/reda-elhadfi", icon: Linkedin, label: "LinkedIn" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  // Header background opacity based on scroll
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "border-b border-border/60 bg-background/95 backdrop-blur-md shadow-lg" 
          : "border-b border-border/20 bg-background/80 backdrop-blur-sm"
      }`}
      style={{ opacity: headerOpacity }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <div className="container-max flex h-20 items-center justify-between">
        {/* Enhanced Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-primary text-accent-foreground font-mono font-bold text-lg shadow-lg transition-all duration-300 group-hover:shadow-xl">
                RE
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                Reda El Hadfi
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                Software Engineer
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <NavigationMenuLink asChild>
                    <Link 
                      href={item.href}
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50
                        ${isActive(item.href) 
                          ? 'bg-primary/10 text-primary' 
                          : 'hover:bg-accent/50 hover:text-accent-foreground'
                        }`
                      }
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </motion.div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right-side Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
          >
            <Button variant="outline" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col h-full">
              {/* Mobile Nav Header */}
              <div className="p-6 border-b border-border/20">
                <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-primary text-accent-foreground font-mono font-bold text-lg">
                    RE
                  </div>
                  <div>
                    <span className="font-bold text-foreground">Reda El Hadfi</span>
                    <span className="block text-xs text-muted-foreground font-mono">
                      Software Engineer
                    </span>
                  </div>
                </Link>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex-1 p-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center p-3 rounded-lg text-lg font-medium transition-colors
                      ${isActive(item.href) 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-accent/50'
                      }`
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Nav Footer */}
              <div className="p-6 border-t border-border/20 space-y-4">
                <Button variant="outline" className="w-full" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.href}
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <link.icon className="h-6 w-6" />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
