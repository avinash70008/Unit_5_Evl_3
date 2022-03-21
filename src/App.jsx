
import './App.css'
import {Routes, Route} from "react-router-dom"
import { BookCard } from './components/BookCard'
import { BookDetailsPage } from './components/BookDetailsPage'
import { Navbar } from './components/Navbar/Navbar'
import { ProductDetails } from './components/ProductDetails'
import {Link} from "react-router-dom"
// avinash


function App() {
  return (
    <div className="App">
       <Link to="/">Home</Link>
        <Link to="/BookCard">Book Card</Link>
        <Link to="/BookDetailsPage">Book Details Page</Link>
        <Link to="/NotFound">Not Found</Link>
        <Link to="/Section">Section</Link>
   
    </div>
  );
}

export default App;
