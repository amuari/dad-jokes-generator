import React from 'react'
import dad from '../assets/dadm.jpeg'

const Card = ({ click }) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl flex justify-center items-center'>
      <figure>
        <img src={dad} alt='dad meme pic' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Here You Go</h2>
        <div>{click}</div>
        <div className='card-actions justify-end'>
          {/* <button className='btn btn-primary'>Buy Now</button> */}
        </div>
      </div>
    </div>
  )
}

export default Card
