import { useContext, useState } from "react";

import { BookmarkContext } from "../../context/BookmarkContext";

// styles & icons
import "./BookmarkBtn.css";
import { ReactComponent as Bookmark } from "../../assets/bookmark-fill.svg";
import { ReactComponent as BookmarkOutline } from "../../assets/bookmark.svg";

const BookmarkBtn = ({ id }) => {
  const [showAlret, setShowAlret] = useState(false);

  const { bookmark, addBookmark, removeBookmark } = useContext(BookmarkContext);

  const handleAdd = () => {
    setShowAlret(true);
    addBookmark(id);
    setTimeout(() => {
      setShowAlret(false);
    }, 2000);
  };

  const handleRemove = () => {
    setShowAlret(true);
    removeBookmark(id);
    setTimeout(() => {
      setShowAlret(false);
    }, 2000);
  };

  // render if article is in bookmarks
  if (bookmark.includes(id)) {
    return (
      <>
        <button className="bookmark-btn" onClick={handleRemove}>
          <Bookmark />
          REMOVE BOOKMARK
        </button>
        {showAlret && (
          <div className="added">
            <Bookmark />
            SAVED TO BOOKMARKS
          </div>
        )}
      </>
    );
  }
  // render if article is not in bookmarks
  return (
    <>
      <button className="bookmark-btn" onClick={handleAdd}>
        <Bookmark />
        ADD BOOKMARK
      </button>
      {showAlret && (
        <div className="removed">
          <BookmarkOutline />
          REMOVED FROM BOOKMARKS
        </div>
      )}
    </>
  );
};

export default BookmarkBtn;
