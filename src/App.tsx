import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Routes from './routes';

class App extends React.Component<{}, {}> {
    constructor() {
        super({})
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavBar/>
                    <Routes/>
                </BrowserRouter>
            </div>
        )
    }

}

export default App;