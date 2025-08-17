"use client";

import { Shield, Star, Award, GraduationCap, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const trustElements = [
	{
		name: "Verified Professional",
		icon: Shield,
		description:
			"Committed to the highest standards of code quality and project delivery.",
		color: "text-blue-400",
		bgColor: "bg-blue-400/10",
		borderColor: "border-blue-400/20",
	},
	{
		name: "Top-Rated Developer",
		icon: Star,
		description:
			"Consistently delivering 5-star results and exceeding client expectations.",
		color: "text-yellow-400",
		bgColor: "bg-yellow-400/10",
		borderColor: "border-yellow-400/20",
	},
	{
		name: "Award-Winning Solutions",
		icon: Award,
		description:
			"Recognized for building high-performance, innovative web applications.",
		color: "text-green-400",
		bgColor: "bg-green-400/10",
		borderColor: "border-green-400/20",
	},
	{
		name: "Proven Project Success",
		icon: TrendingUp,
		description: "A track record of successfully launching over 50+ projects.",
		color: "text-purple-400",
		bgColor: "bg-purple-400/10",
		borderColor: "border-purple-400/20",
	},
	{
		name: "Global Client Base",
		icon: Users,
		description: "Trusted by startups and enterprises across the globe.",
		color: "text-cyan-400",
		bgColor: "bg-cyan-400/10",
		borderColor: "border-cyan-400/20",
	},
	{
		name: "INPT Certified",
		icon: GraduationCap,
		description:
			"Formally educated in computer science and software engineering.",
		color: "text-accent",
		bgColor: "bg-accent/10",
		borderColor: "border-accent/20",
	},
];

export function TrustStrip() {
	return (
		<section className="py-24 bg-background/50 backdrop-blur-sm">
			<div className="container mx-auto max-w-7xl px-4">
				<motion.div
					className="text-center space-y-12"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ once: true }}
				>
					{/* Section Header */}
					<div className="space-y-4">
						<motion.p
							className="font-mono text-sm uppercase tracking-widest text-accent"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							Why Hire Me?
						</motion.p>
						<motion.h2
							className="text-4xl font-bold tracking-tight text-foreground"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
						>
							A Foundation of Trust and Excellence
						</motion.h2>
						<motion.p
							className="text-lg text-muted-foreground max-w-3xl mx-auto"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
						>
							I am committed to delivering not just code, but value. My work is
							built on a foundation of reliability, quality, and a proven ability
							to solve complex problems.
						</motion.p>
					</div>

					{/* Trust Badges Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{trustElements.map((element, index) => (
							<motion.div
								key={element.name}
								className="relative group p-6 rounded-xl bg-card/40 border border-primary/10 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 shadow-lg hover:shadow-primary/10"
								initial={{ opacity: 0, scale: 0.9, y: 30 }}
								whileInView={{ opacity: 1, scale: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: 0.3 + index * 0.1,
									ease: "easeOut",
								}}
								viewport={{ once: true }}
								whileHover={{
									y: -5,
									transition: { type: "spring", stiffness: 300 },
								}}
							>
								<div className="flex items-start gap-4">
									<div
										className={`p-3 rounded-lg ${element.bgColor} border ${element.borderColor}`}
									>
										<element.icon
											className={`w-6 h-6 ${element.color}`}
										/>
									</div>
									<div className="text-left">
										<h3 className="text-lg font-semibold text-foreground">
											{element.name}
										</h3>
										<p className="text-sm text-muted-foreground mt-1">
											{element.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
