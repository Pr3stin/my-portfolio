import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tech, githubLink, demoLink, image, index = 0 }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(16, 185, 129, 0.4)' }}
    transition={{ delay: index * 0.15, duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-slate-800 rounded-xl shadow-lg p-6 max-w-md mx-auto
               border border-slate-700"
  >
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="mb-4 w-full h-48 object-cover rounded-lg"
        />
      )}

      <h3 className="text-xl font-semibold mb-3 text-teal-400">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>

      {tech && (
        <div className="mb-4 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm bg-slate-700 text-white px-2 py-1 rounded-full border border-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex space-x-4 mt-2">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline font-medium"
          >
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline font-medium"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
