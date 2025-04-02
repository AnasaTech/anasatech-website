'use client'
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="relative lg:w-2/3 aspect-video lg:aspect-auto">
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 66vw"
                    priority
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="relative lg:w-1/3 p-8 bg-white">
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visit Project Button */}
                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 w-full justify-center bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      <span>Visit Project</span>
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'backend';
  technologies: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Next.js + Payloadcms Webapp",
    description: "A full-stack website that hosts AI driven chat to help survivors of Domestic Violence",
    image: "/projects/sophia.png",
    category: "web",
    technologies: ["Next.js", "Node.js", "Payloadcms", "Postgresql", "Tailwindcss", "Azure", "Github Actions"],
    link: "https://sophia.chat"
  },
  {
    id: 2,
    title: "Health & Fitness App",
    description: "Cross-platform mobile app for workout tracking and meal planning",
    image: "/projects/mobile apps.png",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Postgresql", "Figma", "AWS", "Nodejs", "Github Actions"],
    link: "#"
  },
  {
    id: 3,
    title: "Backend",
    description: "Scalable microservices architecture for a reading digital books",
    image: "/projects/worldreader.png",
    category: "backend",
    technologies: ["AWS", "Node.js", "Postgresql", "Redis", "Sockets", "Cloudformation"],
    link: "https://www.worldreader.org"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile' | 'backend'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };


  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <span className="text-[#0074b7] font-medium text-sm tracking-wider uppercase mb-4 block">
            Some of our projects
        </span>
          <h2 className="text-4xl font-bold text-black mb-4">Our Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'web', 'mobile', 'backend'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as typeof activeCategory)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl text-black font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button 
                    className="w-full group relative px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 ease-out
                        bg-white border border-gray-200 hover:border-transparent hover:scale-[1.02]"
                    onClick={() => handleProjectClick(project)}
                >
                    <span className="relative z-10 text-gray-800 font-medium group-hover:text-white transition-colors duration-300">
                        View Project
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#003b73] to-[#60a3d9] 
                        transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
                    </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            View More Projects
          </button>
        </div> */}
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
