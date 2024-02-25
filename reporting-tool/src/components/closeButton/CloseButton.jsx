import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setPreviewClosed } from '../../features/joinSlice'

function CloseButton() {
  const dispatch = useDispatch()
  return (
    <Button
        className={`close-button pt-0 mb-2 pe-0 pointer rounded d-flex align-items-center`}
        onClick={() => dispatch(setPreviewClosed(true))} 
      >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill='rgba(148,154,171)'
            viewBox="0 0 16 16" 
            role="img" 
            aria-label="close icon" 
            className="Icon Icon-close text-light text-medium-hover cursor-pointer ml1" 
            width="20" 
            height="20">
            <path 
                d="M4.53 3.47a.75.75 0 0 0-1.06 1.06L6.94 8l-3.47 3.47a.75.75 0 1 0 1.06 1.06L8 9.06l3.47 3.47a.75.75 0 1 0 1.06-1.06L9.06 8l3.47-3.47a.75.75 0 0 0-1.06-1.06L8 6.94 4.53 3.47z">
            </path>
        </svg>
    </Button>
  )
}

export default CloseButton