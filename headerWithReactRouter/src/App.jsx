import { Navigate, Routes, Route } from "react-router";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import Users from "./UserList";
import UserDetail from "./UserDetails";

function App() {
  return (
    <>
      {/* <NavBar/> */}

      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/list?" element={<Users />} />
          <Route path="/users/:id/:name?" element={<UserDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/login" element={<Login />} />
        </Route>

        <Route path="/college" element={<College />}>
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
