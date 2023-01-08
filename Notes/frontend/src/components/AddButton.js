import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus  as AddIcon} from "react-icons/ai";


const AddButton = () => {
  return (
    <div>
      <Link to='/note/new' className='floating-button'> 
        <AddIcon />
      </Link>
    </div>
  )
}

export default AddButton