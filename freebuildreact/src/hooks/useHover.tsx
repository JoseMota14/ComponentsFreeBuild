// useHover.ts
import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const [value, setValue] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseHover = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener("mouseover", handleMouseHover);
      node.addEventListener("mouseout", handleMouseLeave);

      return () => {
        node.removeEventListener("mouseover", handleMouseHover);
        node.removeEventListener("mouseout", handleMouseLeave);
      };
    }
  }, []);

  return [ref, value] as const;
};
