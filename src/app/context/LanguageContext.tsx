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
  'hero.description': { en: "I'm Youssef, A Frontend Developer who enjoys crafting responsive user interfaces and staying updated on the latest web technologies to enhance user experience.", ar: 'أنا يوسف، مطور واجهات أمامية أستمتع بإنشاء واجهات مستجيبة وأبقى على اطلاع بأحدث تقنيات الويب لتحسين تجربة المستخدم.' },
  'View My Work': { en: 'View My Work', ar: 'شاهد أعمالي' },
  'Download CV': { en: 'Download CV', ar: 'تحميل السيرة الذاتية' },
  'Need help?': { en: 'Need help?', ar: 'تحتاج مساعدة؟' },
  'Contact our experts': { en: 'Contact our experts', ar: 'تواصل مع خبرائنا' },
  'Tell us about your project': { en: 'Tell us about your project', ar: 'أخبرنا عن مشروعك' },
  'Menu': { en: 'Menu', ar: 'القائمة' },
  'About Me': { en: 'About Me', ar: 'من أنا' },
  'about.description.1': { en: "I'm a passionate Frontend Developer specializing in building modern, responsive web applications. With expertise in React, Next.js, and modern frameworks, I create engaging user experiences that combine beautiful design with optimal performance.", ar: 'أنا مطور واجهات أمامية متحمس متخصص في بناء تطبيقات الويب الحديثة والمستجيبة. مع الخبرة في React و Next.js والأطر الحديثة، أنشئ تجارب مستخدم جذابة تجمع بين التصميم الجميل والأداء الأمثل.' },
  'about.description.2': { en: "I focus on writing clean, maintainable code and staying up-to-date with the latest web technologies to deliver high-quality solutions that meet both user needs and business objectives.", ar: 'أركز على كتابة كود نظيف وقابل للصيانة والبقاء على اطلاع بأحدث تقنيات الويب لتقديم حلول عالية الجودة تلبي احتياجات المستخدمين والأهداف التجارية.' },
  'about.description.3': { en: "My approach to development combines technical excellence with creative problem-solving. I believe in creating intuitive interfaces that not only look great but also provide seamless user experiences.", ar: 'نهجي في التطوير يجمع بين التميز التقني وحل المشكلات الإبداعي. أؤمن بإنشاء واجهات بديهية لا تبدو رائعة فحسب، بل توفر أيضاً تجارب مستخدم سلسة.' },
  'about.description.4': { en: "Whether working on a small project or a large-scale application, I bring attention to detail, best practices, and a commitment to delivering exceptional results.", ar: 'سواء كنت أعمل على مشروع صغير أو تطبيق واسع النطاق، أجلب الاهتمام بالتفاصيل وأفضل الممارسات والالتزام بتقديم نتائج استثنائية.' },
  'our services': { en: 'our services', ar: 'خدماتنا' },
  'Services specifically designed to meet your business needs': { en: 'Services specifically designed to meet your business needs', ar: 'خدمات مصممة خصيصاً لتلبية احتياجات عملك' },
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
  'View Project': { en: 'View Project', ar: 'عرض المشروع' },
  'Previous projects': { en: 'Previous projects', ar: 'المشاريع السابقة' },
  'Next projects': { en: 'Next projects', ar: 'المشاريع التالية' },
  'React & Next.js': { en: 'React & Next.js', ar: 'React & Next.js' },
  'JavaScript & TypeScript': { en: 'JavaScript & TypeScript', ar: 'JavaScript & TypeScript' },
  'HTML & CSS': { en: 'HTML & CSS', ar: 'HTML & CSS' },
  'Responsive Design': { en: 'Responsive Design', ar: 'التصميم المتجاوب' },
  'UI/UX Design': { en: 'UI/UX Design', ar: 'تصميم واجهة المستخدم' },
  'Testimonials': { en: 'Testimonials', ar: 'آراء العملاء' },
  'testimonial.quote': { en: 'Youssef delivered a modern, fast and fully responsive website for our business. Professional communication, clean code and great attention to detail — highly recommended for any web project.', ar: 'قدّم يوسف موقعاً عصرياً وسريعاً ومتجاوباً بالكامل لأعمالنا. تواصل احترافي، وكود نظيف، واهتمام كبير بالتفاصيل — أنصح به بشدة لأي مشروع ويب.' },
  'Happy Client': { en: 'Happy Client', ar: 'عميل سعيد' },
  'Previous project owner': { en: 'Previous project owner', ar: 'صاحب مشروع سابق' },
  'build everything': { en: 'build everything', ar: 'نبني كل شيء' },
  'Let’s discuss about your project and take it the next level.': { en: 'Let’s discuss about your project and take it the next level.', ar: 'لنتحدث عن مشروعك وننقله إلى المستوى التالي.' },
  'Phone': { en: 'Phone', ar: 'الهاتف' },
  'Email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'Location': { en: 'Location', ar: 'الموقع' },
  'Egypt — working with clients worldwide': { en: 'Egypt — working with clients worldwide', ar: 'مصر — أعمل مع عملاء حول العالم' },
  'Available for freelance & full-time projects': { en: 'Available for freelance & full-time projects', ar: 'متاح لمشاريع الفريلانس والوظائف بدوام كامل' },
  'Start the project': { en: 'Start the project', ar: 'ابدأ مشروعك' },
  'First name': { en: 'First name', ar: 'الاسم الأول' },
  'Last name': { en: 'Last name', ar: 'الاسم الأخير' },
  'Country': { en: 'Country', ar: 'الدولة' },
  'Let us know about your project': { en: 'Let us know about your project', ar: 'أخبرنا عن مشروعك' },
  'I have read and acknowledge the': { en: 'I have read and acknowledge the', ar: 'لقد قرأت وأوافق على' },
  'Terms and Conditions': { en: 'Terms and Conditions', ar: 'الشروط والأحكام' },
  'Submit Inquiry': { en: 'Submit Inquiry', ar: 'إرسال الاستفسار' },
  'Sending…': { en: 'Sending…', ar: 'جارٍ الإرسال…' },
  'Your inquiry has been sent. Thank you!': { en: 'Your inquiry has been sent. Thank you!', ar: 'تم إرسال استفسارك. شكراً لك!' },
  'Unable to send message.': { en: 'Unable to send message.', ar: 'تعذر إرسال الرسالة.' },
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

