import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground font-mono font-bold text-lg">
                RE
              </div>
              <span className="font-semibold text-foreground">Reda El Hadfi</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              AI Architect & Full‑Stack Engineer building reliable, AI‑powered products for startups and teams worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/experience" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Experience
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/redaelhadfi" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com/in/redaelhadfi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.freelancer.com/u/elhadfi" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Freelancer</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Reda El Hadfi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js + shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
