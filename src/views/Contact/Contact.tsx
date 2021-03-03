import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
        <Card>
            <Card.Body>
                <Card.Title>Send me a message</Card.Title>
                <Form action="https://formspree.io/jasonyx.ly@gmail.com" method="POST">
                    
                    {/* Email field */}
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" />
                        <Form.Text className="text-muted">
                            Don't worry, I'm not interested in sharing your email with anyone.
                        </Form.Text>
                    </Form.Group>

                    {/* Name field */}
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name"/>
                    </Form.Group>

                    {/* Message field */}
                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter message" name="message"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Card.Body>
        </Card>
        </>
    );
}

export default Contact;