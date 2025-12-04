// components/sections/TechStack.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaReact, 
  FaAws, 
  FaDocker, 
  FaNodeJs, 
  FaLaravel,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiPostgresql, 
  SiRedis, 
  SiTailwindcss,
  SiFlutter,
  SiFirebase, 
  SiMysql, 
  SiMongodb, 
  SiCpanel,
  SiPython,
  SiFastapi
} from 'react-icons/si';

const technologies = [
  {
    name: 'React & Nextjs',
    icon: FaReact,
    color: 'text-[#61DAFB]',
    bgColor: 'bg-[#61DAFB]/10',
    description: 'Interactive user interfaces with modern React'
  },
  
  {
    name: 'React Native',
    icon: FaReact,
    color: 'text-[#61DAFB]',
    bgColor: 'bg-[#61DAFB]/10',
    description: 'Cross-platform mobile applications'
  },
  {
    name: 'Flutter',
    icon: SiFlutter,
    color: 'text-[#02569B]',
    bgColor: 'bg-[#02569B]/10',
    description: 'Beautiful native mobile apps'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-[#3178C6]',
    bgColor: 'bg-[#3178C6]/10',
    description: 'Type-safe code for scalable applications'
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: 'text-[#339933]',
    bgColor: 'bg-[#339933]/10',
    description: 'Server-side JavaScript runtime'
  },
  {
    name: 'Python',
    icon: SiPython,
    color: 'text-[#3776AB]',
    bgColor: 'bg-[#3776AB]/10',
    description: 'Versatile programming for web and data'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: 'text-[#336791]',
    bgColor: 'bg-[#336791]/10',
    description: 'Advanced relational database'
  },
  {
    name: 'Redis',
    icon: SiRedis,
    color: 'text-[#DC382D]',
    bgColor: 'bg-[#DC382D]/10',
    description: 'In-memory data structure store'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: 'text-[#47A248]',
    bgColor: 'bg-[#47A248]/10',
    description: 'NoSQL database for modern applications'
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    color: 'text-[#4479A1]',
    bgColor: 'bg-[#4479A1]/10',
    description: 'Open-source relational database'
  },
  {
    name: 'Docker',
    icon: FaDocker,
    color: 'text-[#2496ED]',
    bgColor: 'bg-[#2496ED]/10',
    description: 'Containerization and deployment'
  },
  {
    name: 'Laravel',
    icon: FaLaravel,
    color: 'text-[#FF2D20]',
    bgColor: 'bg-[#FF2D20]/10',
    description: 'PHP framework for web applications'
  },
  {
    name: 'AWS',
    icon: FaAws,
    color: 'text-[#FF9900]',
    bgColor: 'bg-[#FF9900]/10',
    description: 'Cloud infrastructure and serverless'
  },
  {
    name: 'Azure',
    icon: FaMicrosoft,
    color: 'text-[#0078D4]',
    bgColor: 'bg-[#0078D4]/10',
    description: 'Microsoft cloud computing platform'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'text-[#06B6D4]',
    bgColor: 'bg-[#06B6D4]/10',
    description: 'Utility-first CSS framework'
  },
  
  {
    name: 'cPanel',
    icon: SiCpanel,
    color: 'text-[#FF6C2C]',
    bgColor: 'bg-[#FF6C2C]/10',
    description: 'Web hosting control panel'
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    color: 'text-[#FFCA28]',
    bgColor: 'bg-[#FFCA28]/10',
    description: 'Platform for web and mobile apps'
  },
  {
    name: 'FastAPI',
    icon: SiFastapi,
    color: 'text-[#009485]',
    bgColor: 'bg-[#009485]/10',
    description: 'Modern, fast web framework for APIs'
  },
];

type Categories = {
    frontend: string[];
    backend: string[];
    mobile: string[];
    database: string[];
    cloud: string[];
    devops: string[];
};

const categories: Categories = {
    frontend: ['React', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Laravel', 'Python', 'FastAPI'],
    mobile: ['React Native', 'Flutter'],
    database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    cloud: ['AWS', 'Azure', 'Firebase'],
    devops: ['Docker', 'cPanel']
};


export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState<'all' | keyof Categories>('all');

    const filteredTechnologies = activeCategory === 'all' 
  ? technologies 
  : technologies.filter(tech => categories[activeCategory]?.includes(tech.name));

  const CategoryFilter = () => (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
        onClick={() => setActiveCategory('all')}
        className={`px-6 py-3 rounded-full text-base font-medium transition-colors min-h-[44px]
          ${activeCategory === 'all' 
            ? 'bg-primary-600 text-white' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        All
      </button>
      {Object.keys(categories).map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category as keyof Categories)}
          className={`px-6 py-3 rounded-full text-base font-medium transition-colors capitalize min-h-[44px]
            ${activeCategory === category 
              ? 'bg-primary-600 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );

  return (
    <section id="techstack" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-72 h-72 bg-[#bfd7ed]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#60a3d9]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#0074b7] font-medium text-sm tracking-wider uppercase mb-4 block">
              Built With
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Powered By Modern Technology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              The technologies behind our products
            </p>
          </motion.div>

          {/* Technologies Grid */}
          <CategoryFilter />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-xl ${tech.bgColor} group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                    <tech.icon className={`w-8 h-8 ${tech.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {tech.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#bfd7ed]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100 -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
