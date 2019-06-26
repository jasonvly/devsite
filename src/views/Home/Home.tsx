import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Home = () => {

    
    return (
        <div>
            <Card>
                <Card.Body>

                    <Row>
                        <Col md="auto">
                            Hello
                        </Col>
                        <Col>
                            It's me
                        </Col>
                    </Row>

                </Card.Body>
                
            </Card>
        </div>
    )

}

export default Home;