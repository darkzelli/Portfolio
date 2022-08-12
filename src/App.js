import React from 'react';
import styles from './App.module.css';
import Home from './componets/home/Home'
import Skills from './componets/skills/Skills';
import Projects from './componets/projects/Projects';
import Navbar from './componets/navbar/Navbar';
import About from './componets/about/About';


const App = () => {
    return(
        <body className='app'>
            <div className='container'>
                <nav id='navbar'><Navbar/></nav>
                <section id='home'><Home/></section>
                <section id=' projects'><Projects/></section>
                <section id='skills'><Skills/></section>
                <section id='about'><About/></section>
            </div>
        </body>
    );
}

export default App;