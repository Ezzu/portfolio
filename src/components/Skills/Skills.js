import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg sm:bg-circularLightSm sm:dark:bg-circularDarkSm md:bg-circularLightMd md:dark:bg-circularDarkMd'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name={'Ruby'} x={'-13vw'} y={'2vw'} />
        <Skill name={'NodeJS'} x={'2vw'} y={'12vw'} />
        <Skill name={'JavaScript'} x={'-2vw'} y={'-12vw'} />
        <Skill name={'Laravel'} x={'-26vw'} y={'-3vw'} />
        <Skill name={'TypeScript'} x={'25vw'} y={'6vw'} />
        <Skill name={'ReactJS'} x={'13vw'} y={'-2vw'} />
        <Skill name={'MongoDB'} x={'-22vw'} y={'-15vw'} />
        <Skill name={'SQL'} x={'20vw'} y={'-22vw'} />
        <Skill name={'MySQL'} x={'-20vw'} y={'10vw'} />
        <Skill name={'PostgreSQL'} x={'18vw'} y={'-12vw'} />
        <Skill name={'Figma'} x={'32vw'} y={'-5vw'} />
        <Skill name={'ExpressJS'} x={'0vw'} y={'-21vw'} />
        <Skill name={'AWS'} x={'-25vw'} y={'19vw'} />
        <Skill name={'GCP'} x={'33vw'} y={'13vw'} />
        <Skill name={'GraphQL'} x={'-38vw'} y={'5vw'} />
        <Skill name={'REST'} x={'-15vw'} y={'-23vw'} />
        <Skill name={'Jira'} x={'17vw'} y={'18vw'} />
        <Skill name={'Docker'} x={'0vw'} y={'25vw'} />

      </div>
    </>
  )
}

export default Skills
