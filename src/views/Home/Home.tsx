import React from 'react';
import { Profile } from "../../components/Profile";
import { AboutMe } from "../../components/AboutMe";

import { Col, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Row>
                <Col sm={4} className="mb-4">
                    <Profile/>
                </Col>
                <Col sm={8}>
                    <AboutMe/>
                </Col>
            </Row>
        </div>
    )
}

export default Home;