import React from "react";
import "./style.css";
import { myBooks } from "./data";
const Booklist = () => {
  return (
    <>
      <h1>Books</h1>
      <div className="book-list">
        <Book />
      </div>
    </>
  );
};
// const persons = ["Ahmad", "Ali", "Haris"];

const Book = () => {
  return (
    <>
      {myBooks.map((meraData) => {
        return (
          <div className="book">
            <img src={meraData.bookImage} alt="amazon book" />
            <h4>{meraData.bookTitle}</h4>
            <h5>{meraData.bookAuthor}</h5>
          </div>
        );
      })}
      {/* {persons.map((mereLog) => {
        return <h1>{mereLog}</h1>;
      })} */}
    </>
  );
};

export default Booklist;
