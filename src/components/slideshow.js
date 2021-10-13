import React, { useState } from "react";
import GatsbyImage from "gatsby-image";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { HiArrowLeft, HiArrowRight, HiBan } from "react-icons/hi";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function Slideshow({ images, selectedImage }) {
  const [[page, direction], setPage] = useState([+selectedImage, 0]);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 99,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const paginate = (newDirection) => {
    if ((page === 0 && newDirection === -1) || (page === images.length - 1 && newDirection === 1))
      return;
    setPage([page + newDirection, newDirection]);
  };
  return (
    <Container>
      <AnimatePresence custom={direction}>
        <motion.div
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          key={page}
          className="slide"
          custom={direction}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            console.log("drag ended");
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <GatsbyImage
            fluid={images[page].image.childImageSharp.fluid}
            imgStyle={{ maxHeight: "90vh", objectFit: "contain" }}
            className="slideImage"
          />
          <SlideText
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: "-20px", opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="slideText"
          >
            {images[page].author && <div className="content author">Photo by: {images[page].author}</div>}
            <div className="content">{images[page].description}</div>
          </SlideText>
        </motion.div>
      </AnimatePresence>
      <Controls>
        <PrevSlideControl
          className={page === 0 ? `disabled` : ``}
          onClick={() => paginate(-1)}
          whileHover={{ x: page !== 0 ? 10 : 0 }}
          whileTap={{ scale: page !== 0 ? 0.8 : 1, x: page !== 0 ? -10 : 0 }}
        >
          {page !== 0 ? <HiArrowLeft size="40" /> : <HiBan size="40" />}
        </PrevSlideControl>
        <NextSlideControl
          className={page === images.length - 1 ? `disabled` : ``}
          onClick={() => paginate(1)}
          whileHover={{ x: page !== images.length - 1 ? -10 : 0 }}
          whileTap={{
            scale: page !== images.length - 1 ? 0.8 : 1,
            x: page !== images.length - 1 ? 10 : 0,
          }}
        >
          {page !== images.length - 1 ? <HiArrowRight size="40" /> : <HiBan size="40" />}
        </NextSlideControl>
      </Controls>
    </Container>
  );
}

export default Slideshow;

const Controls = styled.div`
  position: fixed;
  top: 45vh;
  left: 0;
  z-index: 100;
  width: 100%;
`;
const PrevSlideControl = styled(motion.div)`
  position: absolute;
  left: -15px;
  height: 100px;
  width: 70px;
  background-color: white;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  display: flex;
  border-bottom-right-radius: 100px;
  justify-content: center;
  align-items: center;
  &.disabled {
    color: red;
  }
`;
const NextSlideControl = styled(motion.div)`
  position: absolute;
  right: -15px;
  height: 100px;
  width: 70px;
  background-color: white;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.disabled {
    color: red;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
`;

const SlideText = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  & .content {
    position: absolute;
    /* background-color: #008000b3; */
    background-color: #c20000b3;
    color: white;
    padding: 20px;
    font-weight: 600;
    font-size: 1.2em;
    transform: skewX(168deg);
    line-height: 1.2em;
    @media screen and (max-width: 768px){
      top:0px;
      font-size: .8em;
      padding: 10px;
      line-height: 1.2em;
    }
  }
  & .author{
      top: -110px;
      font-size: .8em;
      @media screen and (max-width: 768px){
        top: -35px;
        font-size: .6em;
        padding: 10px;
      }
  }
`;
