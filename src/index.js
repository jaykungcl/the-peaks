import React from "react";
import ReactDOM from "react-dom";
import "./Global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SortContextProvider from "./context/SortContext";
import BookmarkContextProvider from "./context/BookmarkContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SortContextProvider>
        <BookmarkContextProvider>
          <App />
        </BookmarkContextProvider>
      </SortContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
