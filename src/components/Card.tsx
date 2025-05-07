import React from 'react'
interface CardProps {
    icon: React.ReactElement;
    title: string;
    value: string;
  }
const Card:React.FC<CardProps> = ({icon,title,value}) => {
  return (
    <div className='text-dark bg-side rounded-md shadow-md p-4 flex items-center space-x-6 hover:cursor-pointer dark:bg-gray-800 dark:text-white'>
      <div className='text-3xl text-gray-950'>{icon}</div>
      <div>
        <h2 className='text-ld font-semibold'>{title}</h2>
        <p className='text-xl'>{value}</p>
      </div>
    </div>
  )
}

export default Card
