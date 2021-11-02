import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Layout from "../components/Layout";
import useModal from "../components/useModal";
import Slideshow from "../components/slideshow";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

function GalleryPage({ path, data }) {
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
          <ImageWrapper key={galleryItem?.image?.publicURL}>
            <div class="imageContainer" onClick={() => handleImageClicked(index)}>
              <GatsbyImage fluid={galleryItem?.image?.childImageSharp.fluid} />
            </div>
          </ImageWrapper>
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
    render={(data, count) => <GalleryPage path="/blog/" data={data} count={count} />}
  />
);

const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(25% - 30px));
  gap: 10px;
  width: 80%;
  margin: auto;
  @media screen and (max-width: 1200px){
    grid-template-columns: repeat(auto-fill, calc(33.3% - 20px));
  }
  @media screen and (max-width: 800px){
    grid-template-columns: repeat(auto-fill, calc(50% - 10px));
  }
  /* @media screen and (max-width: 600px){
    grid-template-columns: repeat(auto-fill, 100%);
  } */
  `;

const ImageWrapper = styled.div`
  max-height: 150px;
  overflow-y: hidden;

`;
