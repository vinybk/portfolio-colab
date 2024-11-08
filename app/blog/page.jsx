"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { DEV_TO_CONFIG } from "@/config/constants";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(POSTS_PER_PAGE);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${DEV_TO_CONFIG.API_URL}/articles?username=${DEV_TO_CONFIG.USERNAME}`);
        const data = await res.json();
        
        const sortedBlogs = data.sort((a, b) => 
          new Date(b.published_at) - new Date(a.published_at)
        );
        
        setBlogs(sortedBlogs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const loadMore = () => {
    setDisplayCount(prev => prev + POSTS_PER_PAGE);
  };

  const visibleBlogs = blogs.slice(0, displayCount);
  const hasMore = blogs.length > displayCount;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-[84vh] py-12 xl:py-24"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="h2 text-center mb-4">My Blog Posts</h2>
          <div className="w-[150px] h-[2px] bg-accent mb-8"></div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visibleBlogs.map((blog) => (
              <div 
                key={blog.id} 
                className="blog-card-glow bg-[#232329] rounded-lg overflow-hidden group transition-all duration-300 flex flex-col max-w-[350px] mx-auto w-full relative hover:shadow-none"
                style={{
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                <div className="relative z-[2] flex flex-col w-full h-full">
                  <div className="relative h-[160px] overflow-hidden bg-[#2a2a32]">
                    {blog.cover_image ? (
                      <img
                        src={blog.cover_image}
                        alt={blog.title}
                        className="w-full h-[160px] object-cover group-hover:scale-105 transition-all duration-300"
                        style={{
                          objectPosition: 'center',
                          backgroundColor: '#2a2a32',
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-[160px] flex items-center justify-center text-accent">
                        <span className="text-4xl">📝</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent">
                      {blog.title}
                    </h3>
                    <p className="text-white/60 mb-4 line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link 
                        href={blog.url}
                        className="text-accent hover:text-accent-hover transition-colors"
                        target="_blank"
                      >
                        👉Read More
                      </Link>
                      <div className="flex items-center gap-4">
                        <span className="text-white/60 text-sm">
                          {new Date(blog.published_at).toLocaleDateString()}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-red-600">❤ {blog.positive_reactions_count}</span>
                          <span className="text-white-500">💬 {blog.comments_count}</span>
                        </div>
                      </div>
                    </div>
                    {blog.tag_list.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {blog.tag_list.map((tag, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-all duration-300 hover:translate-y-[-2px]"
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Blog;