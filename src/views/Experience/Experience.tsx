import React from 'react';
import { Entry } from '../../components/Entry';

const entry1 = {
    title: "Junior Systems Team Member",
    company: "NTT Data Figtree Systems",
    period: "OCTOBER 2018 - PRESENT",
    description: [
        "Administration and installation of company IBS, JIRA software and MySQL/PostgreSQL databases for approximately 100 staff members",
        "Development of customised Groovy scripts to interface with JIRA software to facilitate and improve internal software development processes and workflows",
        "Researching and implementing tools to improve business procedures, such as migration of staff intranet to Confluence server to unify internal documentation"
    ]
};

const entry2 = {
    title: "Relocator Mover & IT Installer",
    company: "T&T McNaught Transport & Logistics",
    period: "JUNE 2018 - PRESENT",
    description: [
        "Connecting, installing and testing of various IT equipment for businesses including computers, furniture, monitors and keyboards",
        "Tagging, sorting and cataloguing client equipment ready for relocation of office environments"
    ]
};

const entry3 = {
    title: "Sales Consultant" ,
    company: "Dick Smith Electronics",
    period: "OCTOBER 2015 - MAY 2016",
    description: [
        "Communicated with a diverse range of customers to ascertain needs before recommending technical products and solutions",
        "Deployed manufacturer specific software on devices in preparation for sale",
        "Provided high levels of customer service demonstrated through exceeding monthly sales targets and KPIs"
    ]
};

const entry4 = {
    title: "IT Hero Support Volunteer" ,
    company: "University of New South Wales IT",
    period: "JULY 2015 - DECEMBER 2015",
    description: [
        "Provided on-campus technical support to university students and staff, including usage of Microsoft Active Directory and email setup on iOS, Windows and Android devices",
        "Researched new methods and services to improve IT experience"
    ]
};

const Experience = () => {
    return (
        <>
            <Entry {... entry1}/>
            <Entry {... entry2}/>
            <Entry {... entry3}/>
            <Entry {... entry4}/>
        </>
    );
}

export default Experience;