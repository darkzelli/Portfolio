import React from 'react';
import Home from './componets/home/Home'


const App = () => {
    return(
        <body className='app'>
            <div className='container'>
                <section id='home'><Home/></section>
            </div>
        </body>
    );
}

export default App;