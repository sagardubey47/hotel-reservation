import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import RoomContainer from '../components/RoomContainer';

function rooms() {
    return (
       <>
       <Hero hero={"roomsHero"}> 
          <Banner
            title="Our Rooms"
            subtitle=""
          >
          <Link to="/" className="btn-primary">
             Return Home
          </Link>
          </Banner>
       </Hero>
       <RoomContainer/>
       </>
    )
}

export default rooms
