import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profileImage from '/public/images/profile/photo.png'
import AnimatedNumbers from '@/components/AnimatedNumbers'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Transition from '@/components/Transition'

const about = () => {
  return (
    <>
      <Head>
        <title>MEE | About Page</title>
        <meta name='description' content='Software Developer' />
      </Head>
      <Transition />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text={'Performance Meets Innovation!'} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
                I’m a Full Stack Engineer with 7+ years of experience, primarily working with startups in the domains of hospitality, e-commerce, entertainment and talent acquisition. I specialize in Ruby on Rails, React.js, Flask and Node.js, building scalable applications and deploying them on AWS, GCP and Heroku.
              </p>
              <p className='my-4 font-medium'>
                While Ruby on Rails remains my primary expertise, I’ve also worked extensively with JavaScript frameworks like AngularJS, ReactJS, and NodeJS. Beyond monolithic architectures, I’ve contributed to microservices-based projects, using Ruby or Node.js or Python AWS Lambda, and services like Sinatra, Lumen, and Crystal, deployed independently for optimal performance. I’m known for solving complex business challenges, ownership, adaptability, and dedication.
              </p>
              <p className='font-medium'>
                I believe in code quality, best practices, and test-driven development, ensuring long-term reliability and maintainability. As an easy-going and collaborative team player, I enjoy working across cross-functional teams to build impactful products.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profileImage} alt='MEE' className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw; (max-width: 1200px) 50vw; 33vw'
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center '>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  satisfied clients
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  projects completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  )
}

export default about
