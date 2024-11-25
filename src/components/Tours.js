import React from 'react'
import Card from './Card';

const Tours = ({tours, removetour}) => {
  return (
    <div className='container'>
        <div className='heading'>
            <h2>plan with love</h2>
        </div>

        <div className='cards' >

            {
                 tours.map( (tour)=>{
                    return <Card  key = {tour.id}{...tour} removetour = {removetour}></Card>
                 })
            }
        </div>


    </div>
  )
}

export default Tours;
