import React from 'react';

class Header extends React.Component<{}, {}> {
    constructor() {
        super({})
    }

    render() {
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>About</li>
                </ul>
            </div>
        )
    }

}

export default Header;