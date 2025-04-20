import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Search({ placeholder = "Search for a course by ID", value, onChange }) {
    return (
      <div className="flex items-center bg-white bg-opacity-30 rounded-full pl-4 py-3 w-fit max-w-xs shadow-sm pr-2">
        <FontAwesomeIcon icon="fa-solid fa-search" size="xl" className="text-white mr-3 p text-sm"  />
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-transparent text-gray-300 placeholder-gray-400 focus:outline-none w-full"
        />
      </div>
)
}

export default Search