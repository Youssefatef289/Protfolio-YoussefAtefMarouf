import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPortfolioProjectBySlug, portfolioinfo } from '@/app/api/data';
import HeroSub from '@/components/SharedComponent/HeroSub';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioinfo.map((item) => ({ slug: item.slug }));
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <HeroSub
        title={project.title}
        description={project.description || project.info}
        breadcrumbLinks={[
          { href: '/', text: 'Home' },
          { href: '/portfolio', text: 'Portfolio' },
          { href: `/portfolio/${project.slug}`, text: project.title },
        ]}
      />

      <section className='md:py-24 py-16 dark:bg-darkmode'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start'>
            <div>
              <p className='text-primary font-semibold uppercase tracking-[0.25em] text-sm mb-4'>
                {project.category || 'Project Overview'}
              </p>
              <h2 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4'>
                {project.title}
              </h2>
              <p className='text-lg text-secondary dark:text-white/70 leading-8 mb-6'>
                {project.description || project.info}
              </p>

              <div className='mb-8 rounded-2xl border border-primary/20 bg-white/95 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur dark:bg-darklight/95'>
                <div className='flex flex-wrap gap-3'>
                  <Link
                    href='/portfolio'
                    className='inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-primary/90'
                  >
                    Details
                  </Link>
                  {project.demoUrl && project.demoUrl !== '#' ? (
                    <Link
                      href={project.demoUrl}
                      target='_blank'
                      rel='noreferrer'
                      className='inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/5 px-6 py-3 font-semibold text-primary transition hover:bg-primary/10'
                    >
                      Live Demo
                    </Link>
                  ) : (
                    <span className='inline-flex items-center justify-center rounded-full bg-gray-200 px-6 py-3 font-semibold text-gray-700 dark:bg-white/10 dark:text-white/70'>
                      Demo link coming soon
                    </span>
                  )}
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-8'>
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className='rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.highlights && (
                <div className='mb-8'>
                  <h3 className='text-xl font-semibold text-midnight_text dark:text-white mb-4'>
                    Highlights
                  </h3>
                  <ul className='space-y-3 text-secondary dark:text-white/70'>
                    {project.highlights.map((item) => (
                      <li key={item} className='flex items-start gap-3'>
                        <span className='mt-2 h-2.5 w-2.5 rounded-full bg-primary'></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className='rounded-2xl border border-border/60 bg-white p-8 shadow-[0px_20px_80px_0px_#68758D26] dark:bg-darklight'>
              <p className='text-sm uppercase tracking-[0.25em] text-primary mb-4'>
                Project details
              </p>
              <p className='text-lg text-secondary dark:text-white/70 mb-6'>
                {project.category || 'Custom web experience'}
              </p>
              {project.location && (
                <p className='text-sm text-secondary dark:text-white/50 mb-2'>
                  Location: {project.location}
                </p>
              )}
              {project.status && (
                <p className='text-sm text-secondary dark:text-white/50 mb-2'>
                  Status: {project.status}
                </p>
              )}
              {project.price && (
                <p className='text-sm text-secondary dark:text-white/50 mb-6'>
                  Price: {project.price}
                </p>
              )}
              <div className='flex flex-wrap gap-3'>
                <Link
                  href='/portfolio'
                  className='inline-flex items-center justify-center rounded-full border border-primary/20 px-6 py-3 font-semibold text-primary transition hover:bg-primary/10'
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className='mt-16 grid gap-6 md:grid-cols-2'>
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className='overflow-hidden rounded-2xl border border-border/60 bg-white p-3 shadow-sm dark:bg-darklight'
                >
                  <Image
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    width={1200}
                    height={800}
                    className='h-auto w-full rounded-xl object-cover'
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
