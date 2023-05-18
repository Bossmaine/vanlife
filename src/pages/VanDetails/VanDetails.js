import React from 'react'
import './vanDetails.css'
import Nav from '../../components/Nav/Nav'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

export default function VanDetails() {
    const { id } = useParams()
    const [van, setVan] = useState(null);
    useEffect(() => { 
        fetch(`/api/vans/${id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
    }, [id])

    let badgeStyle;

    if ( van ) {
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
    } 
    

  return ( 
    <div>
      <Nav />
      { van ? (
        <div className='van-section van-details-section'>
          <div className="van-img">
              <img src={van.imageUrl} alt='van' />
          </div>
          <div className="card-badge" style={badgeStyle}>{van.type}</div>
          <div className="van-info">
            <h2 className='van-name'>{van.name}</h2>
            <h4>{van.price}<span>/day</span></h4>
            <p>{van.description}</p>
          </div>
          <div className="home-button">
           <button className='find-van-btn'>Rent this van</button>
         </div>
        </div>
      ) : <h1>Unaivalabe! Check back later!!</h1>
      }
        <Footer />
    </div>

  )
}
