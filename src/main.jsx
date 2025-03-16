import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from "./components/home.jsx"
import Show from "./components/show.jsx"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
  </StrictMode>
)
