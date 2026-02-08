'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: { [key: string]: { en: string; ar: string } } = {
  'Home': { en: 'Home', ar: 'الرئيسية' },
  'About': { en: 'About', ar: 'من نحن' },
  'Services': { en: 'Services', ar: 'الخدمات' },
  'Portfolio': { en: 'Portfolio', ar: 'المشاريع' },
  'Contact': { en: 'Contact', ar: 'تواصل معنا' },
  'Sign In': { en: 'Sign In', ar: 'تسجيل الدخول' },
  'Sign Up': { en: 'Sign Up', ar: 'إنشاء حساب' },
  'Frontend Developer': { en: 'Frontend Developer', ar: 'مطور واجهات أمامية' },
  'hero.name': { en: 'Youssef Atef', ar: 'يوسف عاطف' },
  'hero.title': { en: 'I am Professional User Experience Designer', ar: 'أنا مصمم تجربة مستخدم محترف' },
  'hero.description': { en: "I'm Youssef, A Frontend Developer who enjoys crafting responsive user interfaces and staying updated on the latest web technologies to enhance user experience.", ar: 'أنا يوسف، مطور واجهات أمامية أستمتع بإنشاء واجهات مستجيبة وأبقى على اطلاع بأحدث تقنيات الويب لتحسين تجربة المستخدم.' },
  'hero.description.1': { en: 'I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.', ar: 'أصمم وأطور الخدمات للعملاء المتخصصين في إنشاء مواقع ويب حديثة وأنيقة وخدمات الويب والمتاجر عبر الإنترنت. شغفي هو تصميم تجارب المستخدم الرقمية.' },
  'hero.description.2': { en: 'I design and develop services for customers specializing creating stylish, modern websites, web services.', ar: 'أصمم وأطور الخدمات للعملاء المتخصصين في إنشاء مواقع ويب حديثة وأنيقة وخدمات الويب.' },
  'View My Work': { en: 'View My Work', ar: 'شاهد أعمالي' },
  'My Projects': { en: 'My Projects', ar: 'مشاريعي' },
  'Download CV': { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
  'Need help?': { en: 'Need help?', ar: 'تحتاج مساعدة؟' },
  'Contact our experts': { en: 'Contact our experts', ar: 'تواصل مع خبرائنا' },
  'Tell us about your project': { en: 'Tell us about your project', ar: 'أخبرنا عن مشروعك' },
  'Menu': { en: 'Menu', ar: 'القائمة' },
  'About Me': { en: 'About Me', ar: 'من أنا' },
  'about.subtitle': { en: 'Passionate about creating beautiful and functional web experiences', ar: 'شغوف بإنشاء تجارب ويب جميلة ووظيفية' },
  'Projects Completed': { en: 'Projects Completed', ar: 'مشروع مكتمل' },
  'Years Experience': { en: 'Years Experience', ar: 'سنوات خبرة' },
  'about.description.1': { en: "I'm a passionate Frontend Developer specializing in building modern, responsive web applications. With expertise in React, Next.js, and modern frameworks, I create engaging user experiences that combine beautiful design with optimal performance.", ar: 'أنا مطور واجهات أمامية متحمس متخصص في بناء تطبيقات الويب الحديثة والمستجيبة. مع الخبرة في React و Next.js والأطر الحديثة، أنشئ تجارب مستخدم جذابة تجمع بين التصميم الجميل والأداء الأمثل.' },
  'about.description.2': { en: "I focus on writing clean, maintainable code and staying up-to-date with the latest web technologies to deliver high-quality solutions that meet both user needs and business objectives.", ar: 'أركز على كتابة كود نظيف وقابل للصيانة والبقاء على اطلاع بأحدث تقنيات الويب لتقديم حلول عالية الجودة تلبي احتياجات المستخدمين والأهداف التجارية.' },
  'about.description.3': { en: "My approach to development combines technical excellence with creative problem-solving. I believe in creating intuitive interfaces that not only look great but also provide seamless user experiences.", ar: 'نهجي في التطوير يجمع بين التميز التقني وحل المشكلات الإبداعي. أؤمن بإنشاء واجهات بديهية لا تبدو رائعة فحسب، بل توفر أيضاً تجارب مستخدم سلسة.' },
  'about.description.4': { en: "Whether working on a small project or a large-scale application, I bring attention to detail, best practices, and a commitment to delivering exceptional results.", ar: 'سواء كنت أعمل على مشروع صغير أو تطبيق واسع النطاق، أجلب الاهتمام بالتفاصيل وأفضل الممارسات والالتزام بتقديم نتائج استثنائية.' },
  'our services': { en: 'our services', ar: 'خدماتنا' },
  'Services specifically designed to meet your business needs': { en: 'Services specifically designed to meet your business needs', ar: 'خدمات مصممة خصيصاً لتلبية احتياجات عملك' },
  'services.subtitle': { en: 'Delivering exceptional solutions tailored to your unique requirements', ar: 'تقديم حلول استثنائية مصممة خصيصاً لمتطلباتك الفريدة' },
  'Learn More': { en: 'Learn More', ar: 'اعرف المزيد' },
  'service.0.title': { en: 'Web Development', ar: 'تطوير الويب' },
  'service.0.description': { en: 'Building modern, responsive web applications using React, Next.js, and TypeScript. Creating fast, scalable, and user-friendly websites.', ar: 'بناء تطبيقات ويب حديثة ومستجيبة باستخدام React و Next.js و TypeScript. إنشاء مواقع ويب سريعة وقابلة للتوسع وسهلة الاستخدام.' },
  'service.1.title': { en: 'Responsive Design', ar: 'التصميم المتجاوب' },
  'service.1.description': { en: 'Ensuring your website looks perfect on all devices. Mobile-first approach with seamless user experience across desktop, tablet, and mobile.', ar: 'ضمان أن موقعك يبدو مثالياً على جميع الأجهزة. نهج Mobile-first مع تجربة مستخدم سلسة عبر سطح المكتب والجهاز اللوحي والهاتف المحمول.' },
  'service.2.title': { en: 'UI/UX Design', ar: 'تصميم واجهة المستخدم' },
  'service.2.description': { en: 'Creating beautiful and intuitive user interfaces. Focus on user experience, accessibility, and modern design principles.', ar: 'إنشاء واجهات مستخدم جميلة وبديهية. التركيز على تجربة المستخدم وإمكانية الوصول ومبادئ التصميم الحديثة.' },
  'My Skills': { en: 'My Skills', ar: 'مهاراتي' },
  'Technical Skills & Expertise': { en: 'Technical Skills & Expertise', ar: 'المهارات التقنية والخبرة' },
  'Technologies and tools I use to build amazing web experiences': { en: 'Technologies and tools I use to build amazing web experiences', ar: 'التقنيات والأدوات التي أستخدمها لبناء تجارب ويب رائعة' },
  'Quick Links': { en: 'Quick Links', ar: 'روابط سريعة' },
  'Skills': { en: 'Skills', ar: 'المهارات' },
  'All rights reserved': { en: 'All rights reserved', ar: 'جميع الحقوق محفوظة' },
  'Explore my portfolio showcase': { en: 'Explore my portfolio showcase', ar: 'استكشف معرض أعمالي' },
  'portfolio.description': { en: 'Dive into a curated collection of my finest work, showcasing expertise across various industries.', ar: 'تعمق في مجموعة مختارة من أفضل أعمالي، تعرض الخبرة عبر مختلف الصناعات.' },
  'View Demo': { en: 'View Demo', ar: 'عرض التجربة' },
  'React & Next.js': { en: 'React & Next.js', ar: 'React & Next.js' },
  'JavaScript & TypeScript': { en: 'JavaScript & TypeScript', ar: 'JavaScript & TypeScript' },
  'HTML & CSS': { en: 'HTML & CSS', ar: 'HTML & CSS' },
  'Responsive Design': { en: 'Responsive Design', ar: 'التصميم المتجاوب' },
  'UI/UX Design': { en: 'UI/UX Design', ar: 'تصميم واجهة المستخدم' },
  'Why Choose Me': { en: 'Why Choose Me', ar: 'لماذا تختارني' },
  'How You Will Benefit From My Services': { en: 'How You Will Benefit From My Services', ar: 'كيف سوف تستفيد من خدماتي' },
  'benefits.subtitle': { en: 'Discover the advantages of working with a professional frontend developer who delivers exceptional results', ar: 'اكتشف مزايا العمل مع مطور واجهات أمامية محترف يقدم نتائج استثنائية' },
  'benefits.1.title': { en: 'Modern & Responsive Design', ar: 'تصميم حديث ومتجاوب' },
  'benefits.1.description': { en: 'Get a website that looks perfect on all devices - desktop, tablet, and mobile. Your users will have an excellent experience regardless of their device.', ar: 'احصل على موقع يبدو مثالياً على جميع الأجهزة - سطح المكتب والجهاز اللوحي والهاتف المحمول. مستخدميك سيكون لديهم تجربة ممتازة بغض النظر عن جهازهم.' },
  'benefits.2.title': { en: 'Fast Loading & Performance', ar: 'تحميل سريع وأداء عالي' },
  'benefits.2.description': { en: 'Optimized code and best practices ensure your website loads quickly, improving user experience and SEO rankings.', ar: 'الكود المحسّن وأفضل الممارسات تضمن تحميل موقعك بسرعة، مما يحسن تجربة المستخدم وترتيب محركات البحث.' },
  'benefits.3.title': { en: 'Scalable Solutions', ar: 'حلول قابلة للتوسع' },
  'benefits.3.description': { en: 'Build your website with scalability in mind. As your business grows, your website can easily accommodate new features and increased traffic.', ar: 'قم ببناء موقعك مع مراعاة قابلية التوسع. مع نمو عملك، يمكن لموقعك بسهولة استيعاب الميزات الجديدة وزيادة حركة المرور.' },
  'benefits.4.title': { en: 'Clean & Maintainable Code', ar: 'كود نظيف وقابل للصيانة' },
  'benefits.4.description': { en: 'Receive well-structured, documented code that is easy to maintain and update. Future modifications will be simple and cost-effective.', ar: 'احصل على كود منظم وموثق يسهل صيانته وتحديثه. التعديلات المستقبلية ستكون بسيطة وفعالة من حيث التكلفة.' },
  'benefits.5.title': { en: 'SEO Optimized', ar: 'محسّن لمحركات البحث' },
  'benefits.5.description': { en: 'Your website will be built with SEO best practices, helping you rank higher in search results and attract more organic traffic.', ar: 'سيتم بناء موقعك باستخدام أفضل ممارسات SEO، مما يساعدك على الترتيب أعلى في نتائج البحث وجذب المزيد من الزيارات العضوية.' },
  'benefits.6.title': { en: 'Ongoing Support', ar: 'دعم مستمر' },
  'benefits.6.description': { en: 'Get continuous support and maintenance. I am here to help you with updates, bug fixes, and any questions you may have.', ar: 'احصل على دعم وصيانة مستمرة. أنا هنا لمساعدتك في التحديثات وإصلاح الأخطاء وأي أسئلة قد تكون لديك.' },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Update HTML dir attribute
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

