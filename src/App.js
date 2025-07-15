import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import dbScreenshot from './dbscreenshot.png';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900 border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => { closeDrawer(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Prestin Lau
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-60} // adjust for fixed navbar height
                className="cursor-pointer hover:text-teal-400 capitalize"
                onClick={closeDrawer}
              >
                {section === 'home' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleDrawer}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {drawerOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Side Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: drawerOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-64 bg-slate-800 shadow-lg z-50 p-6 flex flex-col"
        >
          <button
            onClick={toggleDrawer}
            aria-label="Close Menu"
            className="self-end mb-6 focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {['home', 'about', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-60}
              className="mb-6 text-xl cursor-pointer hover:text-teal-400 capitalize"
              onClick={closeDrawer}
            >
              {section === 'home' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center space-y-4 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Prestin Lau
          </h1>
          <h2 className="text-xl sm:text-2xl text-teal-400 font-medium">
            iOS & Full-Stack Developer
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Building sleek user interfaces and robust backend systems. Passionate about problem-solving, clean code, and turning ideas into real-world apps.
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center border-t border-slate-700 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-teal-400">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Hi! I'm Prestin — a passionate developer focused on crafting intuitive iOS and full-stack experiences. Whether it's Swift, React, or Node.js, I love turning creative ideas into clean, functional code. Outside of coding, I'm probably hanging out with my kids or cooking something awesome.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center border-t border-slate-700 px-4 space-y-8 py-16">
  <h2 className="text-3xl font-bold mb-8">Projects</h2>

  <div className="grid gap-8 sm:grid-cols-2 max-w-5xl w-full">
    <ProjectCard
      title="Drink Rating iOS App"
      description="An iOS app allowing users to rate cocktails at bars and restaurants, with photo uploads and location-based browsing."
      tech={['Swift', 'SwiftUI', 'Firebase']}
      githubLink="https://github.com/pr3stin/DrinkRatingApp" // replace with your repo link
      demoLink="" // Add a demo link if available
    />

    <ProjectCard
      title="CocktailAPI Java Spring Boot"
  description="A backend REST API built with Java Spring Boot to manage cocktail data, ratings, and user reviews."
  tech={['Java', 'Spring Boot', 'PostgreSQL']}
  githubLink="https://github.com/pr3stin/CocktailAPI"
  image={dbScreenshot}
    />
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center border-t border-slate-700 px-4">
        <h2 className="text-3xl font-bold">Contact</h2>
      </section>
    </div>
  );
}

export default App;