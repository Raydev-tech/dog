import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return ( 
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <Toaster />
    </div>
  );
}
 
export default App;