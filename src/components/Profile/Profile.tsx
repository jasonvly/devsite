import React from 'react';
import './Profile.css';

import { Card, Image } from 'react-bootstrap';

const Profile = () => {
    return (
        <div>
            <Card>
                <Image className="profile-avatar mx-auto" src="https://placeholder.pics/svg/250" roundedCircle fluid />
                <Card.Body>
                    <Card.Title className="profile-name"><h4>Jason Ly</h4></Card.Title>
                    <Card.Text>
                        Recent Computer Science and Finance graduate and aspiring web developer in Sydney, Australia.
                    </Card.Text>
                    <hr/>
                    <ul>
                        <li><Card.Link href="https://github.com/jasonvly">github</Card.Link></li>
                        <li><Card.Link href="https://www.linkedin.com/in/jason-v-ly">linkedin</Card.Link></li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Profile;