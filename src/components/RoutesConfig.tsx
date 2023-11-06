import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

const RoutesConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<h1>404 | Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesConfig