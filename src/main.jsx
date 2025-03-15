import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from "./components/home.jsx"
import Show from "./components/show.jsx"
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/show" element={<Show></Show>}></Route>
  </Routes>
  </BrowserRouter>
)
