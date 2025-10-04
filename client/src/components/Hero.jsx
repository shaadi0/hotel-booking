import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/heroImage.png'
import { assets, cities } from '../assets/assets'

const Hero = () => {
  const style = {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (checkIn && checkOut && new Date(checkIn) > new Date(checkOut)) {
      alert('Check-out date must be the same or after check-in date')
      return
    }
    const params = new URLSearchParams({ destination, checkIn, checkOut, guests: String(guests) })
    navigate(`/search?${params.toString()}`)
  }

  return (
    <div style={style} className='relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white h-screen'>
      {/* Overlay to improve text contrast */}
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl w-full mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Welcome to QuickStay</h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow">Find and book exceptional hotels worldwide.</p>

        <form onSubmit={handleSubmit} className='bg-white text-gray-500 rounded-lg px-6 py-4 mt-8 w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 mx-auto'>
          <div className='flex-1 flex flex-wrap items-center gap-4'>
            <div className='min-w-[160px]'>
              <div className='flex items-center gap-2'>
                <img src={assets.calenderIcon} alt="" className=' h-4'/>
                <label htmlFor="destinationInput">Destination</label>
              </div>
              <input list='destinations' id="destinationInput" value={destination} onChange={(e) => setDestination(e.target.value)} type="text" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full" placeholder="Type here" required />

              <datalist id='destinations'>
                {cities.map((city, index) => (
                  <option key={index} value={city} />
                ))}
              </datalist>
            </div>

            <div className='min-w-[140px]'>
              <div className='flex items-center gap-2'>
                <img src={assets.calenderIcon} alt="" className=' h-4'/>
                <label htmlFor="checkIn">Check in</label>
              </div>
              <input id="checkIn" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full" />
            </div>

            <div className='min-w-[140px]'>
              <div className='flex items-center gap-2'>
                <img src={assets.calenderIcon} alt="" className=' h-4'/>
                <label htmlFor="checkOut">Check out</label>
              </div>
              <input id="checkOut" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full" />
            </div>

            <div className='min-w-[80px]'>
              <label htmlFor="guests">Guests</label>
              <input min={1} max={4} id="guests" value={guests} onChange={(e) => setGuests(Number(e.target.value) || 1)} type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none w-full" placeholder="0" />
            </div>
          </div>

          <button type="submit" className='ml-auto flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer w-auto'>
            <img src={assets.searchIcon} alt="searchIcon" className=' h-7'/>
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Hero