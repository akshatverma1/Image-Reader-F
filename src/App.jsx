import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ProductPage from "./pages/ProductPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import SolutionsPage from "./pages/SolutionsPage"
import CollaborationPage from "./pages/CollaborationPage"
import Show from "./components/show.jsx"
import ComingSoon from "./pages/ComingSoon.jsx"
function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/collaboration" element={<CollaborationPage />} />
            <Route path="/show" element={<Show></Show>}></Route>
            <Route path="/comingsoon" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

