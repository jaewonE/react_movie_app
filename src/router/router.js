import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from '../pages/add';
import Detail from '../pages/detail';
import Edit from '../pages/edit';
import List from '../pages/list';
import Main from '../pages/main';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
