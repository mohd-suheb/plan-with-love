import React from 'react'

const Tours = ({tours, removetour}) => {
  return (
    <div>
        <div>
            <h2>plan with love</h2>
        </div>

        <div>

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
