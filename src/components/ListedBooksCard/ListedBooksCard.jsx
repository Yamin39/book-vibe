import PropTypes from "prop-types";
import { HiOutlineUsers } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const ListedBooksCard = ({ listBook }) => {
  const { bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = listBook;
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 border border-dark-15 rounded-2xl">
      <div className="bg-dark-5 p-5 rounded-2xl flex lg:flex-col justify-center lg:h-auto">
        <img className="w-[7.813rem] sm:w-auto" src={image} alt={bookName} />
      </div>
      <div className="flex flex-col gap-3 justify-between flex-1">
        <h3 className="font-playfair-display font-bold text-2xl text-dark">{bookName}</h3>
        <p className="font-medium text-dark-80">By : {author}</p>

        <div className="flex gap-3 items-center flex-wrap">
          <p className="text-dark font-bold mr-1">Tag</p>
          <ul className="flex gap-3 items-center flex-wrap">
            {tags.map((tag, i) => (
              <li key={i} className="font-medium text-primary-green px-3 py-1 bg-[#23BE0A0D] rounded-[1.875rem]">
                #{tag}
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2">
            <SlLocationPin />
            <span>Year of Publishing: {yearOfPublishing}</span>
          </p>
        </div>

        <ul className="flex flex-col sm:flex-row sm:items-center gap-4 text-[#13131399] mt-1">
          <li className="flex items-center gap-2">
            <HiOutlineUsers className="text-lg" />
            <span>Publisher: {publisher}</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M9 16.5V17.25M12 14.25V17.25M15 12V17.25M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z"
                stroke="#131313"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Page {totalPages}</span>
          </li>
        </ul>
        <hr className="border-b border-b-dark-15 my-3" />
        <div className="flex gap-3 flex-wrap">
          <span className="text-[#328EFF] py-2 px-4 bg-[#328EFF26] rounded-[1.875rem]">Category: {category}</span>
          <span className="text-[#FFAC33] py-2 px-4 bg-[#FFAC3326] rounded-[1.875rem]">Rating: {rating}</span>
          <Link to={`/book-details/${bookId}`} className="py-2 px-4 bg-primary-green text-white font-medium rounded-[1.875rem]">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ListedBooksCard.propTypes = {
    listBook: PropTypes.object,
};

export default ListedBooksCard;
