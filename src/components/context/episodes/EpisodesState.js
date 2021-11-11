import React, { useReducer } from 'react'
import axios from 'axios'
import EpisodesContext from './episodesContext'
import EpisodesReducer from './episodesReducer'
import { GET_EPISODE_BY_ID } from '../types.js'

const EpisodesState = (props) => {
  const initialState = {
    episode: {},
    characters: [],
  }

  const [state, dispatch] = useReducer(EpisodesReducer, initialState)

  // GET Episodes by ID
  const getEpisodeByID = async (id) => {
    const res = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
    dispatch({
      type: GET_EPISODE_BY_ID,
      payload: res.data,
    })
  }

  return (
    <EpisodesContext.Provider
      value={{
        episode: state.episode,
        characters: state.characters,
        getEpisodeByID,
      }}
    >
      {props.children}
    </EpisodesContext.Provider>
  )
}

export default EpisodesState
