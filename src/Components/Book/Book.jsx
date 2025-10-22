import React from "react";

const Book = ({book}) => {
    console.log(book);

    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book

  return (
    <div className="card bg-base-100 shadow-sm border-2 border-gray-200">
      <figure className="p-5 m-5 bg-[#F3F3F3]">
        <img
          src={image}
          alt="book"
          className="rounded-xl h-[180px]"
        />
      </figure>
      <div className="card-body ">
        <div className="flex gap-2">
            {
                tags.map(tag => <button className="bg-gray-100 px-4 py-1 rounded-md font-medium text-green-600">{tag}</button>)
            }
        </div>
        <h2 className="card-title text-3xl font-bold">{bookName}</h2>
        <p className="text-lg font-medium">by : {author}</p>
        <div className="card-actions">
          
        </div>
      </div>
    </div>
  );
};

export default Book;
