import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utilities/readList";
import { getStoredWishBooks } from "../../utilities/wishList";

const ListedBooks = () => {
  const borderStyles = {
    borderBottom: "none",
    borderRight: "none",
    borderLeft: "none",
    borderRadius: "0px",
  };

  const books = useLoaderData();

  const [wishListBooks, setWishListBooks] = useState();

  useEffect(() => {
    const storedWishBooksIds = getStoredWishBooks();
    const wishBooks = books.filter((book) => storedWishBooksIds.includes(book.bookId));
    setWishListBooks(wishBooks);
  }, [books]);

  const [readListBooks, setReadListBooks] = useState();

  useEffect(() => {
    const storedReadBooksIds = getStoredReadBooks();
    const ReadBooks = books.filter((book) => storedReadBooksIds.includes(book.bookId));
    setReadListBooks(ReadBooks);
  }, [books]);

  return (
    <div>
      <div className="p-8 bg-dark-5 text-center rounded-2xl">
        <h3 className="text-[1.75rem] font-bold text-dark">Books</h3>
      </div>
      <div className="p-8 text-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 text-lg text-white bg-primary-green hover:bg-green-600">
            <span className="font-semibold">Sort By</span> <IoIosArrowDown />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Published year</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div role="tablist" className="tabs tabs-lifted tabs-lg">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" defaultChecked />
          <div role="tabpanel" style={borderStyles} className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            {/* Tab content 1 */}
            <h1>Read list books</h1>
            <ul>
              {readListBooks &&
                readListBooks.map((readListBook) => (
                  <li key={readListBook.bookId}>
                    book id: {readListBook.bookId}, book name: {readListBook.bookName}
                  </li>
                ))}
            </ul>
          </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
          <div role="tabpanel" style={borderStyles} className="tab-content bg-base-100 border-base-300 rounded-box p-6 border-b">
            {/* Tab content 2 */}
            <h1>Wish list books</h1>
            <ul>
              {wishListBooks &&
                wishListBooks.map((wishListBook) => (
                  <li key={wishListBook.bookId}>
                    book id: {wishListBook.bookId}, book name: {wishListBook.bookName}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;