import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Countcontext } from './context/Countcontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
 <Countcontext>
    <App />
    </Countcontext>
)
