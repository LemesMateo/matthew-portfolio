"use client";

import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiNextdotjs
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
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022- Present",
    },
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022- Present",
    },
  ]
}


const Resume = () => {

  return (
    <div>Resume page</div>
  )
}

export default Resume