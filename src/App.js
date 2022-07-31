import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Home } from "./pages/Home";
import { ExeciserDetails } from "./pages/ExeciserDetails";
import Navbar from "./comp/Navbar";
import { Footer } from "./comp/Footer";
import './App.css'; 

const App = () =>{
    return (
       <Box>
        <Navbar />
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/exercise/:id" element={ <ExeciserDetails />}/>
        </Routes>
        <Footer />
        </Box>
        
    )
}

export default App;