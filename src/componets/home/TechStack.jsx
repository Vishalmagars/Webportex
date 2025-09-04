import React from 'react';
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si';

const techStack = [
  {
    name: 'Java',
    icon: <FaJava className="text-orange-600 text-5xl" />,
    desc: 'Secure backend development with Spring Boot & enterprise-grade apps.',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="text-red-500 text-5xl" />,
    desc: 'Clean, semantic markup for accessible and reliable websites.',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
    desc: 'Responsive layouts and pixel-perfect designs.',
  },
  {
    name: 'JavaScript',
    icon: <FaJs className="text-yellow-500 text-5xl" />,
    desc: 'Interactive and dynamic client-side functionality.',
  },
  {
    name: 'React',
    icon: <FaReact className="text-cyan-500 text-5xl" />,
    desc: 'Modern, component-based UI development for speed & scale.',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
    desc: 'Utility-first styling framework for rapid custom designs.',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className="text-green-600 text-5xl" />,
    desc: 'Scalable NoSQL database for modern apps.',
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-blue-700 text-5xl" />,
    desc: 'Reliable relational database for structured data.',
  },
];

const TechStack = ({ id }) => {
  return (
    <section
      id={id}
      className="bg-white py-20 px-6 md:px-16 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Technology We Use
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-black">
            Our Tech Stack
          </h2>
          <p className="text-gray-700 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            We combine proven technologies with modern frameworks to deliver secure, scalable,
            and future-ready solutions for exporters and manufacturers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 transform transition duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
