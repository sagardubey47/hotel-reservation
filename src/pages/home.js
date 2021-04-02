import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import FeaturedRoom from '../components/FeaturedRoom'
import Hero from '../components/Hero'
import Services from '../components/Services'
  

function home() {  
    return (
        <>
            <Hero hero={"defaultHero"}> 
                <Banner 
                    title="luxurious rooms"
                    subtitle="starting at the price of $ 100 only" > 

                    <Link to="/rooms" className="btn-primary" >
                        our rooms
                    </Link>
                        
                </Banner>
             </Hero>
             <Services />
             <FeaturedRoom/>
            
        </>
    )
}

export default home
