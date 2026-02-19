window.global = window;
import { createRoot } from 'react-dom/client'
import './index.css'
import DemoShowcase from './pages/DemoShowcase.jsx'


createRoot(document.getElementById('root')).render(

    <DemoShowcase />
 
)
