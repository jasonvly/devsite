import React from 'react';
import './Profile.css';
import Pixelson from './Pixelson.png'

import { Card, Image, Container, Row, Col } from 'react-bootstrap';

const Profile = () => {
    return (
        <div>
            <Card>
                <Container>
                    <Card.Body>
                        <Row>
                            <Col className="d-flex align-items-center mb-2">
                                <Image className="profile-avatar mx-auto" src={Pixelson} roundedCircle fluid />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card.Title className="profile-name"><h3><b>JASON LY</b></h3></Card.Title>
                                <Card.Text>
                                Technologist, strong believer in teamwork and using the right tool for the job. <p></p>
                                Based in Sydney. 
                                </Card.Text>
                                <hr/>
                                <ul>
                                    <li><Card.Link href="https://github.com/jasonvly">github</Card.Link></li>
                                    <li><Card.Link href="https://www.linkedin.com/in/jason-v-ly">linkedin</Card.Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Card.Body>
                </Container>
            </Card>
        </div>
    )
}

export default Profile;