import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Searchbar from "./components/searchbar/searchbar";
import Banner from "./components/banner/banner";
import ServicesSection from "./components/servicecard/servicesection";
import Blog from "./components/blog/blog";
import ListPage from "./routes/list/list";
import  RegisterPage from './components/choix/choix';
import SinglePage from "./routes/singlepage/singlepage";
import Profile from "./routes/profile/profile";
import Feedbacks from "./components/feedback/feedback";
import Footer from "./components/footer/footer";
import BlogPost from "./routes/blogpost/blogpost";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Searchbar /><Banner /><ServicesSection /><Blog/><Feedbacks/><Footer/></>} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/choix" element={<RegisterPage />} />
        <Route path="/details/:id" element={<SinglePage/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/service/:id" element={< SinglePage/>} />
        <Route path="/blog" element={<Blog/>} />

      </Routes>
    </Router>
  );
}

export default App;