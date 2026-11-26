import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Facilities from './pages/Facilities'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './styles.css'

function NotFound(){return <div className="not-found"><h1>Page not found</h1><a href="/">Back to home</a></div>}
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><Routes><Route element={<Layout/>}><Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="facilities" element={<Facilities/>}/><Route path="gallery" element={<Gallery/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></BrowserRouter></React.StrictMode>)
