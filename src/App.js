import React from "react";
import User from './AddUser';
import UserPraticeDetails from "./AddUserPratice/UserPraticeDetails";
import MoviesView from "./Movies";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './app.css';
import Products from "./MyMyntra";
import ProductDetails from './MyMyntra/discription';
import Books from './Books'
import Colours from "./Colours";
import UseRefExamples from "./Hooks/UseRef";
import Notes from "./NoteIt";
import FormView from "./NoteIt/Form";
import SelectTimesPage from "./Selector";
import WorkList from "./WorkList";
import MoviePicker from "./BookMyShow"
import UserDetails from "./UserWealth"
import SearchMeal from "./Meal Finder"
import BlogList from "./My Blog"
import Quiz from "./Quiz";

function App() {


    // useEffect(() => {
    //     (async () => {

    //         let movieDetails = await MovieDetails('tt0944947', 'US');
    //         console.log(movieDetails);
    //     })();
    // }, [])
    const NoPageFound = () => <h1>page not found</h1>;
    return (



        <BrowserRouter>
            <ul className="menu">
                <li>
                    <Link to="/movies" >Movies</Link>
                </li>
                <li>
                    <Link to="/todo" >To Do</Link>
                </li>
                <li>
                    <Link to="/users" >Users</Link>
                </li>
                <li>
                    <Link to="/products" >Products</Link>
                </li>
                <li>
                    <Link to="/product-details" >Product Details</Link>
                </li>
                <li>
                    <Link to="/books" >Books</Link>
                </li>
                <li>
                    <Link to="/colours" >Colours</Link>
                </li>
                <li>
                    <Link to="/ref" >Use Ref Example</Link>
                </li>
                <li>
                    <Link to="notes">Notes</Link>
                </li>
                <li>
                    <Link to="selector">Selector</Link>
                </li>
                <li>
                    <Link to="/worklist">WorkList</Link>
                </li>
                <li>
                    <Link to="/moviepicker">BookMyShow</Link>
                </li>
                <li>
                    <Link to="/userdetails">UserWealth</Link>
                </li>
                <li>
                    <Link to="searchmeal" >SearchMeal</Link>
                </li>
                <li>
                    <Link to="bloglist">BlogList</Link>
                </li>
                <li>
                    <Link to="quiz">Quiz</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<MoviesView />} />
                <Route path="/movies" element={<MoviesView />} />
                <Route path="/todo" element={<User />} />
                <Route path="/users" element={<UserPraticeDetails />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product-details/:id" element={<ProductDetails />} />
                <Route path="/books" element={<Books />} />
                <Route path="/colours" element={<Colours />} />
                <Route path="/ref" element={<UseRefExamples />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/noteform/:id?" element={<FormView />} />
                <Route path="/selector" element={<SelectTimesPage />} />
                <Route path="/worklist" element={<WorkList />} />
                <Route path="/moviepicker" element={<MoviePicker />} />
                <Route path="/userdetails" element={<UserDetails />} />
                <Route path="/searchmeal" element={<SearchMeal />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/bloglist" element={<BlogList />} />
                <Route path="*" element={<NoPageFound />} />
            </Routes>
        </BrowserRouter>
    )

}
export default App;







