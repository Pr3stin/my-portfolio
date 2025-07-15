import React from 'react';

export default function ProjectCard({ title, description, tech, githubLink, demoLink, image }) {
  return (
    <div className="bg-slate-800 rounded-lg shadow-md p-6 max-w-md mx-auto 
                transform transition duration-300 hover:scale-105 
                border border-slate-700 hover:border-teal-400">
      {image && (
        <img
          src={image}
          alt={`${title} screenshot`}
          className="mb-4 w-full h-48 object-contain rounded"
        />
      )}
      <h3 className="text-xl font-semibold mb-2 text-teal-400">{title}</h3>
      <p className="text-slate-300 mb-4">{description}</p>
      {tech && (
        <div className="mb-4">
          <span className="text-sm font-medium text-slate-400">Technologies: </span>
          <span className="text-sm text-slate-300">{tech.join(', ')}</span>
        </div>
      )}
      <div className="flex space-x-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
