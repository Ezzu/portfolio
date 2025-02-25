import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profileImage from '/public/images/profile/final.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBuld from '/public/images/svgs/miscellaneous_icons_1.svg'
import Transition from '@/components/Transition'

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Ertiza Ejaz</title>
        <meta name="description" content="Muhammad Ertiza Ejaz Portfolio" />
      </Head>
      <Transition />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8 '>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profileImage} alt='Muhammad Ertiza Ejaz' className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw; (max-width: 1200px) 50vw; 50vw' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text='Crafting robust, user-focused web applications with precision and performance.' className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!tex-3xl" />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              As a full-stack developer, I craft high-performance, user-centric web applications with precision and efficiency. From concept to execution, I transform ideas into seamless digital experiences, integrating cloud solutions for scalability and reliability. Explore my latest projects in modern web technologies.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/resume-ertiza-ejaz.pdf" target='_blank' download={true}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base' >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link href="mailto:work.ertiza@gmail.com" target='_blank'
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >
                  Contact
                </Link>

              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBuld} alt='MEE' className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
