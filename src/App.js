import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './component/Create/Create';
import Header from './component/Header/Header';
import Read from './component/Read/Read';
import Update from './component/Update/Update';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Read/>}></Route>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update' element={<Update/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
