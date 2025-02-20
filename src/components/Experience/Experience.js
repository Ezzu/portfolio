import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Details from '../Details'

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start']
    }
  )

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px] ' />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details position={'Full Stack Engineer'}
            company={'Mission'}
            companyLink={'www.mission.dev'}
            time={'2022-Present'}
            work={`I have contributed to both front-end and back-end development, ensuring seamless user experiences and efficient server-side logic. Collaborating closely with product managers, designers, and engineers, I played a key role in delivering high-quality projects on time. My focus on writing scalable, maintainable, and optimized code has improved performance and system stability. Through thorough code reviews, I enhanced code quality by 20% and increased unit test coverage by 15%. I have managed smooth deployments to production, providing post-release support for a seamless transition. Actively monitoring system performance with Sentry, New Relic, and Papertrail, I reduced downtime by 30% and improved overall system efficiency. Additionally, I have contributed to architectural decisions, helping shape technical infrastructure and drive innovation within engineering teams.`}
          />
          <Details position={'Senior Software Engineer'}
            company={'Devsinc'}
            companyLink={'www.devsinc.com'}
            time={'2021-2022'}
            work={`I have designed, developed, and optimized server-side applications using Ruby on Rails, significantly improving response times and overall performance. My expertise in API development follows MVC, Mocking, ORM, and RESTful principles, ensuring seamless integration and maintainability. Additionally, I have implemented automated testing frameworks, leveraging Ruby to enhance software reliability and quality. By incorporating DevOps practices, I streamlined project management and version control, contributing to a more efficient and scalable development process.`}
          />
          <Details position={'Software Engineer'}
            company={'Devsinc'}
            companyLink={'www.devsinc.com'}
            time={'2019-2021'}
            work={`Developed, tested, and optimized Ruby on Rails applications, consistently ranking as a top contributor for six consecutive months. Collaborated closely with developers, designers, and project managers, leveraging Agile methodologies to enhance coordination and project efficiency. Spearheaded responsive web design strategies using HTML, CSS, Bootstrap, and React.js, leading to reduced bounce rates and increased page views. Maintained and extended JSON and Liquid-based APIs, ensuring seamless data availability while working with MongoDB and DynamoDB. Committed to best practices in test-driven development (TDD), continuous integration, and SCRUM, maintaining high code quality and reliability.`}
          />
          <Details position={'Laravel Developer'}
            company={'NetRoots Technologies'}
            companyLink={'www.netrootstech.com'}
            time={'2018-2019'}
            work={`Developed, tested, and maintained web applications using PHP and Laravel, ensuring efficient and scalable code. Collaborated with cross-functional teams to gather requirements and define project scope, facilitating smooth development workflows. Contributed to technical documentation by drafting specifications and user guides for better maintainability. Adhered to coding standards, version control processes, and project timelines, ensuring high-quality deliverables and streamlined development.`}
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience


