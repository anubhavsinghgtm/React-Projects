import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import arrowLeft  from '../assets/icons/arrow-left.svg'


const NotePage = () => {

  
  const { id } = useParams();
  let noteId = id
  

  let [note , setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId]
  )
  
  let getNote = async () => {
    
    let response = await fetch(`/api/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  } 


  return (
    <div className='note'>
      <div className='note-header'>
      
          <Link to="/">

            {/* <img className="back" src={require('../assets/icons/arrow-left.svg')}/> */}
            <img className="back" src={require('../assets/icons/arrowLeft.png')}/>
          </Link>
      </div>
      <textarea value={note?.body}>

      </textarea>
      
    </div>
  )
}

export default NotePage