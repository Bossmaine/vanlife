import React from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import './home.css'

export default function Home() {
  return (
    <div>
        <Nav />
        <section className='home-section'>
         <div className="home-texts">
          <h1>You got the travel plans we got the travel vans.</h1>
          <h4>Add aventure to your life by joining the #vanlife movement. <br />
            Rent the perfect van to make your perfect road trip.
          </h4>
         </div>
         <div className="home-button">
           <button className='find-van-btn'>Find your van</button>
         </div>
        </section>
        <Footer />
    </div>
  )
}
