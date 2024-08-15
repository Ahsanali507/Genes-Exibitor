import React from 'react'

const Button = ({name, onClick}) => {
  return (
    <button className="bg-red-600 text-white py-2 px-6 hover:bg-red-700 transition duration-200 w-32" onClick={onClick}>
        {name}
    </button>
  )
}

export default Button