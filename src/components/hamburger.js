import React from "react";
import styled from "styled-components";
import colors from "./colors";
function Hamburger({ active, onClick }) {
  return (
    <Burger className="hamburger" onClick={onClick}>
      <LineTop active={active} />
      <Line1 active={active} />

      <Line3 active={active} />
      <LineBottom active={active} />
    </Burger>
  );
}

export default Hamburger;
const Burger = styled.div`
  position: fixed;
  width: 26px;
  height: 26px;
`;

const Line1 = styled.div`
  position: absolute;
  width: 26px;
  height: 3px;
  background-color: ${colors.accent};
  transition: all 400ms cubic-bezier(0.83, 0, 0.17, 1);
  transform: rotate(${({ active }) => (active ? "45deg" : "0deg")});
  top: 10px;
  left: calc(50% - 28px / 2);
  border-radius: 5px;
`;
const LineTop = styled.div`
  position: absolute;
  top: ${({ active }) => (active ? "10px" : "0px")};;
  left: calc(50% - 28px / 2);
  width: 26px;
  height: 3px;
  background-color: ${colors.accent};
  transition: all 200ms cubic-bezier(0, 0.55, 0.45, 1);
  transform: rotateY(${({ active }) => (active ? "90deg" : "0deg")});
  border-radius: 5px;
`;
const LineBottom = styled.div`
  position: absolute;
  top: ${({ active }) => (active ? "10px" : "20px")};
  left: calc(50% - 28px / 2);
  width: 26px;
  height: 3px;
  background-color: ${colors.accent};
  transition: all 200ms cubic-bezier(0, 0.55, 0.45, 1);
  transform: rotateY(${({ active }) => (active ? "90deg" : "0deg")});
  border-radius: 5px;
`;
const Line3 = styled.div`
  position: absolute;
  top: 10px;
  left: calc(50% - 28px / 2);
  width: 26px;
  height: 3px;
  background-color: ${colors.accent};
  transition: all 400ms cubic-bezier(0.83, 0, 0.17, 1);
  transform: rotate(${({ active }) => (active ? "-45deg" : "0deg")});
  border-radius: 5px;
`;
