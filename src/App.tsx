import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import FallBack from "./pages/FallBack"
import Products from "./pages/Products"
import Deliveries from "./pages/Deliveries"
import Navbar from "./components/NavBar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/*" element={<FallBack />} />
      </Routes>
    </>
  )
}

export default App