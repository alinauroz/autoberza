import { useRef, useEffect } from 'react';

export default (handler: () => void) => {
  const domNode = useRef(null) as React.MutableRefObject<HTMLDivElement | null>;

  useEffect(() => {
    const outsideClickHandler = (e: MouseEvent) => {
      if (!domNode.current?.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', outsideClickHandler);

    return () => {
      document.removeEventListener('mousedown', outsideClickHandler);
    };
  });

  return domNode;
};
