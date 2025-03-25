"use client";

import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma,
  FaNodeJs,
  FaVuejs,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCsharp,
  SiDotnet,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiMicrosoftsqlserver,
  SiApachecassandra
} from 'react-icons/si'

//about data
const about = {
  title: 'About me',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga, ipsam suscipit laudantium ullam debitis explicabo, ea reiciendis nostrum quidem atque labore eligendi corporis commodi, assumenda rem voluptas eaque tempora.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Matthew Lemes'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+54) 2954 568282'
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ Years'
    },
    {
      fieldName: 'Skype',
      fieldValue: "luke.01"
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Argentinian'
    },
    {
      fieldName: 'Email',
      fieldValue: 'lemesmateo@gmail.com'
    },
    {
      fieldName: 'Freelancer',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Spanish'
    },
  ]
};

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga, ipsam suscipit laudantium ullam debitis explicabo, ea reiciendis nostrum quidem atque labore eligendi corporis commodi, assumenda rem voluptas eaque tempora',
  items: [
    {
      company: "Ministry of Education.",
      position: "Full Stack Developer(C# - Vue.js)",
      duration: "2023- Present",
    },
    /* {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022- Present",
    }, */
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga, ipsam suscipit laudantium ullam debitis explicabo, ea reiciendis nostrum quidem atque labore eligendi corporis commodi, assumenda rem voluptas eaque tempora',
  items: [
    {
      institution: "UTN - La Plata",
      degree: "Full Stack Web Developer",
      duration: "2021",
    },
    {
      institution: "Udemy",
      degree: "Next.Js Developer by Fernando Herrera",
      duration: "2022",
    },
    {
      institution: "Udemy",
      degree: "C# Clean Architecture Developer",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "React Pro by Fernando Herrera",
      duration: "2024",
    },
    {
      institution: "Ites - (Technical Institute of Superior Education) ",
      degree: "High Technical Degree in Software Development ",
      duration: "2024-Currently On-Going",
    },
    
  ]
}

const skills = {
  title: 'My Skills',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga, ipsam suscipit laudantium ullam debitis explicabo, ea reiciendis nostrum quidem atque labore eligendi corporis commodi, assumenda rem voluptas eaque tempora',
  skillList: [
    {
      icon: <FaHtml5/>,
      name: 'html 5',
    },
    {
      icon: <FaCss3/>,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact/>,
      name: 'react.js',
    },
    {
      icon: <FaVuejs/>,
      name: 'vue.js',
    },
    {
      icon: <SiNextdotjs/>,
      name: 'next.js',
    },
    {
      icon: <FaNodeJs/>,
      name: 'node.js',
    },
    {
      icon: <SiTailwindcss/>,
      name: 'tailwind.css',
    },
    {
      icon: <SiCsharp/>,
      name: 'C#',
    },
    {
      icon: <SiDotnet/>,
      name: '.Net',
    },
    {
      icon: <FaFigma/>,
      name: 'figma',
    },
    {
      icon: <SiFirebase/>,
      name: 'firebase',
    },
    {
      icon: <SiMongodb/>,
      name: 'mongo.db',
    },
    {
      icon: <SiMysql/>,
      name: 'mysql',
    },
    {
      icon: <SiMicrosoftsqlserver/>,
      name: 'sql server',
    },
    {
      icon: <SiApachecassandra/>,
      name: 'Apache Cassandra',
    },
    
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {

  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{ 
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease:'easeIn'} 
      }} 
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto' >
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]' >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="experience" >Experience</TabsTrigger>
            <TabsTrigger value="education" >Education</TabsTrigger>
            <TabsTrigger value="skills" >Skills</TabsTrigger>
            <TabsTrigger value="about" >About me</TabsTrigger>
          </TabsList> 

          <div className='min-h-[70vh] w-full'  >
             <TabsContent value='experience' className='w-full' >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'  >
                <h3 className='text-4xl font-bold' >{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0' >
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]' >
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1' 
                        >
                          <span className='text-accent-lighter' >{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-4' >
                            {item.position}
                          </h3>
                           <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                            <p className='text-white/60' >{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
             </TabsContent>

             <TabsContent value='education' className='w-full' >
             <div className='flex flex-col gap-[30px] text-center xl:text-left'  >
                <h3 className='text-4xl font-bold' >{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0' >
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]' >
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li 
                          key={index} 
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1' 
                        >
                          <span className='text-accent-lighter' >{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-4' >
                            {item.degree}
                          </h3>
                           <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                            <p className='text-white/60' >{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
             </TabsContent>
             
             <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold' >{skills.title}</h3>
                  <h3 className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</h3>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group '>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize' >{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>
                  })}
                </ul>
              </div>
            
             </TabsContent>

             <TabsContent value='about' className='w-full' >
             about me
             </TabsContent>
          </div>
        </Tabs>
      </div>
      </motion.div>
  )
}

export default Resume