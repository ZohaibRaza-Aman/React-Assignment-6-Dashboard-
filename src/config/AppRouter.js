import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Posts from "../Screens/Posts";
import SinglePost from "../Screens/Singlepost";
import Comments from "../Screens/comments"
import CommentsForm from "../Screens/commentsform";
import DropDL from "../Screens/dropdownlist";
import Dashboard from "../Screens/Dashboard";


export default function AppRouter () {
  return (
    <>
      <BrowserRouter>
        <nav>
          {/* <Link to="/">Home Page</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="about">About Page</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="post">Posts Page</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="commentsform/:id">CommentsForm</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to="dropdownlist">Dropdownlist</Link>
          &nbsp; &nbsp; &nbsp; */}
          <Link to="Dashboard">Dashboard Page</Link>
        </nav>

          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="post" element={<Posts />} />
            <Route path="singlepost" element={<SinglePost />} />
            <Route path="comments" element={<Comments />} />
            <Route path="/commentsform/:id" element={<CommentsForm />} />
            <Route path="dropdownlist" element={<DropDL/>} /> */}
            <Route path="Dashboard/*" element={<Dashboard />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}


