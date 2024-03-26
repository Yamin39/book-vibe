import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../assets/images/banner-book.png";

const Book = () => {
  return (
    <Link to="/1" className="w-full">
      <div className="p-6 border border-dark-15 rounded-2xl flex gap-6 flex-col justify-between">
        {/* part 1 - img */}
        <div className="bg-dark-5 px-6 py-14 rounded-2xl w-full">
          <img className="w-36 mx-auto" src={img} alt="" />
        </div>
        {/* part 2 - tags */}
        <ul className="space-x-3 font-work-sans">
          <li className="text-primary-green font-medium bg-[#23BE0A0D] py-2 px-3 rounded-3xl inline">Young Adult</li>
          <li className="text-primary-green font-medium bg-[#23BE0A0D] py-2 px-3 rounded-3xl inline">Identity</li>
        </ul>
        {/* part 3 - title, author */}
        <div className="space-y-2">
          <h3 className="font-bold text-2xl font-playfair-display"> The Catcher in the Rye</h3>
          <p className="font-medium font-work-sans text-dark-80">By : Awlad Hossain</p>
        </div>
        {/* part 4 - category, rating */}
        <ul className="flex justify-between w-full border-t-2 pt-3 border-dashed font-work-sans font-medium text-dark-80">
          <li>Fiction</li>
          <li className="flex gap-2 justify-center items-center">
            <span>5.00</span> <FaRegStar />
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default Book;
