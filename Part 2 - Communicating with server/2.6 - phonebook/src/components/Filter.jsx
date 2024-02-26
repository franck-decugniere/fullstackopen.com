import React from 'react'

export const Filter = ({newFilter, updateFilter}) => {
  return (
    <div>Filter shown with <input value={newFilter} onChange={updateFilter}/></div>
  )
}
