import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Experience } from './views/Experience';
import { Projects } from './views/Projects';
import { Container } from 'react-bootstrap';
import { NoMatch } from './views/NoMatch';

const Routes = () => {
    return (
        <div className="main">
            <Container>
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/experience" component={Experience}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route component={NoMatch}/>
            </Switch>
            </Container>

        </div>
    );
}

export default Routes;