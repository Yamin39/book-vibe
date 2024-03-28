import { useNavigate } from "react-router-dom";
import bannerBook from "../../assets/images/banner-book.png";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8 md:gap-20 bg-dark-5 py-20 rounded-3xl justify-center items-center px-10 mb-24">
      <div className="text-center lg:text-left">
        <h1 className="max-w-[32.875rem] mb-12 font-playfair-display font-bold text-[3.5rem] text-dark">Books to freshen up your bookshelf</h1>
        <button
          onClick={() => navigate("listed-books")}
          className="btn hover:opacity-80 text-lg font-semibold py-3 min-h-0 text-white md:px-7 md:py-[1.125rem] h-auto hover:bg-primary-green bg-primary-green"
        >
          View The List
        </button>
      </div>
      <div>
        <img className="w-52 md:w-auto" src={bannerBook} alt="Book" />
      </div>
    </div>
  );
};

export default Banner;
