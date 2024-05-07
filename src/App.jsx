import './App.css'
import Book from './Components/BookPage.jsx';
import BookDetail from './Components/BookDetailsPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App
