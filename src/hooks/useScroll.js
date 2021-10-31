const useScroll = () => {
  const scroll = () => {
    setTimeout(() => {
      window.scroll(0, document.documentElement.scrollTop + 1000);
    }, 300);
  };

  return { scroll };
};

export default useScroll;
