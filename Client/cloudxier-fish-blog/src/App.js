import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route, Link } from "react-router-dom";
import {Home, AddOrUpdate} from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddOrUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
