import React from 'react';
import './Entry.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export interface IEntryProps {
    title: string,
    company: string,
    period: string,
    description: string[],
    link?: string
}

const Entry = (props: IEntryProps) => {
    const descriptions = props.description.map((item) =>
        <li>{item}</li>
    );

    return (
        <div>
            <Row>
                <Col className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle>{props.company}</Card.Subtitle>
                            <hr/>
                            <Card.Text><ul>{descriptions}</ul></Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">{props.period}</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Entry;
