"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Server, Cloud, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Services updated to highlight your expertise in LLMs, RAG, and NLP.
const services = [
    {
        icon: BrainCircuit,
        title: "AI & Language Models",
        description:
            "Building advanced conversational AI and intelligent systems. I specialize in using Large Language Models (LLMs), RAG, and fine-tuning to create powerful, context-aware applications.",
        features: [
            "LLM Fine-Tuning",
            "Retrieval-Augmented Generation (RAG)",
            "Natural Language Processing (NLP)",
            "OpenAI API Integration",
        ],
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
    },
    {
        icon: Server,
        title: "Backend Development",
        description:
            "Building robust, secure, and high-performance server-side applications. I specialize in Python, Django, and Java to create efficient REST APIs and manage complex, real-time data systems.",
        features: [
            "Python, Django & Flask",
            "Java & Kafka for Real-Time Data",
            "REST API Architecture",
            "PostgreSQL, MySQL & MongoDB",
        ],
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
    },
    {
        icon: Cloud,
        title: "Cloud & DevOps",
        description:
            "Designing and deploying scalable, reliable infrastructure on AWS. I use Docker and CI/CD pipelines to automate workflows, ensuring high availability and efficient deployment cycles.",
        features: [
            "AWS (EC2, S3, Rekognition, SNS)",
            "Docker Containerization",
            "CI/CD Pipeline Automation",
            "Scalable System Architecture",
        ],
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
    },
];

export function WhatIDo() {
    return (
        <section className="py-24 bg-background/70 backdrop-blur-lg">
            <div className="container mx-auto max-w-7xl px-4">
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
                        My Engineering{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                            Specialties
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        I offer end-to-end software development services, focusing on key
                        areas to bring your vision to life with quality, performance, and
                        precision.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="h-full"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2 + index * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className={`
                h-full flex flex-col bg-card/50 border-2 ${service.borderColor} 
                hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 
                shadow-lg hover:shadow-primary/10
              `}
                            >
                                <CardHeader className="flex-shrink-0">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className={`p-3 rounded-lg border ${service.borderColor} ${service.bgColor}`}
                                        >
                                            <service.icon
                                                className={`w-7 h-7 ${service.color}`}
                                            />
                                        </div>
                                        <CardTitle
                                            className={`text-2xl font-bold ${service.color}`}
                                        >
                                            {service.title}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="text-base text-muted-foreground">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex-grow flex flex-col justify-end pt-4">
                                    <div className="space-y-3">
                                        {service.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3"
                                            >
                                                <CheckCircle
                                                    className={`w-5 h-5 ${service.color}`}
                                                />
                                                <span className="text-sm text-foreground">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}