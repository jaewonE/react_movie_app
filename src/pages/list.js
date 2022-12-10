import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../component/header';

const List = () => {
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('http://localhost:3001/books', {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        setBookList(res.data);
      });
  }, []);
  const movePage = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="w-screen h-screen mt-5 pl-10 pr-10">
      <Header />
      <div className="w-full h-auto flex justify-center flex-wrap mt-32">
        <div className="w-4/5 flex justify-start flex-wrap gap-14">
          {bookList.map((book, index) => (
            <div key={index} onClick={() => movePage(book.id)} className="w-48">
              <img
                src={book.coverImg}
                alt="img"
                className="w-full rounded-lg"
              />
              <div className=" text-md mt-2 text-center">{book.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
