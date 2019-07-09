import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
        <Card>
            <Card.Body>
                <Form action="https://formspree.io/jasonyx.ly@gmail.com" method="POST">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>

                    </Form.Group>                        
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
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