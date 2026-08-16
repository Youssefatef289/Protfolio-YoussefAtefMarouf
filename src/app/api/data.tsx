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
    { name: 'WordPress', icon: '/images/skills/wordpress.png', progress: 85 },
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
        image: getImgPath('/images/projects/al-mustafa-meats/Home Page - Desktop.png'),
        alt: 'Al-Mustafa Meats',
        title: 'Al-Mustafa Meats',
        slug: 'al-mustafa-meats',
        info: 'Food delivery & grocery ordering experience',
        demoUrl: '#',
        technologies: ['Next.js', 'UI/UX', 'Responsive Design'],
        Class: 'md:mt-0',
        description: 'A modern online ordering experience for a meat and grocery brand, focused on speed, clarity, and mobile-first usability.',
        category: 'Commercial',
        location: 'Cairo, Egypt',
        status: 'Available',
        price: 'Starting from $50,000',
        highlights: ['Fast product browsing', 'Mobile-first checkout', 'Clear category organization'],
        gallery: [
            getImgPath('/images/projects/al-mustafa-meats/Home Page - Desktop.png'),
            getImgPath('/images/projects/al-mustafa-meats/Products Page - Desktop.png'),
            getImgPath('/images/projects/al-mustafa-meats/Checkout - Delivery Details - Mobile (2).png'),
            getImgPath('/images/projects/al-mustafa-meats/Shopping Cart - Mobile (2).png')
        ]
    },
    {
        image: getImgPath('/images/projects/el-geheny-real-estate-development/El Geheny Real Estate Development – Home Page.png'),
        alt: 'El Geheny Real Estate Development',
        title: 'El Geheny Real Estate',
        slug: 'el-geheny-real-estate-development',
        info: 'Real estate company platform with inquiry flow',
        demoUrl: '#',
        technologies: ['Next.js', 'Dashboard UI', 'Forms'],
        Class: 'md:mt-24',
        description: 'A polished real estate website with project detail pages, inquiry forms, and dashboard views tailored for property buyers and administrators.',
        category: 'Residential',
        location: 'New Cairo, Egypt',
        status: 'Available',
        price: 'Starting from $2,500,000',
        highlights: ['Project showcase', 'Inquiry management', 'Admin dashboard experience'],
        gallery: [
            getImgPath('/images/projects/el-geheny-real-estate-development/El Geheny Real Estate Development – Home Page.png'),
            getImgPath('/images/projects/el-geheny-real-estate-development/El Geheny Real Estate Development – Project Details.png'),
            getImgPath('/images/projects/el-geheny-real-estate-development/El Geheny Real Estate Development – Inquiry Form.png'),
            getImgPath('/images/projects/el-geheny-real-estate-development/El Geheny Real Estate Development – Customer Inquiries Dashboard.png')
        ]
    },
    {
        image: getImgPath('/images/projects/mazara-al-hfny/Home Page - Desktop.png'),
        alt: 'Mazara Al Hfny',
        title: 'Mazara Al Hfny',
        slug: 'mazara-al-hfny',
        info: 'Modern marketplace for products and order tracking',
        demoUrl: '#',
        technologies: ['Next.js', 'E-commerce UI', 'Mobile UX'],
        Class: 'md:mt-0',
        description: 'A clean and smooth shopping interface designed for product discovery, cart flow, and WhatsApp-based order confirmation.',
        category: 'Commercial',
        location: 'Giza, Egypt',
        status: 'Available',
        price: 'Starting from $75,000',
        highlights: ['Product-focused landing page', 'Order confirmation flow', 'Mobile-friendly interaction'],
        gallery: [
            getImgPath('/images/projects/mazara-al-hfny/Home Page - Desktop.png'),
            getImgPath('/images/projects/mazara-al-hfny/Products Page - Desktop.png'),
            getImgPath('/images/projects/mazara-al-hfny/WhatsApp Order Summary.png'),
            getImgPath('/images/projects/mazara-al-hfny/Checkout - Delivery Details - Mobile (2).png')
        ]
    },
    {
        image: getImgPath('/images/portfolio/Brilliant Home.png'),
        alt: 'Brilliant Home',
        title: 'Brilliant Home',
        slug: 'brilliant-home',
        info: 'Interior Design & Furniture Landing Page',
        demoUrl: 'https://brilliant-home.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        Class: 'md:mt-0',
        category: 'Residential',
        location: 'Dubai, UAE',
        status: 'Available',
        price: 'Starting from $850,000'
    },
    {
        image: getImgPath('/images/portfolio/Al Fadi.png'),
        alt: 'Al Fadi',
        title: 'Al Fadi',
        slug: 'al-fadi',
        info: 'Wooden Doors & Furniture Company Website',
        demoUrl: 'https://al-fadi.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        Class: 'md:mt-24',
        category: 'Commercial',
        location: 'Riyadh, Saudi Arabia',
        status: 'Available',
        price: 'Starting from $120,000'
    },
    {
        image: getImgPath('/images/portfolio/Emaar.png'),
        alt: 'Emaar Company',
        title: 'Emaar Company',
        slug: 'emaar-company',
        info: 'Real Estate Development & Marketing Website',
        demoUrl: 'https://emaar-company.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        Class: 'md:mt-0',
        category: 'Residential',
        location: 'Dubai, UAE',
        status: 'Under Construction',
        price: 'Starting from $1,800,000'
    },
    {
        image: getImgPath('/images/portfolio/Al-Geheny Real Estate Development.png'),
        alt: 'Al-Geheny Real Estate Development',
        title: 'Al-Geheny Real Estate',
        slug: 'al-geheny-real-estate',
        info: 'Real Estate Development Company Website',
        demoUrl: 'https://el-geheny.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        Class: 'md:mt-24',
        category: 'Residential',
        location: 'New Cairo, Egypt',
        status: 'Sold Out',
        price: 'Starting from $3,200,000'
    },
    {
        image: getImgPath('/images/portfolio/Al-Umara Real Estate Development.png'),
        alt: 'Al-Umara Real Estate Development',
        title: 'Al-Umara Real Estate',
        slug: 'al-umara-real-estate',
        info: 'Real Estate Development & Marketing Website',
        demoUrl: 'https://al-umaraa-for-development.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        Class: 'md:mt-0',
        category: 'Residential',
        location: 'Cairo, Egypt',
        status: 'Available',
        price: 'Starting from $1,500,000'
    },
    {
        image: getImgPath('/images/portfolio/Al Hafni Farms.png'),
        alt: 'Al Hafni Farms',
        title: 'Al Hafni Farms',
        slug: 'al-hafni-farms',
        info: 'Agricultural Products & Farms Website',
        demoUrl: 'https://mzraa-al-hfny.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        Class: 'md:mt-24',
        category: 'Administrative',
        location: 'Alexandria, Egypt',
        status: 'Available',
        price: 'Starting from $200,000'
    },
    {
        image: getImgPath('/images/portfolio/Macello Meat butcher.png'),
        alt: 'Macello Meat Butcher',
        title: 'Macello Meat Butcher',
        slug: 'macello-meat-butcher',
        info: 'Meat & Butcher Shop E-commerce Website',
        demoUrl: 'https://macello.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        Class: 'md:mt-0',
        category: 'Commercial',
        location: 'Cairo, Egypt',
        status: 'Available',
        price: 'Starting from $80,000'
    },
    {
        image: getImgPath('/images/portfolio/Sky-Block.png'),
        alt: 'Sky Block',
        title: 'Sky Block',
        slug: 'sky-block',
        info: 'Building Materials Platform',
        demoUrl: 'https://sky-block-mu.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
        Class: 'md:mt-0',
        category: 'Administrative',
        location: 'Cairo, Egypt',
        status: 'Available',
        price: 'Starting from $150,000'
    },
    {
        image: getImgPath('/images/portfolio/QAF BookStore (1).png'),
        alt: 'QAF BookStore',
        title: 'QAF BookStore',
        slug: 'qaf-bookstore',
        info: 'Online Book Store',
        demoUrl: 'https://qafbookstore.github.io/Book-store-QAF/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        Class: 'md:mt-24',
        category: 'Commercial',
        location: 'Alexandria, Egypt',
        status: 'Available',
        price: 'Starting from $45,000'
    },
    {
        image: getImgPath('/images/portfolio/Mix-Kitcien.png'),
        alt: 'Mix Kitchen',
        title: 'Mix Kitchen',
        slug: 'mix-kitchen',
        info: 'Luxury Kitchens & Furniture',
        demoUrl: 'https://mix-kitchens.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript'],
        Class: 'md:mt-0',
        category: 'Residential',
        location: 'Dubai, UAE',
        status: 'Available',
        price: 'Starting from $95,000'
    },
    {
        image: getImgPath('/images/portfolio/Lithioo Perfumes.png'),
        alt: 'Lithioo for Perfumes',
        title: 'Lithioo for Perfumes',
        slug: 'lithioo-for-perfumes',
        info: 'Perfume E-commerce Store',
        demoUrl: 'https://lithioo-for-perfumes.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript'],
        Class: 'md:mt-24',
        category: 'Commercial',
        location: 'Riyadh, Saudi Arabia',
        status: 'Available',
        price: 'Starting from $65,000'
    },
    {
        image: getImgPath('/images/portfolio/farouja.png'),
        alt: 'Farouja',
        title: 'Farouja',
        slug: 'farouja',
        info: 'Poultry Products E-commerce',
        demoUrl: 'https://farouja.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript'],
        Class: 'md:mt-0',
        category: 'Commercial',
        location: 'Cairo, Egypt',
        status: 'Available',
        price: 'Starting from $55,000'
    },
    {
        image: getImgPath('/images/portfolio/Al-Saad Company.png'),
        alt: 'Al-Saad Company',
        title: 'Al-Saad Company',
        slug: 'al-saad-company',
        info: 'Safety & Security Solutions',
        demoUrl: 'https://youssefatef289.github.io/landing-page-saadalhussan/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        Class: 'md:mt-24',
        category: 'Administrative',
        location: 'Riyadh, Saudi Arabia',
        status: 'Available',
        price: 'Starting from $180,000'
    },
    {
        image: getImgPath('/images/portfolio/Herb Wonders.png'),
        alt: 'Herb Wonders',
        title: 'Herb Wonders',
        slug: 'herb-wonders',
        info: 'Herbs & Spices Store',
        demoUrl: 'https://youssefatef289.github.io/Herb----Wonders/',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        Class: 'md:mt-0',
        category: 'Commercial',
        location: 'Cairo, Egypt',
        status: 'Available',
        price: 'Starting from $40,000'
    },
    {
        image: getImgPath('/images/portfolio/touch-furniture.png'),
        alt: 'Touch Furniture',
        title: 'Touch Furniture',
        slug: 'touch-furniture',
        info: 'Modern Furniture E-commerce',
        demoUrl: 'https://touch-furniture.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript'],
        Class: 'md:mt-24',
        category: 'Residential',
        location: 'Dubai, UAE',
        status: 'Available',
        price: 'Starting from $110,000'
    },
    {
        image: getImgPath('/images/portfolio/profile-furniture.png'),
        alt: 'Profile for Furniture and Antiques',
        title: 'Profile for Furniture and Antiques',
        slug: 'profile-furniture-antiques',
        info: 'Furniture & Antiques Store',
        demoUrl: 'https://profile-for-furniture-and-antiques.vercel.app/',
        technologies: ['React', 'Next.js', 'TypeScript'],
        Class: 'md:mt-0',
        category: 'Residential',
        location: 'Cairo, Egypt',
        status: 'Available',
        price: 'Starting from $90,000'
    },
]

export const getPortfolioProjectBySlug = (slug: string) => portfolioinfo.find((item) => item.slug === slug);
