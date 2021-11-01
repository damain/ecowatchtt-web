import React, { useState } from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import BlogNav from "../../components/BlogNav";
import { AnimatePresence , motion} from "framer-motion";
import Gallery from "../../templates/gallery-page";
import VideoRoll from "../../components/VideoRoll";

const animation = {
  hide: {
    
    opacity: 0
  },
  show:{
    opacity: 1
  }
}
export default function BlogIndexPage() {
  const [activeItem, setActiveItem] = useState("articles");
  return (
    <Layout path="/blog/">
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/blog.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: "0.5rem 0 0 rgb(254 0 0), -0.5rem 0 0 rgb(254 0 0)",
            backgroundColor: "rgb(254 0 0)",
            color: "white",
            padding: "1rem",
          }}
        >
          Additional Resources
        </h1>
        <div style={{ display: "block" }}>
          <BlogNav activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
      </div>
      <AnimatePresence>
        {activeItem === "articles" && (
          <motion.section className="section"
          variants = {animation}
          intitial ="hide"
          animate = "show"
          exit = "hide"
          key= "articles"
          >
            <div className="container">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </motion.section>
        )}
        {activeItem === "gallery" && (
          <motion.section className="section"
          variants = {animation}
          intitial ="hide"
          animate = "show"
          exit = "hide"
          key = "gallery"
          >
            <div className="container">
              <div className="content">
                <Gallery />
              </div>
            </div>
          </motion.section>
        )}
        {activeItem === "videos" && (
          <motion.section className="section"
          variants = {animation}
          intitial ="hide"
          animate = "show"
          exit = "hide"
          key = "videos"
          >
            <div className="container">
              <div className="content">
                <VideoRoll />
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </Layout>
  );
}
