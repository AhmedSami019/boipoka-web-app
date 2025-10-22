import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  //   this is all books data
  const booksData = useLoaderData();
  // this is single book data
  const singleBook = booksData.find((book) => book.bookId === bookId);
  console.log(singleBook);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleAddWishlist = (id)=>{

  }

  return (
    <div className="my-10 flex flex-col md:flex-row gap-10">
      {/* this div for image */}
      <div className="p-10 bg-gray-200 rounded-2xl md:w-4/12">
        <img src={image} alt="book image ........" />
      </div>
      {/* this div is for all text section */}
      <div className="divide-y-2 divide-gray-200 md:w-8/12">
        <div className="py-5 space-y-2">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="text-xl">By : {author}</p>
        </div>
        <p className="py-5 font-semibold">{category}</p>
        <div className="space-y-5 py-5">
          <p className="text-xl font-semibold">
            Review : <small className="font-normal">{review}</small>
          </p>
          <div className="flex items-center gap-3">
            <p className="font-semibold">Tag : </p>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="bg-gray-100 px-4 py-1 rounded-md font-medium text-green-600"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="py-5 flex gap-5">
            <button className="btn border-gray-400">Read</button>
            <button onClick={handleAddWishlist} className="btn bg-[#50B1C9] text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
