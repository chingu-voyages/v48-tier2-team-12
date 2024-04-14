
// --------------------------------------------------------------
// A Custom Hook for reuse the same logic in different components
// --------------------------------------------------------------

import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
}
