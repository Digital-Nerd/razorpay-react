import "./App.css";
import Home from "./Home";
import Jitsi from "./Jitsi";
import Product from "./Product";
// import Video from "./Video";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Video } from "./Video";

function App() {
  return (
    // <div className="App">
    //   <Product/>
    // </div>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/razorpay" element={<Product />} />           
          <Route path="/jitsi" element={<Jitsi />} />
          {/* <Route path="/jitsi" element={<Video/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
