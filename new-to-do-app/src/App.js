import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';
import Delete from './components/Delete';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path=''element={<View/>}/>
    <Route path='/add'element={<Add/>}/>
    <Route path='/search'element={<Search/>}/>
    <Route path='/delete'element={<Delete/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
