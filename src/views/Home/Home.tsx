import React from 'react';
import { Profile } from "../../components/Profile";
import { AboutMe } from "../../components/AboutMe";
import { Skills } from '../../components/Skills';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Row>
                <Col sm={4} className="mb-4">
                    <Profile/>
                </Col>
                <Col sm={8} className="mb-4">
                    <Row>
                        <Col className="mb-4">
                            <AboutMe/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-4">
                            <Skills/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Home;