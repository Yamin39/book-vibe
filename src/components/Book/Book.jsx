import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;

  return (
    <Link to={`/book-details/${bookId}`} className="w-full">
      <div className="p-6 border border-dark-15 rounded-2xl flex gap-6 flex-col justify-between duration-100 hover:bg-gray-50 h-full">
        {/* part 1 - img */}
        <div className="h-[14.375rem] bg-dark-5 px-6 py-14 rounded-2xl w-full flex justify-center items-center">
          <img src={image} alt={bookName} />
        </div>
        {/* part 2 - tags */}
        <ul className="gap-3 flex flex-wrap">
          {tags.map((tag, i) => (
            <li key={i} className="text-primary-green font-medium bg-[#23BE0A0D] py-2 px-3 rounded-3xl">
              {tag}
            </li>
          ))}
        </ul>
        {/* part 3 - title, author */}
        <div className="space-y-2">
          <h3 className="font-bold text-2xl font-playfair-display"> {bookName}</h3>
          <p className="font-medium text-dark-80">By : {author}</p>
        </div>
        {/* part 4 - category, rating */}
        <ul className="flex justify-between w-full border-t-2 pt-3 border-dashed font-medium text-dark-80">
          <li>{category}</li>
          <li className="flex gap-2 justify-center items-center">
            <span>{rating}</span> <FaRegStar />
          </li>
        </ul>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
