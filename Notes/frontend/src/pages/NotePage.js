import React, {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'



const NotePage = () => {

  
  const params = useParams();
  let navigate = useNavigate();
  let noteId = params.id
  
  
  

  let [note , setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId]
  )
  

  // ------------------- Get Note ------------------ 

  let getNote = async () => {

    
    let response = await fetch(`/api/notes/${noteId}`)
    let data = await response.json()
    setNote(data)
  } 


  // -------------------- Update Note -------------

  let updateNote = async () => {
    
    fetch(`/api/notes/${noteId}/update/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
   
  }


  // --------------------- Delete Note ------------

  let deleteNote = async () => {

    fetch(`/api/notes/${noteId}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
      
    })

    navigate('/')
  }

  // -------------------------- ADD Note -----------

  let createNote = async () => {
    fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }


  // ----------- to handle the back button --------------

  let handleSubmit = async () => {
    if(noteId!=='new' && !note.body){
      deleteNote()
    } else if (noteId !== 'new'){
      updateNote()
    }
    else if(noteId == 'new' && note !== null){
      createNote()
    }


    updateNote()
    navigate('/')

  }


  return (
    <div className='note'>
      
      <div className='note-header'>
        <img className="back" onClick={handleSubmit} src={require('../assets/icons/arrowLeft.png')}/>  
        {noteId !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ): (
          <button onClick={handleSubmit}>Done</button>
        )}
        
      </div>

      <textarea onChange={ (e) => {
        setNote({...note, 'body': e.target.value})
      }} value={note?.body}>

      </textarea>
      
    </div>
  )
}

export default NotePage