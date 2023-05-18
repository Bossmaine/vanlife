import React from 'react'
import './vans.css'
import Nav from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'


export default function Vans() {

  const [vans, setVans] = useState([])
  useEffect(() => {
      fetch("/api/vans")
          .then(res => res.json())
          .then(data => setVans(data.vans))
  }, [])

  const cardElements = vans.map(van => {

    let badgeStyle;

    switch (van.type) {
      case 'luxury':
        badgeStyle = { backgroundColor: '#161616' };
        break;
      case 'simple':
        badgeStyle = { backgroundColor: '#E17654' };
        break;
      case 'rugged':
        badgeStyle = { backgroundColor: '#115E59' };
        break;
      default:
        badgeStyle = {};
    }

    return (
      <Link key={van.id} to={`/vans-details/${van.id}`}>
        <div  className='card'>
        <div className="card-img">
          <img src={van.imageUrl} alt='van' />
        </div>
        <div className="card-content">
          <div className="card-title">
              <h4>{van.name}</h4>
              <h4>{van.price}<span>/day</span></h4>
          </div>
          <div className="card-badge" style={badgeStyle}>{van.type}</div>
        </div>
        </div>
      </Link>
    )
  })
    
  return (
    <div>
      <Nav />
      <div className="van-section">
        <div className="vans">
         <h2 className='text-headers'>Explore our van options</h2>
        </div>
        <div className="filter-options">
          <button className='filter-btn'>Simple</button>
          <button className='filter-btn'>Luxury</button>
          <button className='filter-btn'>Rugged</button>
          <Link to='/vans' className='clear-filter'>Clear Filters</Link>
        </div>
        <div className="van-container">
          {cardElements}
        </div>
      </div>
      <Footer />
    </div>
  )
}
