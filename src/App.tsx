import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [ isAuth, setIsAuth ] = useState<boolean>(localStorage.getItem("isAuth") === "true");

  return (
    <Router>
      <Navbar isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreatePost isAuth={isAuth} />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;

// firebase データベース
// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }