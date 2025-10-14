import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {
  const navigate = useNavigate(); 

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      <Title
        title='Featured Destinations'
        subTitle='Explore some of the most popular destinations around the world with our curated selection of hotels.'
        align='center'
        font='font-playfair'
      />

      <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/rooms');
          window.scrollTo(0, 0);
        }}
        className='mt-12 px-4 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all'
      >
        View All Destinations
      </button>
    </div>
  )
}

export default FeaturedDestination
