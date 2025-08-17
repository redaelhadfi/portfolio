"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Star, CheckCircle, Code2, Zap } from "lucide-react";
import { motion } from "framer-motion";

const metricsData = [
	{
		icon: Star,
		label: "Client Satisfaction",
		subtitle: "5-Star Reviews",
		color: "text-yellow-400",
		bgColor: "bg-yellow-400/10",
		borderColor: "border-yellow-400/20",
	},
	{
		icon: CheckCircle,
		label: "On-Time Delivery",
		subtitle: "100% Project Rate",
		color: "text-green-400",
		bgColor: "bg-green-400/10",
		borderColor: "border-green-400/20",
	},
	{
		icon: Code2,
		label: "End-to-End Solutions",
		subtitle: "Full-Stack Expertise",
		color: "text-blue-400",
		bgColor: "bg-blue-400/10",
		borderColor: "border-blue-400/20",
	},
	{
		icon: Zap,
		label: "Optimized Performance",
		subtitle: "Scalable & Fast",
		color: "text-purple-400",
		bgColor: "bg-purple-400/10",
		borderColor: "border-purple-400/20",
	},
];

const techStack = [
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Python",
	"PostgreSQL",
	"Docker",
	"AWS",
];

export function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
			{/* Enhanced Background Pattern */}
			<div className="absolute inset-0 -z-10">
				<div
					className="absolute inset-0 opacity-[0.03]"
					style={{
						backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)
            `,
						backgroundSize: "50px 50px",
					}}
				/>
			</div>

			<div className="container-max">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					{/* Left Column - Enhanced Content */}
					<motion.div
						className="lg:col-span-7 space-y-10"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						{/* Enhanced Status Badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
							className="inline-block"
						>
							<Badge
								variant="secondary"
								className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-accent/10 to-primary/10 text-primary border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm hover:scale-105"
							>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
									<span>Available for New Projects</span>
									<Zap className="w-4 h-4 text-primary animate-pulse" />
								</div>
							</Badge>
						</motion.div>

						{/* Enhanced Main Headline */}
						<div className="space-y-8">
							<motion.h1
								className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
							>
								<span className="block">Hi, I&apos;m Reda.</span>
								<span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
									I Build Modern Web Experiences.
								</span>
							</motion.h1>
							<motion.p
								className="text-lg md:text-xl text-muted-foreground max-w-2xl"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
							>
								As a dedicated Software Engineer, I specialize in crafting high-performance, scalable, and user-centric applications. Let&apos;s turn your ideas into reality.
							</motion.p>
						</div>

						{/* Enhanced Call-to-Action Buttons */}
						<motion.div
							className="flex flex-col sm:flex-row gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
						>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button size="lg" asChild className="w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/40">
									<a href="#contact">
										Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
									</a>
								</Button>
							</motion.div>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
									<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
										Download Resume <Download className="ml-2 h-5 w-5" />
									</a>
								</Button>
							</motion.div>
						</motion.div>
					</motion.div>

					{/* Right Column - Enhanced Metrics & Tech Stack */}
					<motion.div
						className="lg:col-span-5 space-y-8"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					>
						{/* Metrics Grid */}
						<div className="grid grid-cols-2 gap-4">
							{metricsData.map((metric, index) => (
								<motion.div
									key={metric.label}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
								>
									<Card className={`p-4 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${metric.bgColor} ${metric.borderColor}`}>
										<metric.icon className={`w-8 h-8 mb-2 ${metric.color}`} />
										<p className="font-semibold text-sm">{metric.label}</p>
										<p className="text-xs text-muted-foreground">{metric.subtitle}</p>
									</Card>
								</motion.div>
							))}
						</div>

						{/* Tech Stack */}
						<div>
							<h3 className="text-center text-sm font-semibold text-muted-foreground mb-4">
								MY GO-TO TECH STACK
							</h3>
							<motion.div
								className="flex flex-wrap justify-center gap-3"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.8 }}
							>
								{techStack.map((tech, index) => (
									<motion.div
										key={tech}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
									>
										<Badge variant="secondary" className="px-3 py-1 text-xs font-mono">
											{tech}
										</Badge>
									</motion.div>
								))}
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
