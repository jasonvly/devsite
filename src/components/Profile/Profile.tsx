import React from 'react';
import './Profile.css';
import Pixelson from './Pixelson.png'

import { Card, Image, Container, Row, Col } from 'react-bootstrap';

const Profile = () => {
    return (
        <div>
            <Card>
                <Container>
                    <Row>
                        <Col className="d-flex align-items-center">
                            <Image className="profile-avatar mx-auto" src={Pixelson} roundedCircle fluid />
                        </Col>
                    </Row>
                    <Row>
                    <Card.Body>
                        <Card.Title className="profile-name"><h4><b>JASON LY</b></h4></Card.Title>
                        <Card.Text>
                            Recent UNSW Computer Science and Finance graduate and web developer in Sydney.
                        </Card.Text>
                        <hr/>
                        <ul>
                            <li><Card.Link href="https://github.com/jasonvly">github</Card.Link></li>
                            <li><Card.Link href="https://www.linkedin.com/in/jason-v-ly">linkedin</Card.Link></li>
                        </ul>
                    </Card.Body>
                    </Row>
                </Container>
            </Card>
        </div>
    )
}

export default Profile;