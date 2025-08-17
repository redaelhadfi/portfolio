"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Layers, Rocket, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
	{
		id: "portfolio-v3",
		title: "Next-Gen Developer Portfolio",
		description:
			"A highly polished, animated, and interactive portfolio built with Next.js, Framer Motion, and Three.js to showcase software engineering skills.",
		status: "Live",
		tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
		icon: Rocket,
		color: "text-purple-400",
		bgColor: "bg-purple-400/10",
		borderColor: "border-purple-400/20",
		liveHref: "https://reda-el-hadfi.com",
		githubHref: "https://github.com/redaelhadfi/portfolio-v3",
	},
	{
		id: "saas-platform",
		title: "Enterprise SaaS Platform",
		description:
			"A full-stack SaaS application featuring multi-tenancy, role-based access control, and a subscription-based billing system with Stripe.",
		status: "In Development",
		tags: ["Node.js", "React", "PostgreSQL", "Docker", "AWS", "Stripe"],
		icon: Layers,
		color: "text-blue-400",
		bgColor: "bg-blue-400/10",
		borderColor: "border-blue-400/20",
		liveHref: "#",
		githubHref: "#",
	},
	{
		id: "code-analyzer",
		title: "AI Code Analyzer & Optimizer",
		description:
			"An intelligent tool that analyzes code repositories for quality, security, and performance, providing actionable insights and automated refactoring.",
		status: "Concept",
		tags: ["Python", "Machine Learning", "AST", "FastAPI", "React"],
		icon: Code,
		color: "text-green-400",
		bgColor: "bg-green-400/10",
		borderColor: "border-green-400/20",
		liveHref: "#",
		githubHref: "#",
	},
];

export function FeaturedProjects() {
	return (
		<section className="py-24 bg-background/50 backdrop-blur-sm">
			<div className="container mx-auto max-w-7xl px-4">
				{/* Section Header */}
				<motion.div
					className="text-center space-y-6 mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					<motion.h2
						className="text-4xl lg:text-5xl font-bold tracking-tight"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						My Featured{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent animate-gradient">
							Projects
						</span>
					</motion.h2>
					<motion.p
						className="text-lg text-muted-foreground max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
					>
						A selection of my work that demonstrates my skills in software engineering, from concept to deployment.
					</motion.p>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							className="h-full"
							initial={{ opacity: 0, y: 40, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
							viewport={{ once: true }}
						>
							<Card
								className={`
                h-full flex flex-col bg-card/50 border-2 ${project.borderColor} 
                hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 
                shadow-lg hover:shadow-primary/10
              `}
							>
								<CardHeader className="flex-shrink-0">
									<div className="flex items-center justify-between mb-4">
										<div className={`p-3 rounded-lg border ${project.borderColor} ${project.bgColor}`}>
											<project.icon className={`w-7 h-7 ${project.color}`} />
										</div>
										<Badge
											variant="secondary"
											className={`font-mono text-xs ${project.bgColor} ${project.borderColor} border`}
										>
											{project.status}
										</Badge>
									</div>
									<CardTitle className="text-xl font-bold">{project.title}</CardTitle>
									<CardDescription className="text-sm text-muted-foreground">
										{project.description}
									</CardDescription>
								</CardHeader>

								<CardContent className="flex-grow flex flex-col justify-end">
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<Badge key={tag} variant="outline" className="text-xs font-mono bg-card/80">
												{tag}
											</Badge>
										))}
									</div>
								</CardContent>

								<CardFooter className="pt-4 flex justify-between">
									<Button asChild variant="ghost" size="sm">
										<a href={project.liveHref} target="_blank" rel="noopener noreferrer">
											<ExternalLink className="w-4 h-4 mr-2" />
											Live Demo
										</a>
									</Button>
									<Button asChild variant="ghost" size="sm">
										<a href={project.githubHref} target="_blank" rel="noopener noreferrer">
											<Github className="w-4 h-4 mr-2" />
											GitHub
										</a>
									</Button>
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</div>

				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<Button asChild size="lg" className="font-semibold">
						<a
							href="https://github.com/redaelhadfi"
							target="_blank"
							rel="noopener noreferrer"
						>
							Explore More on GitHub <ArrowRight className="w-5 h-5 ml-2" />
						</a>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
