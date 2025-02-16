import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStoredReadBooks, storeReadBooks } from "../../utilities/readList";
import { getStoredWishBooks, storeWishBooks } from "../../utilities/wishList";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();

  const book = books.find((book) => book.bookId === parseInt(bookId));

  const { bookId: id, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

  const successNotify = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const errorNotify = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handlerWishListBtn = () => {
    const storedReadListBooks = getStoredReadBooks();
    const storedWishBooks = getStoredWishBooks();
    if (!storedReadListBooks.includes(id)) {
      storeWishBooks(id);
      if (!storedWishBooks.includes(id)) {
        successNotify("Book Added to Wishlist");
      } else {
        errorNotify("This book is already added to Wishlist");
      }
    } else {
      errorNotify("You have already read this book");
    }
  };

  const handlerReadListBtn = () => {
    const storedReadListBooks = getStoredReadBooks();
    const storedWishBooks = getStoredWishBooks();
    if (!storedReadListBooks.includes(id)) {
      storeReadBooks(id);
      successNotify("Book added to read list");
      if (storedWishBooks.includes(id)) {
        const removedWishListBooks = storedWishBooks.filter((storedWishBook) => storedWishBook !== id);
        localStorage.setItem("wishListBooks", JSON.stringify(removedWishListBooks));
      }
    } else {
      errorNotify("You have already read this book");
    }
  };

  return (
    <div className="flex flex-col lg:items-center lg:flex-row gap-12">
      <div className="w-[24rem] h-60 lg:h-[36.875rem] mx-auto lg:w-[45%] p-10 bg-dark-5 px-6 md:py-14 rounded-2xl flex justify-center items-center">
        <img className="h-full" src={image} alt={bookName} />
      </div>
      <div className="lg:w-[55%] flex flex-col justify-between">
        <div>
          <h1 className="font-playfair-display font-bold text-[2.5rem] text-dark">{bookName}</h1>
          <p className="font-medium text-xl text-dark-80 py-3 border-b border-b-[#13131326]">By : {author}</p>
          <p className="font-medium text-xl text-dark-80 py-3 border-b border-b-[#13131326]">{category}</p>
          <p className="text-[#131313B3] mt-5">
            <span className="text-dark font-bold">Review : </span>
            {review}
          </p>
        </div>
        <div className="mt-4">
          <ul className="flex gap-3 items-center flex-wrap">
            <li className="text-dark font-bold mr-1">Tag</li>
            {tags.map((tag, i) => (
              <li key={i} className="font-medium text-primary-green px-3 py-1 bg-[#23BE0A0D] rounded-[1.875rem]">
                #{tag}
              </li>
            ))}
          </ul>
          <hr className="border-b border-b-dark-15 my-5" />
          <table cellPadding="5">
            <tbody>
              <tr>
                <td className="text-dark-70">Number of Pages: </td>
                <td className="text-dark font-semibold">{totalPages}</td>
              </tr>
              <tr>
                <td className="text-dark-70">Publisher: </td>
                <td className="text-dark font-semibold">{publisher}</td>
              </tr>
              <tr>
                <td className="text-dark-70">Year of Publishing: </td>
                <td className="text-dark font-semibold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td className="text-dark-70">Rating: </td>
                <td className="text-dark font-semibold">{rating}</td>
              </tr>
            </tbody>
          </table>
          <div className="space-x-4 mt-4">
            <button
              onClick={handlerReadListBtn}
              className="btn hover:opacity-80 hover:bg-transparent py-3 min-h-0 text-lg font-semibold md:px-7 md:py-[1.125rem] h-auto bg-transparent border border-[#1313134D] text-black"
            >
              Read
            </button>
            <button
              onClick={handlerWishListBtn}
              className="btn hover:opacity-80 hover:bg-[#50B1C9] py-3 min-h-0 text-lg font-semibold text-white md:px-7 md:py-[1.125rem] h-auto bg-[#50B1C9]"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
