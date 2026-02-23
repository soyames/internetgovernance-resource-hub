// Sample data structures for the Internet Governance Resource Hub
// This file demonstrates how to structure content data in JavaScript/JSON

export const navItems = [
    {
        id: 'home',
        name: 'Home',
        path: '/',
        icon: 'fas fa-home'
    },
    {
        id: 'conferences',
        name: 'Conferences & Events',
        path: '/conferences-events',
        icon: 'fas fa-calendar'
    },
    {
        id: 'fellowships',
        name: 'Fellowships & Scholarships',
        path: '/fellowships-scholarships',
        icon: 'fas fa-graduation-cap'
    },
    {
        id: 'funding',
        name: 'Funding',
        path: '/funding',
        icon: 'fas fa-dollar-sign'
    },
    {
        id: 'jobs',
        name: 'Jobs & Internships',
        path: '/jobs-internships',
        icon: 'fas fa-briefcase'
    }
];

export const sections = [
    {
        id: 'conferences',
        title: 'Conferences & Events',
        icon: 'fas fa-calendar-alt',
        description: 'Stay up to date with major events, forums, and policy gatherings',
        categories: [
            'Internet Governance',
            'Tech & Digital Policy',
            'Cybersecurity',
            'Digital Inclusion & Human Rights',
            'Open Source & Internet Infrastructure'
        ]
    },
    {
        id: 'fellowships',
        title: 'Fellowships, Scholarships & Mentorships',
        icon: 'fas fa-book',
        description: 'Find programs that support your learning and growth',
        categories: [
            'Introductory Programs',
            'Advanced Fellowships',
            'Mentorship Programs',
            'Scholarships'
        ]
    },
    {
        id: 'jobs',
        title: 'Job & Internship Boards',
        icon: 'fas fa-suitcase',
        description: 'Curated listings for careers in Internet Governance',
        categories: [
            'Policy & Advocacy',
            'Internet Infrastructure',
            'Privacy & Security',
            'International Organizations'
        ]
    },
    {
        id: 'funding',
        title: 'Funding for IG Projects',
        icon: 'fas fa-coins',
        description: 'Get funding for your ideas and initiatives',
        categories: [
            'National/Regional IGF Initiatives',
            'Research Projects',
            'Community Outreach',
            'Open Internet Advocacy'
        ]
    }
];

export const footer = {
    sections: [
        {
            title: 'Navigation',
            links: [
                { text: 'Home', url: '/' },
                { text: 'Conferences & Events', url: '/conferences-events' },
                { text: 'Fellowships & Scholarships', url: '/fellowships-scholarships' },
                { text: 'Funding', url: '/funding' },
                { text: 'Jobs & Internships', url: '/jobs-internships' }
            ]
        },
        {
            title: 'Resources',
            links: [
                { text: 'Contributing', url: '/CONTRIBUTING.md' },
                { text: 'License', url: '/LICENSE' },
                { text: 'Authors', url: '/AUTHORS.md' }
            ]
        }
    ],
    social: [
        {
            name: 'Twitter',
            icon: 'fab fa-twitter',
            url: '#'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin',
            url: '#'
        },
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            url: '#'
        }
    ],
    copyright: '© 2026 Internet Governance Resource Hub. All rights reserved.'
};

export default {
    navItems,
    sections,
    footer
};
