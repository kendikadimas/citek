import React from 'react'

const Card = ({image, title, description}) => {
    return (
    <div className='text-left w-1/2 p-5 mt-6'>
        <img/>{image}
        <h3 className='font-bold'>{title}</h3>
        <p className=''>{description}</p>
    </div>   
    );              
    };

export default Card;