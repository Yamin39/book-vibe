import Book from "../Book/Book";

const Books = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-bold font-playfair-display mb-12">Books</h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <Book></Book>
        <Book></Book>
      </div>
    </div>
  );
};

export default Books;
