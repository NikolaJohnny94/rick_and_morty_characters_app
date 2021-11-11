import React, { useReducer } from 'react'
import axios from 'axios'
import CharactersContext from './charactersContext.js'
import CharactersReducer from './charactersReducer.js'
import {
  GET_CHARACTERS,
  GET_CHARACTERS_BY_NAME,
  CLEAR_CHARACTERS,
  GET_CHARACTER_BY_ID,
} from '../types.js'

const CharactersState = (props) => {
  const initialState = {
    characters: [],
    character: {},
    episodes: [],
    origin: {},
    location: {},
    pages: null,
    next: null,
    prev: null,
  }

  const [state, dispatch] = useReducer(CharactersReducer, initialState)

  // GET Characters
  const getCharacters = async () => {
    const res = await axios.get('https://rickandmortyapi.com/api/character')
    dispatch({
      type: GET_CHARACTERS,
      payload: res.data.results,
    })
  }

  // GET Characters by Name [Search Field]
  const getCharactersByName = async (text, page) => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${text}&page=${page}`
    )
    dispatch({
      type: GET_CHARACTERS_BY_NAME,
      payload: res.data,
    })
  }

  // GET Characters by ID
  const getCharactersById = async (id) => {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    )
    dispatch({
      type: GET_CHARACTER_BY_ID,
      payload: res.data,
    })
  }
  // CLEAR Characters [Search Field]
  const clearCharacters = () => dispatch({ type: CLEAR_CHARACTERS })

  return (
    <CharactersContext.Provider
      value={{
        characters: state.characters,
        character: state.character,
        episodes: state.episodes,
        origin: state.origin,
        location: state.location,
        pages: state.pages,
        next: state.next,
        prev: state.prev,
        getCharacters,
        getCharactersByName,
        getCharactersById,
        clearCharacters,
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  )
}

export default CharactersState
