import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

   const navigate = useNavigate()

   const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
   }
  return (
    <form onSubmit={submit}>
      <input className='pokedex__input' id='search' type="text" placeholder='Find a pokemon' />
      <button className='pokedex__btn'>Search</button>
    </form>
  )
}

export default InputSearch
