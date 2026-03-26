import React from "react";

const PROJECTS = [
  {
    title: "Emotion Recognition Classifier",
    description: "Developed a CNN-based deep learning classifier using Python, Keras, and TensorFlow to differentiate human emotions from facial expressions while optimizing data processing to curb overfitting.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SCADA & Real-Time Monitoring",
    description: "Developed a responsive React.js dashboard and Qt/C++ applications for displaying live industrial SCADA data, integrated with PostgreSQL for historical trend analysis and alarm logging.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "End-to-End ML & NLP Pipelines",
    description: "Built supervised ML models for healthcare/finance and NLP pipelines for sentiment analysis utilizing LSTM and transformer-based architectures with advanced hyperparameter tuning.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Blockchain Management System",
    description: "Architected decentralized blockchain management systems demonstrating high resilience and secure data solutions scaling under challenging loads.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen w-full bg-[#121212] py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Selected Work
          </h2>
          <div className="h-1 w-20 bg-white/20 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project, i) => (
            <div 
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
              {/* Subtle bottom glow on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
