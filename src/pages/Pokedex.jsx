import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import SelectByType from '../components/pokedex/SelectByType'
import Pagination from '../components/pagination/Pagination'
import "../index.css"
import "./styles/pokedex.css"

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()

  const [typeSelected, setTypeSelected] = useState("All Pokemons")




  useEffect(() => {
    if (typeSelected !== "All Pokemons") {
      axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      axios.get(URL)
        .then(res => {
          setPokemons(res.data.results)
        })
        .catch(err => console.log(err))
    }

  }, [typeSelected])

  const userName = useSelector(state => state.userName)

  const [page, setPage] = useState(1)

  const [pokePerPage, setPokePerPage] = useState(8)

  const initialPoke = (page - 1) * pokePerPage

  const finalPoke = page * pokePerPage


  return (
    <div>
      <header className='pokedex__header-container'>
        <img className='pokedex__img' src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png" alt="" />
        <p className='pokedex__header-p'>Welcome <span className='userName'>{userName}</span>, here you can find your favorite Pokemon.</p>
      </header>

      <aside className='pokedex__aside'>
        <InputSearch />
        <SelectByType setPage={setPage} setTypeSelected={setTypeSelected} />

      </aside>

      <div className='card__container'>
        {
          pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
            <CardPoke
              key={pokemon.url}
              url={pokemon.url}
            />
          ))
        }
      </div>
              <Pagination setPage={setPage} page={page} pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}/>

    </div>
  )
}

export default Pokedex
