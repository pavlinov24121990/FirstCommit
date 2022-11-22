export const handleScroll = (e, numberPage, PagePostValue, handleScrollStop) => {
    if (e.currentTarget.scrollTop + e.currentTarget.clientHeight >= e.currentTarget.scrollHeight) {
      if (handleScrollStop) {
        numberPage(e);
        PagePostValue(e);
        
      }
    }
  };