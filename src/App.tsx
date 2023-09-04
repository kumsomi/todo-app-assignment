import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { Todos } from './pages/todos';
import { About } from './pages/about';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos/> } />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
