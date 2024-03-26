import img from "../../assets/images/banner-book.png";

const BookDetails = () => {
  return (
    <div className="flex gap-12">
      <div className="w-1/2 bg-dark-5 px-6 py-14 rounded-2xl">
        <img className="w-full mx-auto" src={img} alt="" />
      </div>
      <div>
        {/* part 1 - title, author */}
        <div className="flex-grow">
          <h1 className="font-playfair-display font-bold text-[3.5rem] text-dark">The Catcher in the Rye</h1>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
