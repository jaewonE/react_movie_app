import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../component/header';

const Detail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/books/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        setBook(res?.data);
      });
  }, [id]);
  const deleteBook = async (id) => {
    const isDeleted = await axios.delete(`http://localhost:3001/books/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (isDeleted) {
      alert('삭제완료!');
      navigate('/list');
    } else {
      alert('실패');
    }
  };
  return (
    <div className="w-screen h-screen mt-5 pl-10 pr-10">
      {!book ? (
        <div className="w-full h-full flex justify-center items-center text-3xl font-bold">
          Book not found
        </div>
      ) : (
        <div>
          <Header />
          <div className="w-full h-full flex items-start mt-20 pl-20">
            <img
              src={book.coverImg}
              alt="img"
              className=" w-80 object-contain rounded-lg shadow-2xl"
            />
            <div className="w-full h-full p-32">
              <div className="font-bold text-5xl mb-3">{book.name}</div>
              <div className="flex justify-start">
                <div
                  onClick={() => navigate(`/edit/${book.id}`)}
                  className="ml-1 mr-2 bg-blue-300 text-white font-semibold rounded-md p-1"
                >
                  Update
                </div>
                <div
                  onClick={() => deleteBook(book.id)}
                  className="ml-1 mr-2 bg-red-300 text-white font-semibold rounded-md p-1"
                >
                  Delete
                </div>
                <div className="opacity-70 text-lg mr-2">{book.owner}</div>
                <div className="mr-2">|</div>
                <div className=" opacity-70 text-lg mr-2">{book.category}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
