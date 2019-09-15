import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import Board from '../src/pages/Board';
import Home from '../src/pages/Home';

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/" Component={Board}/>
                <Route path="/board" Component={Home}/>
            </div>
        )
    }    
}

export default App;
