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
            <>
                <BrowserRouter>
                    <NavBar/>
                    <Routes/>
                </BrowserRouter>
            </>
        )
    }

}

export default App;