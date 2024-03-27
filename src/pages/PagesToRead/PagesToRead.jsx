import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getStoredReadBooks } from "../../utilities/readList";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

const TriangleBar = ({ fill, x, y, width, height }) => {
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const books = useLoaderData();
  const [readListBooks, setReadListBooks] = useState();

  useEffect(() => {
    const storedReadBooksIds = getStoredReadBooks();
    const ReadBooks = books.filter((book) => storedReadBooksIds.includes(book.bookId));
    setReadListBooks(ReadBooks);
  }, [books]);

  return (
    <div className="py-10 px-2 sm:px-4 bg-[#13131308] rounded-3xl">
      <ResponsiveContainer aspect={3}>
        <BarChart
          // width={}
          height={600}
          data={readListBooks}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip></Tooltip>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          {/* interval={0} */}
          <YAxis />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
            {readListBooks && readListBooks.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % 20]} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

TriangleBar.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default PagesToRead;
