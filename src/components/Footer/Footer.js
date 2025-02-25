import React from 'react'
import Link from 'next/link'

import Layout from '../Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6 '>
        <span >{new Date().getFullYear()} &copy; All Rights Reserved. </span>
        <div className='flex items-center lg:py-2'>
          <Link target='_blank' href='https://ertizaejaz.bio.link/' className='underline underline-offset-4'>Muhammad Ertiza Ejaz</Link>
        </div>
        <Link target='_blank' href='https://github.com/ezzu/'>Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer
