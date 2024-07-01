import React from 'react'
import './Background.css'
// import image1 from '../../assets/image1.png'
// import image2 from '../../assets/image2.jpg'
import image4 from '../../assets/image4.jpg'


const Background = () => {
  return (
    <div>
        <img src={image4} className='background'alt='nothing to show'/>
    </div>
  )
}

export default Background