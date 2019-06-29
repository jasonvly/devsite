import React from 'react';

import { Card } from 'react-bootstrap';

const NoMatch = () => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>404, buddy!</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default NoMatch;