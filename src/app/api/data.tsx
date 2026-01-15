import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "4.86",
        description: "Out of 5 stars from 3896 reviews on Google platform",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "364",
        description: "Client testimonials received in the year 2021",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "45M+",
        description: "Revenue generated through new projects & marketing",
    },
];

export const Progress = [
    { title: 'React & Next.js', Progress: 90 },
    { title: 'JavaScript & TypeScript', Progress: 88 },
    { title: 'HTML & CSS', Progress: 95 },
    { title: 'Responsive Design', Progress: 92 },
    { title: 'UI/UX Design', Progress: 85 }
];

export const Skills = [
    { name: 'React', icon: 'logos:react', progress: 90 },
    { name: 'Next.js', icon: 'logos:nextjs-icon', progress: 85 },
    { name: 'TypeScript', icon: 'logos:typescript-icon', progress: 80 },
    { name: 'JavaScript', icon: 'logos:javascript', progress: 90 },
    { name: 'HTML5', icon: 'logos:html-5', progress: 95 },
    { name: 'CSS3', icon: 'logos:css-3', progress: 90 },
    { name: 'Bootstrap', icon: 'logos:bootstrap', progress: 85 },
    { name: 'Git', icon: 'logos:git-icon', progress: 80 },
];

export const Servicebox = [
    {
        icon: 'solar:code-bold',
        title: 'Web Development',
        description: 'Building modern, responsive web applications using React, Next.js, and TypeScript. Creating fast, scalable, and user-friendly websites.',
    },
    {
        icon: 'solar:smartphone-bold',
        title: 'Responsive Design',
        description: 'Ensuring your website looks perfect on all devices. Mobile-first approach with seamless user experience across desktop, tablet, and mobile.',
    },
    {
        icon: 'solar:palette-bold',
        title: 'UI/UX Design',
        description: 'Creating beautiful and intuitive user interfaces. Focus on user experience, accessibility, and modern design principles.',
    },
]

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/Sky-Block.png'),
        alt: 'Sky Block',
        title: 'Sky Block',
        slug: 'sky-block',
        info: 'Building Materials Platform',
        demoUrl: 'https://sky-block-mu.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/QAF BookStore (1).png'),
        alt: 'QAF BookStore',
        title: 'QAF BookStore',
        slug: 'qaf-bookstore',
        info: 'Online Book Store',
        demoUrl: 'https://qafbookstore.github.io/Book-store-QAF/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/Mix-Kitcien.png'),
        alt: 'Mix Kitchen',
        title: 'Mix Kitchen',
        slug: 'mix-kitchen',
        info: 'Luxury Kitchens & Furniture',
        demoUrl: 'https://mix-kitchens.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript'],
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/lithioo-for-perfumes.png'),
        alt: 'Lithioo for Perfumes',
        title: 'Lithioo for Perfumes',
        slug: 'lithioo-for-perfumes',
        info: 'Perfume E-commerce Store',
        demoUrl: 'https://lithioo-for-perfumes.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript'],
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/farouja.png'),
        alt: 'Farouja',
        title: 'Farouja',
        slug: 'farouja',
        info: 'Poultry Products E-commerce',
        demoUrl: 'https://farouja.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript'],
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/Al-Saad Company.png'),
        alt: 'Al-Saad Company',
        title: 'Al-Saad Company',
        slug: 'al-saad-company',
        info: 'Safety & Security Solutions',
        demoUrl: 'https://youssefatef289.github.io/landing-page-saadalhussan/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/Herb Wonders.png'),
        alt: 'Herb Wonders',
        title: 'Herb Wonders',
        slug: 'herb-wonders',
        info: 'Herbs & Spices Store',
        demoUrl: 'https://youssefatef289.github.io/Herb----Wonders/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/Nature.png'),
        alt: 'Nature',
        title: 'Nature',
        slug: 'nature',
        info: 'Nature Landing Page',
        demoUrl: 'https://youssefatef289.github.io/Nature/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/fashion-photography.png'),
        alt: 'Fashion Photography',
        title: 'Fashion Photography',
        slug: 'fashion-photography',
        info: 'Fashion Portfolio Website',
        demoUrl: 'https://youssefatef289.github.io/fashion-photography-main/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/mariem el swefy.png'),
        alt: 'Mariem El Swefy',
        title: 'Mariem El Swefy',
        slug: 'mariem-el-swefy',
        info: 'Personal Portfolio',
        demoUrl: '#',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/project-image04.png'),
        alt: 'Project 04',
        title: 'Project 04',
        slug: 'project-04',
        info: 'Web Project',
        demoUrl: '#',
        technologies: ['React', 'Next.js'],
        Class: 'md:mt-0'
    },
]