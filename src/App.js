import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import Home from './pages/Home'
import Header from './components/Header';
import { useState } from 'react'


function App() {
  const [query, setQuery] = useState('')
  
  return (
    <div>
      <Header query={query} setQuery={setQuery}/>
      
      <Routes>
        <Route path='/' element={<Home query={query}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
