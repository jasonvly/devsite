import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Experience } from './views/Experience';
import { Container } from 'react-bootstrap';

const Routes = () => {
    return (

        <div className="main">
            <Switch>
                <Container>
                <Route exact path="/" component={Home}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/projects" component={Home}/>
                <Route path="/education" component={Home}/>
                <Route path="/contact" component={Home}/>
                
                </Container>
            </Switch>
        </div>

    );
}

export default Routes;