"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, LucideIcon, Lock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  liveHref: string;
  githubHref: string;
  image: string; // New field for project image
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="h-full group"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <Card className={`h-full flex flex-col bg-card/50 border-2 ${project.borderColor} hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}>
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Status Badge Overlay */}
          <div className="absolute top-4 right-4">
            <Badge
              variant="secondary"
              className={`font-mono text-xs ${project.bgColor} ${project.borderColor} border backdrop-blur-sm`}
            >
              {project.status}
            </Badge>
          </div>

          {/* Icon Overlay */}
          <div className={`absolute bottom-4 left-4 p-3 rounded-xl border ${project.borderColor} ${project.bgColor} backdrop-blur-sm`}>
            <project.icon className={`w-6 h-6 ${project.color}`} />
          </div>
        </div>

        {/* Content */}
        <CardHeader className="flex-shrink-0 pb-4">
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        {/* Tags */}
        <CardContent className="flex-grow flex flex-col justify-end pb-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="text-xs font-mono bg-background/80 hover:bg-primary/10 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        {/* Action Buttons */}
        <CardFooter className="pt-0 flex gap-2">
          {/* Live Demo Button */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            disabled={project.liveHref === "#"}
          >
            {project.liveHref === "#" ? (
              <span className="flex items-center pointer-events-none select-none">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </span>
            ) : (
              <a href={project.liveHref} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            )}
          </Button>
          {/* GitHub Button or Private Badge */}
          {project.githubHref === "#" ? (
            <div className="flex-1 flex items-center justify-center rounded-md border border-dashed border-border/60 text-xs text-muted-foreground gap-2 py-1.5 bg-background/40 select-none">
              <Lock className="w-4 h-4" />
              <span className="uppercase tracking-wide">Private</span>
            </div>
          ) : (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 hover:bg-primary/10"
            >
              <a href={project.githubHref} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
