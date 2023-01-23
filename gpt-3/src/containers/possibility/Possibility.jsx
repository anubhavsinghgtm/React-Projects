import React from 'react'
import './possibility.css'
import possibilityImage  from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__margin'>

      <div className='gpt3__possibility-images'>
        <img src={ possibilityImage } alt='possibilities'/>
      </div>

      <div className='gpt3__possibility-content'>
        <div className='gpt3__possibility-content-pre_text'>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className='gpt3__possibility-content-heading'>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        </div>
        <div className='gpt3__possibility-content-text'>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <div className='gpt3__possibility-content-post_text'>
          <p>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  )
}

export default Possibility