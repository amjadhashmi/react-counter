import React from 'react'

const Counter = ({value}) => {
  return (
     <div
          className={`bg-gray-400 text-center text-2xl font-bold p-4 ${
            value > 0
              ? "text-green-600"
              : value < 0
              ? "text-red-600"
              : "text-black"
          }`}
        >
          {value}
        </div>
  )
}

export default Counter
