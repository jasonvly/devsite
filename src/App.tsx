import React from 'react';
import Header from './Header';
import Home from './Home';
// import { BrowserRouter } from 'react-router-dom';

class App extends React.Component<{}, {}> {
    constructor() {
        super({})
    }

    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        )
    }

}

export default App;