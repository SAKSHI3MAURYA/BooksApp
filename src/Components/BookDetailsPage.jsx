import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

function BookDetail() {
  const [bookData, setBookData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://softwium.com/api/books/${id}`)
      .then((res) => setBookData(res.data));
  }, [id]);
  return (
    <div className="bookdetail">
      {bookData ? (
        <>
          <h2>{bookData.title}</h2>
          <hr />
          <h3>Authors: {bookData.authors && bookData.authors.join(",")}</h3>
          <p>ISBN:{bookData.isbn}</p>
          <p>Page Count: {bookData.pageCount}</p>
        </>
      ) : (
        <p>Loading Book details</p>
      )}
    </div>
  );
}

export default BookDetail;
