'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalPortalProps = {
  children: React.ReactNode;
};

const ModalPortal = ({ children }: ModalPortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Wait until after initial render to ensure `document` is available
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Render children into the <body> element
  return createPortal(children, document.body);
};

export default ModalPortal;
