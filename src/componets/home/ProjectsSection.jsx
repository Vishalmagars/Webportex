import React from 'react';

const categories = [
  'Business Advice',
  'Startup Business',
  'Financial Advice',
  'Risk Management',
];

const projects = [
  {
    title: 'Why your client needs a responsive website',
    image: 'https://images.unsplash.com/photo-1588776814546-ec7e140d1b3c?auto=format&fit=crop&w=800&q=80',
    date: 'April 30, 2023',
  },
  {
    title: 'Why your client needs a responsive website',
    image: 'https://images.unsplash.com/photo-1600195077073-3cc9c5edbc8d?auto=format&fit=crop&w=800&q=80',
    date: 'April 30, 2020',
  },
  {
    title: 'Why your client needs a responsive website',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    date: 'April 30, 2023',
  },
  {
    title: 'Why your client needs a responsive website',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    date: 'April 30, 2020',
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <p className="text-sm text-red-500 font-medium">Project & Case Studies</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
          Let’s Looks <br /> Our Global Projects
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 mb-10">
          <button className="bg-yellow-400 text-black font-medium py-1.5 px-4 rounded-full shadow">
            Discover All
          </button>
          {categories.map((cat, idx) => (
            <button key={idx} className="text-gray-600 hover:text-black px-4 py-1.5 rounded-full transition">
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="text-left">
              <img src={project.image} alt="Project" className="w-full h-64 object-cover rounded-md mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
              <div className="text-sm text-gray-500 flex justify-between items-center">
                <span>{project.date}</span>
                <a href="#" className="text-black font-medium hover:underline">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            All Recent Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
