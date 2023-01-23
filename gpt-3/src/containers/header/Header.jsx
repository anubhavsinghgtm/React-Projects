import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's build something amazing with GPT-3 Open AI</h1>
        <p>Yet bed any for travelling assistance indulge unpleasing.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1600 people has request access to the platform in last 24 hours.</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header