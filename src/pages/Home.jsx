import React from 'react'
import FormHome from '../components/home/FormHome'
import "./styles/home.css"

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex__img' src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png" alt="" />
      <header className='pokedex__header'>
        <h2 className='pokedex__subtitle'>Hi trainer</h2>
        <p className='pokedex__text'>Type your name trainer</p>
      </header>

      <FormHome />
    </article>
  )
}

export default Home
