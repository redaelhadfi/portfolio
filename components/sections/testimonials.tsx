"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Verified, TrendingUp, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
	{
		id: 1,
		name: "Sarah Mitchell",
		role: "CTO, TechStartup Inc.",
		country: "🇺🇸 United States",
		avatar: "/avatars/sarah.jpg",
		rating: 5,
		quote: "Reda delivered exceptional AI-powered solutions that exceeded our expectations. His technical expertise and communication skills are outstanding.",
		project: "AI-Powered Career Toolkit",
		highlight: "Increased user engagement by 300%",
		verified: true,
		color: "text-purple-400",
		bgColor: "bg-purple-400/10",
		borderColor: "border-purple-400/20",
	},
	{
		id: 2,
		name: "Marcus Thompson",
		role: "Product Manager, BuildCorp",
		country: "🇨🇦 Canada",
		avatar: "/avatars/marcus.jpg",
		rating: 5,
		quote: "Professional, reliable, and technically brilliant. Reda transformed our complex requirements into a beautiful, functional dashboard.",
		project: "Usage Analytics Dashboard",
		highlight: "$50K+ revenue generated",
		verified: true,
		color: "text-blue-400",
		bgColor: "bg-blue-400/10",
		borderColor: "border-blue-400/20",
	},
	{
		id: 3,
		name: "Elena Rodriguez",
		role: "Engineering Lead, DataFlow Solutions",
		country: "🇪🇸 Spain",
		avatar: "/avatars/elena.jpg",
		rating: 5,
		quote: "Reda's ability to architect scalable systems is remarkable. He delivered our video processing pipeline on time and under budget.",
		project: "Video Analysis Platform",
		highlight: "10K+ hours processed",
		verified: true,
		color: "text-green-400",
		bgColor: "bg-green-400/10",
		borderColor: "border-green-400/20",
	},
];

const stats = [
	{ icon: Star, value: "5.0", label: "Average Rating", color: "text-yellow-400" },
	{ icon: Verified, value: "48+", label: "Client Reviews", color: "text-green-400" },
	{ icon: Clock, value: "100%", label: "On‑Time Delivery", color: "text-blue-400" },
	{ icon: DollarSign, value: "100%", label: "Budget Compliance", color: "text-purple-400" },
];

export function Testimonials() {
	return (
		<section className="py-20 lg:py-32 relative overflow-hidden">
			<div className="container mx-auto max-w-7xl px-4">
				{/* Section Header */}
				<motion.div
					className="text-center space-y-6 mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<div className="space-y-4">
						<Badge variant="outline" className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border-accent/20">
							Client Success Stories
						</Badge>
						<h2 className="text-3xl lg:text-4xl font-bold">
							What Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Say</span>
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							Real feedback from real clients who achieved remarkable results
						</p>
					</div>
				</motion.div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							initial={{ opacity: 0, y: 30, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								duration: 0.6,
								delay: index * 0.2,
								ease: [0.215, 0.61, 0.355, 1],
							}}
							viewport={{ once: true }}
							whileHover={{ y: -8, scale: 1.02 }}
							className="group"
						>
							<Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/40 hover:-translate-y-2 ${testimonial.bgColor} ${testimonial.borderColor}`}>
								<CardHeader className="flex flex-row items-start gap-4 p-6">
									<Avatar className="w-14 h-14 border-2 border-primary/50">
										<AvatarImage src={testimonial.avatar} alt={testimonial.name} />
										<AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
									</Avatar>
									<div className="flex-1">
										<div className="flex items-center justify-between">
											<h3 className="text-lg font-bold">{testimonial.name}</h3>
											<div className="flex items-center gap-1">
												{[...Array(testimonial.rating)].map((_, i) => (
													<Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
												))}
											</div>
										</div>
										<p className="text-sm text-muted-foreground">{testimonial.role}</p>
										<p className="text-xs text-muted-foreground mt-1">{testimonial.country}</p>
									</div>
								</CardHeader>
								<CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
									<div className="relative">
										<Quote className={`absolute -top-2 -left-2 w-8 h-8 ${testimonial.color} opacity-20`} />
										<p className="text-lg italic leading-relaxed z-10">
											"{testimonial.quote}"
										</p>
									</div>
									<div className="mt-6">
										<Badge variant="secondary" className="font-mono text-xs uppercase tracking-wider">
											{testimonial.project}
										</Badge>
										<div className="flex items-center gap-2 mt-3 text-sm font-semibold">
											<TrendingUp className={`w-5 h-5 ${testimonial.color}`} />
											<span>{testimonial.highlight}</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>

				{/* Stats Bar */}
				<motion.div
					className="bg-card/50 border rounded-xl p-8"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						{stats.map((stat) => (
							<div key={stat.label} className="flex flex-col items-center gap-2">
								<stat.icon className={`w-10 h-10 ${stat.color}`} />
								<p className="text-3xl font-bold">{stat.value}</p>
								<p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
							</div>
						))}
					</div>
				</motion.div>
			</div>

			{/* Background Elements */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				{/* Gradient Orbs */}
				<div className="absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />
				<div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />

				{/* Dot Pattern */}
				<div
					className="absolute inset-0 opacity-[0.02]"
					style={{
						backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)',
						backgroundSize: '32px 32px',
					}}
				/>
			</div>
		</section>
	);
}
