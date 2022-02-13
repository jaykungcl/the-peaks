import { createContext, useEffect, useState } from "react";

export const BookmarkContext = createContext();

const BookmarkContextProvider = ({ children }) => {
  const [bookmark, setBookmark] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("bookmark")) {
      setBookmark(localStorage.getItem("bookmark").split(","));
    }
  }, []);

  const addBookmark = (id) => {
    if (!bookmark.includes(id)) {
      const newBookmark = [...bookmark];
      newBookmark.push(id);
      setBookmark(newBookmark);
      localStorage.setItem("bookmark", newBookmark);
    }
  };

  const removeBookmark = (id) => {
    const newBookmark = [...bookmark];
    const index = newBookmark.indexOf(id);
    newBookmark.splice(index, 1);
    setBookmark(newBookmark);
    localStorage.setItem("bookmark", newBookmark);
  };

  return (
    <BookmarkContext.Provider value={{ bookmark, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContextProvider;
