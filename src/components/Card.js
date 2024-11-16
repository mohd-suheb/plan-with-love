import React, { useState } from 'react'

const Card = ({id, name, info , image, price, removetour}) => {
    const [readmore, setreadmore] = useState(false);
    const description = readmore ? info :`${info.substring(0, 200)}....`;

    function readmorehadler(){
        setreadmore(!readmore);
    }
  return (
    

        <div className='card'>

            <img src={image} className='image'/>

            <div className='tour-info'>
            <div className='tour-Details'>
                <h4 className='tour-price'>{price}</h4>
                <h4 className='tour-name'>{name}</h4>
                </div> 
                <div className='description'>
                {description}
                <span className='read-more' onClick={readmorehadler}>
                    {readmore? `show less` :`read-more`};
                </span>
                </div>
            </div>
           
                
                
         
            <button className='bt-red ' onClick={()=>removetour(id)}>
            not intrested
            </button>
            
            </div> 

  
  )
}

export default Card;