import React from 'react'
import './about.css'
import AboutImage from '../../images/image 54.png'

export default function About() {
  return (
    <div>
      <section>
        <div className="about-image">
            <img src={AboutImage} alt="Sitting on Van" />
        </div>
        <div className="about-texts">
            <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉) <br /> <br />

            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="about-card">
            <h3>Your destination is waiting. <br />
                Your van is ready.</h3>
            <button className='explore-btn'>Explore our vans</button>
        </div>
      </section>
    </div>
  )
}
