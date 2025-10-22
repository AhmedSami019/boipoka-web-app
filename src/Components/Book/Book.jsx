import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {bookId, bookName, author, image, rating, category, tags } = book;
  // const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm border-2 border-gray-200">
        <figure className="p-5 m-5 bg-[#F3F3F3]">
          <img src={image} alt="book" className="rounded-xl h-[180px]" />
        </figure>
        <div className="card-body ">
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <button key={index} className="bg-gray-100 px-4 py-1 rounded-md font-medium text-green-600">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title text-3xl font-bold">{bookName}</h2>
          <p className="text-lg font-medium mb-2">by : {author}</p>
          <div className="card-actions text-xl font-medium justify-between border-t-2 border-dashed border-gray-300 pt-5">
            <h5>{category}</h5>
            <div className="flex items-center">
              <p>{rating}</p>
              <Star size={18}></Star>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
