import React from 'react'
import { clientImages } from '../data/clients/clientsData'

const ClientsListItem =({image})=>(
  <li className='p-4'><img className='mx-auto grayscale opacity-20 hover:grayscale-0 hover:opacity-100 ' src={image} alt="" /></li>

)

const Clients = () => {
  return (
    <div className='mx-[25px]'>
        <span className="text-[#ff5354] text-xs font-bold px-4">CLIENTS.</span>
        <div className='max-w-[95%] mx-auto my-20'>
            <ul className='grid md:grid-cols-2 lg:grid-cols-4 place-content-center '>
            {clientImages.map((image)=>(<ClientsListItem image={image}/>))}               
               
            </ul>
        </div>
    </div>
  )
}

export default Clients