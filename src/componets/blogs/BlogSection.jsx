import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "How Indian Exporters Can Attract Global Buyers",
    description:
      "Practical strategies to make your business stand out internationally and build trust with overseas clients.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format",
  },
  {
    title: "Top 5 Website Features Every Exporter Needs",
    description:
      "From SEO to multilingual support, these features ensure your site converts visitors into inquiries.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format",
  },
  {
    title: "Why Your Export Business Needs Digital Branding",
    description:
      "A professional online presence creates credibility and helps you compete in global trade markets.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format",
  },
  {
    title: "The Future of Export Websites",
    description:
      "What the next generation of exporters must know about digital-first trade in 2025 and beyond.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format",
  },
];

const BlogSection = ({ id }) => {
  return (
    <section id={id} className="bg-white py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            From Our Blog
          </p>
          <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight text-black">
            Insights for Exporters
          </h2>
          <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Stay ahead with tips, guides, and trends designed to help Indian exporters succeed in
            international markets.
          </p>
        </motion.div>

        {/* Unique Layout Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Large Hero Blog */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl group"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed max-w-lg">
                  {blogPosts[0].description}
                </p>
                <motion.button
                  whileHover={{ x: 6 }}
                  className="mt-4 text-white font-medium text-sm uppercase tracking-wide"
                >
                  Read More →
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Smaller Stacked Blogs */}
          <div className="grid gap-10">
            {blogPosts.slice(1).map((post, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6 bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-40 h-40 object-cover"
                />
                <div className="py-4 pr-4 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-black mb-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-3 text-black font-medium text-xs uppercase tracking-wide"
                  >
                    Read More →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
