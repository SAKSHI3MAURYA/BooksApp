import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Book() {
  const [bookData, setBookData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://softwium.com/api/books")
      .then((res) => setBookData(res.data));
  }, []);

  const handleBookCLick = (id) => {
    navigate(`/books/${id}`);
  };

  return (
    <div className="content">
      <>
        <h1>Welcome to Books App</h1>
        <h4 className="subtitle">Click on any book to see details</h4>
        {bookData.map((book) => {
          const { id, title } = book;
          return (
            <div classname="card" key={id} onClick={() => handleBookCLick(id)}>
              <h2 className="title">📖{title}</h2>
            </div>
          );
        })}
      </>
    </div>
  );
}

export default Book;
