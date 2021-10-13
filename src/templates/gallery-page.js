import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Layout from "../components/Layout";
import useModal from "../components/useModal";
import Slideshow from "../components/slideshow";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

function GalleryPage({ data }) {
  const [Modal, openModal, toggleModal] = useModal();
  const { edges: gallery } = data.allMarkdownRemark;
  const [selectedImage, setSelectedImage] = useState(0);
  const handleImageClicked = (index) => {
    setSelectedImage(index);
    toggleModal();
  };
  const animation = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  return (
    <div>
      <h3 style={{textAlign: "center"}}>Photos of environmental issues arround the world</h3>
      <Wrapper>
        {gallery[0]?.node?.frontmatter.images.map((galleryItem, index) => (
          <div key={galleryItem?.image?.publicURL}>
            <div onClick={() => handleImageClicked(index)}>
              <GatsbyImage fluid={galleryItem?.image?.childImageSharp.fluid} />
            </div>
          </div>
        ))}
      </Wrapper>
      <AnimatePresence>
        {openModal && (
          <motion.div variants={animation} initial="hide" animate="show" exit="hide">
            <Modal isOpen={openModal} close={toggleModal}>
              <Slideshow
                images={gallery[0]?.node?.frontmatter.images}
                selectedImage={selectedImage}
              />
            </Modal>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default () => (
  <StaticQuery
    query={graphql`
      query GalleryQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "gallery-page" } } }) {
          edges {
            node {
              id
              frontmatter {
                templateKey
                images {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 750, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                    publicURL
                  }
                  description
                  author
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <GalleryPage data={data} count={count} />}
  />
);

const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 10px;
  width: 80%;
  margin: auto;
`;
