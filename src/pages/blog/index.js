import React, { useState } from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import BlogNav from "../../components/BlogNav";
import { AnimatePresence , motion} from "framer-motion";
import Gallery from "../../templates/gallery-page";

export default function BlogIndexPage() {
  const [activeItem, setActiveItem] = useState("articles");
  return (
    <Layout>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`,
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
          <section className="section">
            <div className="container">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </section>
        )}
        {activeItem === "gallery" && (
          <motion.section className="section">
            <div className="container">
              <div className="content">
                <Gallery />
              </div>
            </div>
          </motion.section>
        )}
        {activeItem === "videos" && (
          <section className="section">
            <div className="container">
              <div className="content">
                <BlogRoll />
              </div>
            </div>
          </section>
        )}
      </AnimatePresence>
    </Layout>
  );
}
