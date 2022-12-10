import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [category, setCategory] = useState('');
  const [coverImg, setCoverImg] = useState('');
  const navigate = useNavigate();

  const updateBook = async (data) => {
    const post = await axios.post(
      'http://localhost:3001/books',
      {
        ...data,
        id: uuidv4(),
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (post) {
      alert('추가완료!');
      navigate('/list');
    } else {
      alert('실패');
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div
        style={{ border: '2px solid rgba(0,0,0,0.5)', padding: 10 }}
        className="rounded-lg shadow-2xl"
      >
        <div className="">New Book</div>
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid rgba(0,0,0,0.5)',
            marginBottom: 5,
          }}
        >
          <label htmlFor="name" style={{ marginRight: 10, minWidth: 100 }}>
            name:
          </label>
          <input
            name="name"
            type="text"
            value={name}
            placeholder="Book name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid rgba(0,0,0,0.5)',
            marginBottom: 5,
          }}
        >
          <label htmlFor="owner" style={{ marginRight: 10, minWidth: 100 }}>
            author:
          </label>
          <input
            style={{ width: '100%', outline: 'none' }}
            name="owner"
            type="text"
            value={owner}
            placeholder="author"
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid rgba(0,0,0,0.5)',
            marginBottom: 5,
          }}
        >
          <label htmlFor="category" style={{ marginRight: 10, minWidth: 100 }}>
            categories:
          </label>
          <input
            style={{ width: '100%', outline: 'none' }}
            name="category"
            type="text"
            value={category}
            placeholder="categories"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid rgba(0,0,0,0.5)',
            marginBottom: 5,
          }}
        >
          <label htmlFor="coverImg" style={{ marginRight: 10, minWidth: 100 }}>
            coverImg url:
          </label>
          <input
            style={{ width: '100%', outline: 'none' }}
            name="coverImg"
            type="text"
            value={coverImg}
            placeholder="coverImg"
            onChange={(e) => setCoverImg(e.target.value)}
          />
        </div>
        <input
          type="button"
          className="w-full bg-red-300 rounded-md mt-2 text-white font-semibold"
          value="Submit"
          onClick={() => updateBook({ name, owner, category, coverImg })}
        />
      </div>
    </div>
  );
};

export default Add;
