// Dimention.tsx
import React from "react";
import { useHover } from "../../../hooks/useHover";
import { HoverableDiv } from "./styles";

interface DimentionProps {
  children: React.ReactNode;
}

export default function Dimention({ children }: DimentionProps) {
  const [hoverRef, isHovered] = useHover();

  return (
    <HoverableDiv ref={hoverRef} isHovered={isHovered}>
      {children}
    </HoverableDiv>
  );
}
