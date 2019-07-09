import React from 'react';
import './AboutMe.css';

import { Card } from 'react-bootstrap';


const AboutMe = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>About</Card.Title>
                    <Card.Text>
                        <p>Passionate about frontend and full stack software development. Also experienced in system administration and cybersecurity. Open-minded, a strong believer in working together and appreciative of nice design.</p>

                        <p>In my spare time I am interested in self-hosting OSS, playing volleyball and more recently, learning to play the bass.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AboutMe;