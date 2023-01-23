import React from 'react'
import './blog.css'
import { Article } from '../../components'
// import { blog1, blog2, blog3, blog4, blog5 } from './import'


// const articleList = [{
//   'img':{ blog1 },
//   'title': 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
//   'date':'Sep 26, 2021',
//   'link':'first-blog'
// },
// {
//   'img':{ blog2 },
//   'title': 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
//   'date':'Sep 26, 2021',
//   'link':'first-blog'
// },
// {
//   'img':{ blog3 },
//   'title': 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
//   'date':'Sep 26, 2021',
//   'link':'first-blog'
// },
// {
//   'img':{ blog4 },
//   'title': 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
//   'date':'Sep 26, 2021',
//   'link':'first-blog'
// },
// {
//   'img':{ blog5 },
//   'title': 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
//   'date':'Sep 26, 2021',
//   'link':'first-blog'
// },
// ]

const Blog = () => {
  return (
    <div className='gpt3__blog section__margin'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening,<br/> We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <Article />
      </div>
    </div>
  )
}

export default Blog