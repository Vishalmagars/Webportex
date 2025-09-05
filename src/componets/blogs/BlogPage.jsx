import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const BlogDetail = () => {
  const blog = {
    title: "How Indian Exporters Can Attract Global Buyers",
    author: "Vishal Magar",
    date: "September 4, 2025",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format",
    content: [
      {
        type: "p",
        text: "Expanding into global markets is no longer a luxury — it’s a necessity. But for Indian exporters, competing with global players requires more than just quality products; it demands a credible digital presence.",
      },
      {
        type: "h2",
        text: "Why Digital Trust Matters",
      },
      {
        type: "p",
        text: "International buyers judge credibility within seconds of landing on your website. A strong design, clear messaging, and mobile optimization aren’t optional; they’re deal-makers.",
      },
      {
        type: "quote",
        text: "‘Perception is reality in export trade. If your site looks outdated, buyers assume your business is too.’",
      },
      {
        type: "h2",
        text: "3 Steps to Win Buyers",
      },
      {
        type: "list",
        items: [
          "Showcase certifications & compliance details up front.",
          "Provide high-quality product photos with detailed specs.",
          "Add multilingual and multi-currency support to reduce friction.",
        ],
      },
      {
        type: "p",
        text: "By implementing these strategies, exporters can build trust faster, shorten negotiation cycles, and increase conversions.",
      },
    ],
  };

  const relatedPosts = [
    {
      title: "Top 5 Website Features Every Exporter Needs",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format",
    },
    {
      title: "SEO Secrets for Exporters",
      image:
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1200&auto=format",
    },
    {
      title: "The Future of Export Websites",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format",
    },
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative">
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[400px] md:h-[500px] object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-4">
              {blog.title}
            </h1>
            <p className="text-gray-200 text-sm uppercase tracking-widest">
              By {blog.author} — {blog.date}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-0 py-16 text-gray-800">
        {blog.content.map((block, idx) => {
          if (block.type === "p") {
            return (
              <motion.p
                key={idx}
                className="mb-6 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {block.text}
              </motion.p>
            );
          }
          if (block.type === "h2") {
            return (
              <motion.h2
                key={idx}
                className="text-2xl font-semibold mt-12 mb-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {block.text}
              </motion.h2>
            );
          }
          if (block.type === "quote") {
            return (
              <motion.blockquote
                key={idx}
                className="border-l-4 border-black pl-4 italic text-lg text-gray-600 my-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {block.text}
              </motion.blockquote>
            );
          }
          if (block.type === "list") {
            return (
              <motion.ul
                key={idx}
                className="list-disc pl-6 space-y-2 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {block.items.map((item, i) => (
                  <li key={i} className="text-lg leading-relaxed">
                    {item}
                  </li>
                ))}
              </motion.ul>
            );
          }
          return null;
        })}

        {/* Share Buttons */}
        <div className="flex gap-4 mt-12">
          {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-black hover:text-white transition"
              whileHover={{ scale: 1.1 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-gray-50 py-16 px-6 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-light uppercase mb-10">
            Related Posts
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {relatedPosts.map((post, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-black mb-2">
                    {post.title}
                  </h4>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-sm uppercase tracking-wide text-black font-medium"
                  >
                    Read More →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
