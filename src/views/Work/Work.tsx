import React from 'react';
import { Entry } from '../../components/Entry';

const entries = [
    {
        title: "Solution Engineer",
        company: "Appian Corporation",
        period: "JANUARY 2020 - FEBRUARY 2021",
        description: [
            "Responded to critical client infrastructure and AWS cloud alerts by live troubleshooting environments, maintaining 99.95% uptime in accordance with SLA.",
            "Captured requirements from client system administrators and product owners of financial institutions, governments, universities and corporations to implement changes and features with expert product knowledge knowledge.",
            "Performed deep investigation on client systems to identify bugs or design issues, including thread, heap, log analysis, and collaborated with partners, product engineering and account executives whilst adhering to strict security policies.",
            "Configured various computing technologies including databases, VPNs, distributed systems, domain names and the overall product platform.",
            "Solved complex technical problems across the full stack and communicated solutions clearly to stakeholders and customers with differing levels of expertise.",

        ]
    },
    {
        title: "Junior Systems Jira Administrator",
        company: "NTT Data Figtree Systems",
        period: "OCTOBER 2018 - NOVEMBER 2019",
        description: [
            "Administration and maintenance of company internal business system, JIRA and Confluence servers, through licensing, user management, permissions, updates and backups for approximately 100 staff members",
            "Creating customised ScriptRunner Groovy scripts, listeners and workflows and researching and testing add-on integration to facilitate and improve internal company processes",
            "Installation of configuration of PostgreSQL/MySQL and SMTP server for use in JIRA development and production environments",
            "Upgraded staff intranet to internal Confluence system, including division of departments and user interface to improve internal documentation procedures",
        ]
    },
    {
        title: "Relocator Mover & IT Installer",
        company: "T&T McNaught Transport & Logistics",
        period: "JUNE 2018 - PRESENT",
        description: [
            "Connecting, installing and testing of various IT equipment for businesses including computers, furniture, monitors and keyboards",
            "Tagging, sorting and cataloguing client equipment ready for relocation of office environments"
        ]
    },
    {
        title: "Sales Consultant" ,
        company: "Dick Smith Electronics",
        period: "OCTOBER 2015 - MAY 2016",
        description: [
            "Communicated with a diverse range of customers to ascertain needs before recommending technical products and solutions",
            "Deployed manufacturer specific software on devices in preparation for sale",
            "Provided high levels of customer service demonstrated through exceeding monthly sales targets and KPIs"
        ]
    },
    {
        title: "IT Hero Support Volunteer" ,
        company: "University of New South Wales IT",
        period: "JULY 2015 - DECEMBER 2015",
        description: [
            "Provided on-campus technical support to university students and staff, including usage of Microsoft Active Directory and email setup on iOS, Windows and Android devices",
            "Researched new methods and services to improve IT experience"
        ]
    },
];

const Work = () => {
    return (
        <>
            <Entry {... entries[0]}/>
            <Entry {... entries[1]}/>
            <Entry {... entries[2]}/>
            <Entry {... entries[3]}/>
            <Entry {... entries[4]}/>
        </>
    );
}

export default Work;