import React from 'react';
import { Entry } from '../../components/Entry';

const entry1 = {
    title: "Club Website",
    company: "Housecats Volleyball Club",
    period: "2019",
    description: [
        "Currently a frontend-only website created using React + TypeScript + Bootstrap",
        "Lists club information and contact details, with potential backend integration on the way"
    ],
    link: "https://www.google.com.au"
};

const entry2 = {
    title: "Temporal - Group Capstone Project",
    company: "UNSW COMP4920 Ethics and Management",
    period: "2018 SEMESTER 2",
    description: [
        "Created VS Code Extension, to track and report productivity when using VS Code",
        "Developed frontend using combination of ReactJS + MobX, TypeScript and graph libraries to make JSON API calls to secure backend",
        "Utilised Agile project management methodology, communication and versioning tools including git, JIRA, Slack, Trello to ensure objectives were met according to requirements"

    ]
};

const entry3 = {
    title: "nginx kitty fuzzer - Major Research Project",
    company: "UNSW COMP9447 Security Engineering Workshop",
    period: "2016 SEMESTER 2",
    description: [
        "Developed fuzzer to attempt to penetrate early versions of nginx using Python and Kitty framework",
        "Conducted experimental cross-site scripting attacks to expose vulnerabilities in trivial code applications",
        "Studied best practices and countermeasures against firewall attacks, social engineering and detection methods"
    ]
};


const Projects = () => {
    return (
        <>
            <Entry {... entry1}/>
            <Entry {... entry2}/>
            <Entry {... entry3}/>
        </>
    );
}

export default Projects;