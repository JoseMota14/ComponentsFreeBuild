import styled from "styled-components";

interface HoverableDivProps {
  isHovered: boolean;
}

export const HoverableDiv = styled.div<HoverableDivProps>`
  padding: 20px;
  background-color: ${(props) => (props.isHovered ? "#f0f0f0" : "transparent")};
  transition: background-color 0.3s ease;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.isHovered ? "0px 0px 10px 0px rgba(0,0,0,0.5)" : "none"};
  transform: ${(props) => (props.isHovered ? "scale(1.05)" : "scale(1)")};
`;
