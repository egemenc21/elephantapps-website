import React from 'react'
import ProjectsCard from '../components/ProjectsCard'
import Footer from '../components/Footer'
import { projectsCardItems } from '../data/projects/projectsCardItems'

const Projects = () => {
  return (
    <div className='pt-[150px] bg-[#fafafa] px-6' >
    <span className='text-3xl text-center ml-4'>Projects</span>
    <div className='relative'>
        <div className='border-l-2 border-[#ff5354] py-4 pl-10 ml-4 my-4 text-xl'> 
      <p className='text-gray-500 mb-4'>— Design is not just what it looks like and feels like. Design is how it works.</p>
      <span className='italic text-md uppercase'>Steve Jobs</span>
    </div>
    
    </div>
  
   
    {projectsCardItems.map((cardItem)=>(<ProjectsCard key={cardItem.id} cardItem={cardItem}/>))}
    <Footer/>
    </div>
  )
}

export default Projects