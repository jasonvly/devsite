import React from 'react';
import './Skills.css';
import { ButtonToolbar, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Skills = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Skills & Tools</Card.Title>
                    <Card.Text>
                        <Container>
                            <Row>
                                <Col className="mb-2" sm={2}>Frontend</Col>
                                <Col>
                                    <ButtonToolbar>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>HTML</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>CSS</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>JavaScript ES6</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>TypeScript</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>React</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>Bootstrap</Button>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="mb-2" sm={2}>Backend</Col>
                                <Col>
                                    <ButtonToolbar>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>Node.js</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>Python</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>Java</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>C</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>MySQL</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>PostgreSQL</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>MongoDB</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>Express</Button>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="mb-2" sm={2}>Tools</Col>
                                <Col>
                                    <ButtonToolbar>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>Git</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>JIRA</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>Trello</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>Bash</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>VS Code</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>Vim</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>Docker</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>SSH</Button>
                                        <Button className="mr-2 mb-2" variant="outline-primary" size="sm" disabled>OpenVPN</Button>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Skills;