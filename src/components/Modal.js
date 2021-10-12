import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled(motion.div)`
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: fixed;
  width: 100vw;
  height: 100%;
  max-width: 100%;
  top: 0;
  left: ${({ fromOffscreenLeft }) => (fromOffscreenLeft ? "100vh" : 0)};
  background-color: rgba(0,0,0,.8);;
  z-index: 99;
  display: grid;
  grid-template-rows: auto;
  overflow: hidden;
`;
const Card = styled.div`
  z-index: 100;
  background-color: transparent;
  width: ${({ maxWidth }) => (maxWidth ? maxWidth : "720px")};
  /* max-width: 100%; */
  height: 100vh;
  margin: auto;
  overflow-x: hidden;
  max-width: 100%;
`;
const Close = styled.div`
  color: rgba(255,255,255,.8);
  width: 40px;
  height: 40px;
  position: fixed;
  right: 10px;
  top: 10px;
  display: inline;
  &:hover {
    cursor: pointer;
  }
`;

const ContentWrapper = styled.div`
      width: 100vw;
        height: 100vh;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
`

const CloseWrapper = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  display: ${({ showX }) => (showX ? "block" : "none")};
  z-index: 101;
`;
const Dummy = styled.div`
  width: 100px;
`;

/**
 *  @component Displays a Modal, state is managed outside of the modal
 *  @param {boolean}   showX                 defatults to true, shows the x on the top left corner
 *  @param {function}  close,                function that gets executed when modal is closed
 *  @param {boolean}   isOpen                defaults to false, modal is closed by default
 *  @param {string}    maxWidth              set a value in px to control the size of the modal,
 *  @param {boolean}   fromOffscreenLeft     defaults to false, determines if modal should start offscreen and slide in from the left
 *  @param {boolean}   shouldScale           defaults to false, determines if the modal changes size when animating in and out
 */
function Modal({
  showX = true,
  children,
  close,
  isOpen = false,
  maxWidth = "100vw",
  fromOffscreenLeft = false,
  shouldScale = false,
}) {
  //generate a random number to be assigned to the container
  let rand = Math.random() * 100000;
  const handleClick = (e) => {
    // if the random number matches the id of the container we know the container was clicked
    // then close the container
    if (rand === e.target.id) close();
  };

  const animations = {
    show: {
      visibility: "visible",
      opacity: 1,
    },
    hide: {
      visibility: "hidden",
      opacity: 1,
    },
  };

  return (
    <AnimatePresence timeout={300}>
      {isOpen && (
        <Container
          initial="hide"
          animate="show"
          variants={animations}
          fromOffscreenLeft={fromOffscreenLeft}
          shouldScale={shouldScale}
          onClick={handleClick}
          id={rand}
        >
          <Dummy></Dummy>
          <Card maxWidth={maxWidth}>
            <CloseWrapper showX={showX}>
              <Close onClick={close}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="butt"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Close>
            </CloseWrapper>
            <ContentWrapper> {children}</ContentWrapper>
          </Card>
          <Dummy></Dummy>
        </Container>
      )}
    </AnimatePresence>
  );
}



export default Modal;
