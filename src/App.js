import React, { useState , useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import dbScreenshot from './dbscreenshot.png';
import llScreenshot from './assets/locallensess.png'
import me from './assets/Me.jpg';
import reactLogo from './assets/logo.svg';
import swiftLogo from './assets/swift.svg';
import firebaseLogo from './assets/firebase.svg';
import postgresLogo from './assets/Postgre.png';
import nodeLogo from './assets/Node.png';
import javaLogo from './assets/Java.png';
import { Typewriter } from 'react-simple-typewriter';
import emailjs from 'emailjs-com';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const form = useRef();
  const [sent, setSent] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_byupm3q',       
      'template_3cg57el',      
      form.current,
      'yIIE0WDpzLQ54B99Q'        
    ).then(
      (result) => {
        console.log(result.text);
        setSent(true);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert('Oops, something went wrong. Try again!');
      }
    );
  };

  const navItems = ['home', 'about', 'projects', 'contact'];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900 border-b border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => { closeDrawer(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Prestin Lau
          </h1>
          <div className="hidden md:flex space-x-6">
            {navItems.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                offset={-60}
                className="cursor-pointer hover:text-teal-400 capitalize"
                onClick={closeDrawer}
              >
                {section === 'home' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
          <button className="md:hidden focus:outline-none" onClick={toggleDrawer}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {drawerOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: drawerOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 h-full w-64 bg-slate-800 shadow-lg z-50 p-6 flex flex-col"
        >
          <button onClick={toggleDrawer} aria-label="Close Menu" className="self-end mb-6 focus:outline-none">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navItems.map((section) => (
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

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <motion.img
          src={me}
          alt="Prestin Lau"
          className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-teal-400 shadow-xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">Prestin Lau</h1>
        <h2 className="text-2xl sm:text-3xl text-teal-400 font-medium mb-4">
          <Typewriter
            words={['Full-Stack Developer', 'React, Swift, Java', 'Building Apps that Matter']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>
        <p className="text-slate-300 text-center max-w-xl px-4">
          Crafting sleek interfaces and robust backend systems. Passionate about problem-solving, clean code, and turning ideas into real-world apps.
        </p>
        <Link to="projects" smooth duration={500} offset={-60} className="mt-6 inline-block bg-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition cursor-pointer">
          View My Work
        </Link>
      </section>

     {/* About Section */}
<section id="about" className="min-h-screen flex items-center justify-center border-t border-slate-700 px-4 py-20">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12"
  >
    {/* Left side: Text */}
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4 text-teal-400">About Me</h2>
      <p className="text-slate-300 text-lg leading-relaxed mb-6">
      Hi! I'm Prestin — a passionate developer focused on crafting intuitive full-stack mobile and web experiences. Whether it's Swift, React, or Java, I love turning creative ideas into clean, functional code. Outside of coding, I'm probably hanging out with my kids or cooking something awesome.
      </p>
    </div>

    {/* Right side: Tech Logos Grid */}
    <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
      {[
        { logo: reactLogo, name: 'React' },
        { logo: swiftLogo, name: 'Swift' },
        { logo: firebaseLogo, name: 'Firebase' },
        { logo: postgresLogo, name: 'PostgreSQL' },
        { logo: nodeLogo, name: 'Node.js' },
        { logo: javaLogo, name: 'Java' },
      ].map((tech, i) => (
        <motion.div
          key={tech.name}
          whileHover={{ scale: 1.2, boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center p-2 rounded-lg cursor-pointer"
        >
          <img src={tech.logo} alt={tech.name} className="h-14 w-14 object-contain" />
          {/* Tooltip */}
          <span className="absolute -bottom-6 text-xs bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

      {/* Projects */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center border-t border-slate-700 px-4 space-y-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <motion.div className="grid gap-8 sm:grid-cols-2 max-w-5xl w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ProjectCard
            title="LocalLens"
            description="A local event and experience finder with AI driven suggestions that allows users to discover and rate local businesses in real time."
            tech={['Next.js', 'Node.js', 'TailwindCSS', 'OpenAI API']}
            githubLink="https://github.com/Pr3stin/LocalLens"
            demoLink=""
            image={llScreenshot}
          />
          <ProjectCard
            title="CocktailAPI Java Spring Boot"
            description="A backend REST API built with Java Spring Boot to manage cocktail data, ratings, and user reviews."
            tech={['Java', 'Spring Boot', 'PostgreSQL']}
            githubLink="https://github.com/pr3stin/CocktailAPI"
            image={dbScreenshot}
          />
        </motion.div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 border-t border-slate-700 bg-slate-900 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-teal-400">Let’s Connect</h2>
          <p className="mb-8 text-slate-400">
            I'm open to new opportunities and collaborations. Feel free to send me a message!
          </p>

          {sent && (
            <motion.p
              className="text-green-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Your message was sent successfully!
            </motion.p>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 bg-slate-800 text-white rounded-lg outline-none"
              whileFocus={{ scale: 1.02, boxShadow: '0 0 8px rgba(16,185,129,0.5)' }}
              required
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 bg-slate-800 text-white rounded-lg outline-none"
              whileFocus={{ scale: 1.02, boxShadow: '0 0 8px rgba(16,185,129,0.5)' }}
              required
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 bg-slate-800 text-white rounded-lg outline-none"
              whileFocus={{ scale: 1.02, boxShadow: '0 0 8px rgba(16,185,129,0.5)' }}
              required
            ></motion.textarea>

            <motion.button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 transition px-6 py-3 rounded-lg font-semibold"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(16,185,129,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          <div className="mt-10 text-sm text-slate-500 space-y-2">
            <p>Email: <a href="mailto:lauprestin@gmail.com" className="text-teal-400">lauprestin@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/pr3stin" className="text-teal-400" target="_blank" rel="noopener noreferrer">github.com/Pr3stin</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/prestin-lau-42a47622a" className="text-teal-400" target="_blank" rel="noopener noreferrer">linkedin.com/in/prestin-lau</a></p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;