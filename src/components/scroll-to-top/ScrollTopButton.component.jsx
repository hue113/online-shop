import React, { useState, useEffect } from 'react';

const ScrollTopButton = () => {
  // const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      // if (currentPosition > scrollTop) {
      //   setScrolling(false);
      // } else {
      //   setScrolling(true);
      // }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <>
      {scrollTop > 100 && (
        <div
          className="scrolltop"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <i className="bi bi-arrow-up-circle-fill icon" />
        </div>
      )}
    </>
  );
};

export default ScrollTopButton;
