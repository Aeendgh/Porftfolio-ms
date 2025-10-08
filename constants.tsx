
import type { Skill, Experience, Education, Certificate, Project, Hobby } from './types';

// Generic Icons
export const IconCode = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);
// Skill Icons
export const IconPhp = ({ className = "w-10 h-10" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M12 1.29l-1.45.83v19.76l1.45.83l1.45-.83V2.12L12 1.29M4.64 6.05l-1.45.83v10.24l1.45.83l1.45-.83V6.88L4.64 6.05m14.72 0l-1.45.83v10.24l1.45.83l1.45-.83V6.88l-1.45-.83m-9.52 1.7L8.6 8.58l-1.25.72l1.25.72l1.24-.73v-.01M7.35 11l-1.25.72l1.25.72l1.24-.73l-1.24-.71m2.5 1.44l-1.25.72l1.25.72l1.24-.73l-1.24-.71m1.2 2.87l1.25-.72l-1.25-.72l-1.24.73v.01l1.24.7zm1.3-1.43l1.24-.72l-1.24-.72l-1.25.73l1.25.71m-2.5-1.44l1.24-.72l-1.24-.72l-1.25.73l1.25.71M18.1 7.74l1.25-.72l-1.25-.72l-1.24.73v.01l1.24.7zm-1.25 2.88l-1.25.72l1.25.72l1.24-.73l-1.24-.71m2.5 1.44l-1.25.72l1.25.72l1.24-.73l-1.24-.71"/></svg>;
export const IconPython = ({ className = "w-10 h-10" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M12.01 2.25c-2.31 0-3.32.13-4.5.42c-2.07.5-3.35 1.77-3.85 3.85c-.29 1.18-.42 2.2-.42 4.5c0 2.26.13 3.28.42 4.46c.5 2.08 1.78 3.36 3.85 3.85c1.18.29 2.19.42 4.5.42c2.26 0 3.28-.13 4.46-.42c2.08-.5 3.36-1.78 3.85-3.85c.29-1.18.42-2.2.42-4.46c0-2.3-.13-3.32-.42-4.5c-.5-2.08-1.77-3.35-3.85-3.85c-1.18-.29-2.2-.42-4.46-.42m-2.12 3.22a2.12 2.12 0 1 1-4.24 0a2.12 2.12 0 0 1 4.24 0m10.6 10.6a2.12 2.12 0 1 1 0-4.24a2.12 2.12 0 0 1 0 4.24M12 12.75V18c0 .9.56 1.5 1.5 1.5H15v-1.5h-1.5V12h3V6H9.75c-3 0-3 2.25-3 2.25v1.5h4.5c.83 0 1.5.67 1.5 1.5v1.5Z"/></svg>;
export const IconDotNet = ({ className = "w-10 h-10" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M3 16.5a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 3 7.5h1.5v9zm4.5-9H6v9h1.5a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 7.5 7.5m4.5 9a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5m4.5-9a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5m6 0h-1.5v9H21a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 21 7.5"/></svg>;
export const IconSql = ({ className = "w-10 h-10" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M11.93 2.2L3.43 5.4v4.4c0 3.75 3.32 7.72 8.5 9.17c5.18-1.45 8.5-5.42 8.5-9.17V5.4l-8.5-3.2m-.94 13.97l-3.3-3.3l1.06-1.06l2.23 2.23l4.6-4.6l1.06 1.06l-5.65 5.67"/></svg>;
export const IconJs = ({ className = "w-10 h-10" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M9.5 17.5H7.5V11h2m2.13 6.5c.34.8-.29 1.5-1.13 1.5c-.83 0-1.5-.7-1.12-1.5l1.05-2.4h-2.1V11h3.38l-1.05 2.4l2.1 4.1M17 14.25c0 .93-.77 1.6-1.75 1.6s-1.75-.67-1.75-1.6V13c0-.93.77-1.5 1.75-1.5s1.75.57 1.75 1.5m-1.25-.25c0-.36-.25-.6-.75-.6s-.75.24-.75.6v1.25c0 .36.25.6.75.6s.75-.24.75-.6Z"/></svg>;
export const IconDb = ({ className = "w-10 h-10" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-4.42 0-8 1.79-8 4v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m0 2c3.31 0 6 1.34 6 3s-2.69 3-6 3s-6-1.34-6-3s2.69-3 6-3m-6 5h12c0 1.66-2.69 3-6 3s-6-1.34-6-3m0 5h12c0 1.66-2.69 3-6 3s-6-1.34-6-3"/></svg>;
export const IconApi = ({ className = "w-10 h-10" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m0 8h2v-6h-2m-2 4h2v-2H9m8-6v10H7V9h10m2-2H5v14h14V7M3 5h14v2H3m4 14h14v2H7"/></svg>;
export const IconLinux = ({ className = "w-10 h-10" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M2.5 12A9.5 9.5 0 0 1 12 2.5a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2.5 12M12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8m5.1 12.3c-.3-.2-.7-.3-1.1-.3s-.8.1-1.1.3c-.3.2-.6.4-.8.7l.8 1c.1-.1.1-.2.2-.3c.1-.1.2-.2.3-.2s.2-.1.3-.1c.3 0 .5.1.7.2c.2.2.3.4.3.7c0 .1 0 .2-.1.3c0 .1-.1.2-.1.2s-.1.2-.2.2s-.2.2-.3.2s-.2.2-.3.2c-.3.1-.7.2-1.1.3c-.4.1-.8.2-1.2.4c-.4.2-.8.4-1.1.7c-.3.3-.6.7-.7 1.1c-.2.4-.2.9-.2 1.4v.6h2.2v-1.1c0-.4.1-.7.2-1c.1-.2.3-.4.6-.5c.3-.1.6-.2.8-.3c.3-.1.5-.1.7-.1c.4 0 .7.1 1.1.3c.3.2.6.4.8.7l.9-1c-.1-.2-.3-.4-.5-.5c-.2-.2-.5-.3-.8-.4m-12 .7l.8-1c.1.2.3.4.5.5s.5.3.8.4c.3.2.7.3 1.1.3c.4 0 .8-.1 1.1-.3c.3-.2.6-.4.8-.7l-.8-1c-.1.1-.1.2-.2.3c-.1.1-.2.2-.3.2s-.2.1-.3.1c-.3 0-.5-.1-.7-.2c-.2-.2-.3-.4-.3-.7c0-.1 0-.2.1-.3c0-.1.1-.2.1-.2s.1-.2.2-.2s.2-.2.3-.2s.2-.2.3-.2c.3-.1.7-.2 1.1-.3c.4-.1.8-.2 1.2-.4c.4-.2.8-.4 1.1-.7c.3-.3.6-.7.7-1.1c.2-.4.2-.9.2-1.4v-.6H7.8v1.1c0 .4-.1.7-.2 1c-.1.2-.3.4-.6.5c-.3.1-.6.2-.8.3c-.3.1-.5.1-.7.1c-.4 0-.7-.1-1.1-.3c-.3-.2-.6-.4-.8-.7l-.9 1c.1.2.3.4.5.5c.2.2.5.3.8.4m5.2-17a.7.7 0 0 1 .7.7V4a.7.7 0 0 1-.7.7a.7.7 0 0 1-.7-.7V2.7a.7.7 0 0 1 .7-.7M9.2 5.5c.2.4.2.8 0 1.2c-.2.4-.6.6-1.1.6c-.4 0-.8-.2-1.1-.6c-.2-.4-.2-.8 0-1.2c.2-.4.6-.6 1.1-.6c.4 0 .8.2 1.1.6m5.6 0c.2.4.2.8 0 1.2c-.2.4-.6.6-1.1.6c-.4 0-.8-.2-1.1-.6c-.2-.4-.2-.8 0-1.2c.2-.4.6-.6 1.1-.6c.4 0 .8.2 1.1.6M8.1 8c-.4 0-.7.3-.7.7v1.8c0 .4.3.7.7.7s.7-.3.7-.7V8.7c0-.4-.3-.7-.7-.7m7.8 0c-.4 0-.7.3-.7.7v1.8c0 .4.3.7.7.7s.7-.3.7-.7V8.7c0-.4-.3-.7-.7-.7m-5.4.1c-1 .2-1.8.8-2.2 1.5c-.5.7-.7 1.6-.7 2.6c0 .7.1 1.3.4 1.9c.3.6.7 1.1 1.2 1.5c.6.4 1.2.6 1.9.8c.1 0 .1 0 .2 0c.7-.1 1.4-.4 1.9-.8c.6-.4 1-.9 1.2-1.5c.3-.6.4-1.2.4-1.9c0-1-.2-1.9-.7-2.6c-.5-.7-1.2-1.3-2.2-1.5c-.2-.1-.5-.1-.7 0Z"/></svg>;
export const IconWordpress = ({ className = "w-10 h-10" }: { className?: string }) => <svg className={className} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm6.73 13.43c-1.3 2.05-3.88 4.2-7.38 4.2c-.2 0-.4-.02-.6-.04c-.3-.02-1.2-.18-.9-1.34c.1-.4.28-1.04.28-1.54c0-1.4-.6-2.02-1.3-2.62c-.5-.4-1.1-.8-1.1-1.52c0-.52.3-1.02 1.1-1.02c.9 0 1.7.6 2.4 1.5l1.6-1.1c-.6-.8-1.4-2.1-3.2-2.1c-1.2 0-2.3.6-2.3 1.9c0 1 .8 1.5 1.4 2c.5.4 1.2.8 1.2 1.72c0 .6-.2 1.4-1.2 1.62c-.1.02-.2.02-.3.02c-1.3 0-2.4-.7-3.4-2l-1.3 1.1c.9 1.4 2.1 2.9 4.8 2.9c.2 0 .4 0 .6-.02c2.1-.12 3.6-1.5 3.6-3.3c0-.6-.1-1.1-.3-1.6l-3.3-8.2h3.5l2 5.5l2.2-5.5h3.3l-4.5 9.7z"/></svg>;

// Hobby Icons
export const IconBookOpen = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);
export const IconDumbbell = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l-4.5 4.5m0 0l-4.5 4.5m4.5-4.5l4.5 4.5m0-4.5l-4.5-4.5M3 12h18" />
    </svg>
);
export const IconGlobe = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.7 9a9 9 0 015.4-2.828M12 21a9.003 9.003 0 008.354-5.646M3.055 11A9.003 9.003 0 0112 3c3.859 0 7.218 2.228 8.945 5.564m-17.89 0A9.003 9.003 0 0112 21c2.14 0 4.14-.775 5.646-2.07M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
export const IconMusic = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
    </svg>
);
export const IconBeaker = ({ className = "w-10 h-10" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2.25 2.25 0 003.182-3.182l-8.25-8.25a2.25 2.25 0 00-3.182 0l-8.25 8.25a2.25 2.25 0 003.182 3.182m8.25-8.25v9.375m-3.375-3.375h6.75" />
    </svg>
);


// DATA
export const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Works", href: "#works" },
    { name: "Education", href: "#education" },
    { name: "Hobbies", href: "#hobbies" },
    { name: "Contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: 'PHP', category: 'Languages & Frameworks', icon: IconPhp },
  { name: 'Python', category: 'Languages & Frameworks', icon: IconPython },
  { name: 'ASP.NET', category: 'Languages & Frameworks', icon: IconDotNet },
  { name: 'SQL', category: 'Languages & Frameworks', icon: IconSql },
  { name: 'JavaScript', category: 'Languages & Frameworks', icon: IconJs },
  { name: 'SQL Server', category: 'Databases', icon: IconDb },
  { name: 'MySQL', category: 'Databases', icon: IconDb },
  { name: 'WordPress', category: 'Web Tools', icon: IconWordpress },
  { name: 'REST APIs', category: 'Web Tools', icon: IconApi },
  { name: 'Linux (LPIC)', category: 'DevOps / Linux', icon: IconLinux },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Senior Backend Developer',
    company: 'Kerman Motor',
    duration: 'March 2023 – Present',
    description: 'Developing and maintaining backend infrastructure for large-scale enterprise systems. Responsible for database management, API design, and system performance optimization. Collaborating with cross-functional teams to ensure high-quality software delivery.'
  }
];

export const EDUCATIONS: Education[] = [
  { degree: 'Bachelor of Computer Engineering', university: 'University of Bam', year: 2023 },
  { degree: 'Bachelor of Genetics', university: 'Bahonar University', year: 2017 },
];

export const CERTIFICATES: Certificate[] = [
  { name: 'ASP.NET', hours: 120, icon: IconDotNet },
  { name: 'LPIC 1 & 2', hours: 100, icon: IconLinux },
  { name: 'PHP', hours: 90, icon: IconPhp },
  { name: 'Python', hours: 60, icon: IconPython },
  { name: 'SQL Server', hours: 55, icon: IconSql },
  { name: 'WordPress', hours: 44, icon: IconWordpress },
];

export const PROJECTS: Project[] = [
    {
        title: 'Enterprise ERP System',
        description: 'A comprehensive backend system for managing company resources, including inventory, sales, and HR.',
        tech: ['PHP', 'MySQL', 'REST API'],
        imageUrl: 'https://picsum.photos/seed/project1/400/300',
        codeUrl: '#',
    },
    {
        title: 'Data Analysis Pipeline',
        description: 'A Python-based tool for processing and analyzing large datasets for business intelligence.',
        tech: ['Python', 'SQL Server'],
        imageUrl: 'https://picsum.photos/seed/project2/400/300',
        liveUrl: '#',
        codeUrl: '#',
    },
    {
        title: 'Customer Portal',
        description: 'A secure web portal for customers to manage their accounts, built with ASP.NET.',
        tech: ['ASP.NET', 'JavaScript'],
        imageUrl: 'https://picsum.photos/seed/project3/400/300',
        liveUrl: '#',
    },
    {
        title: 'E-commerce Platform API',
        description: 'A scalable REST API to power a modern e-commerce website and mobile application.',
        tech: ['PHP', 'REST API'],
        imageUrl: 'https://picsum.photos/seed/project4/400/300',
        codeUrl: '#',
    },
];

export const HOBBIES: Hobby[] = [
    { name: 'Reading Tech Blogs', icon: IconBookOpen },
    { name: 'Fitness & Outdoors', icon: IconDumbbell },
    { name: 'Traveling', icon: IconGlobe },
    { name: 'Music', icon: IconMusic },
    { name: 'Technology Experiments', icon: IconBeaker },
];
