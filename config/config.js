// Configuration for the Internet Governance Resource Hub
export const config = {
    appName: 'Internet Governance Resource Hub',
    version: '1.0.0',
    description: 'A collaborative, open-access directory for the Internet Governance ecosystem',
    port: process.env.PORT || 8000,
    environment: process.env.NODE_ENV || 'development',
    
    // Theme colors
    colors: {
        primary: '#0066cc',
        primaryDark: '#0052a3',
        primaryLight: '#e6f0ff',
        secondary: '#ff6b35',
        accent: '#00d4ff',
        dark: '#1a1a2e',
        light: '#f8f9fa',
        gray: '#6c757d',
        white: '#ffffff'
    },
    
    // Routes configuration
    routes: [
        {
            path: '/',
            title: 'Home',
            file: 'index.html',
            description: 'Main hub page'
        },
        {
            path: '/conferences-events',
            title: 'Conferences & Events',
            file: 'conferences-events/conferences-events.html',
            description: 'Major events and forums in Internet Governance'
        },
        {
            path: '/fellowships-scholarships',
            title: 'Fellowships & Scholarships',
            file: 'fellowships-scholarships/fellowships-scholarships.html',
            description: 'Learning and growth programs'
        },
        {
            path: '/funding',
            title: 'Funding',
            file: 'funding/funding.html',
            description: 'Funding for IG projects'
        },
        {
            path: '/jobs-internships',
            title: 'Jobs & Internships',
            file: 'jobs-internships/jobs-internships.html',
            description: 'Career opportunities in Internet Governance'
        }
    ]
};

export default config;
