import React from 'react'
import '../../styles/Card.css'

const Card = ({courses}) => {
  const {title, description, instructor} = courses
  return (
    <>
      <div className='card_body'>
        <div className='card_content'>
          <h3>{title}</h3>
          <div className='describe_div'>
            <p className='text_bold'>Description</p>
            <p className='text_describe'>{description}</p>
          </div>
          
          <div className='instruct_div'>
            <p className='text_bold'>Instructor: <span className='text_describe'>{instructor}</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card