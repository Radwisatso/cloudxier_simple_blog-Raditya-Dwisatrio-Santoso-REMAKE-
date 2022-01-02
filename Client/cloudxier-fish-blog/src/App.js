import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route, Link } from "react-router-dom";
import {Home, AddOrUpdate, DetailPage} from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddOrUpdate />} />
        <Route path="/edit/:id" element={<AddOrUpdate />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
