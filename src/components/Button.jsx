import React from 'react'

const Button = ({text, onClick, bg}) => {
  return (
    <button className={`${bg} text-white text-lg p-2 w-full`} onClick={onClick}>
        {text }
    </button>
  )
}

export default Button
