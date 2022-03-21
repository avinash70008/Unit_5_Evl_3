import { Routes, Route } from "react-router";
import { Home } from "../Components/Home/Home";
import { Section } from "../Components/Section/Section";
import { BookDetailsPage } from "../Components/BookDetailsPage/BookDetailsPage";
import { NotFound } from "../Components/NotFound/NotFound";
import { Navbar } from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

export const AllRoutes = () => {
  return (
     <div>
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
        <Link to="/">Home</Link>
        <Link to="/BookCard">Book Card</Link>
        <Link to="/BookDetailsPage">Book Details Page</Link>
        <Link to="/NotFound">Not Found</Link>
        <Link to="/Section">Section</Link>
        </div>
  );
};
