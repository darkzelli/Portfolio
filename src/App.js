import React from 'react';
import Home from './componets/home/Home';
import Projects from './componets/projects/Projects';


const App = () => {
    return(
        <body className='app_body'>
            <div className='app_container'>
                <section className='app_home'><Home /></section>
                <section className='app_projects'><Projects /></section>
            </div>
        </body>
    );
}

export default App;