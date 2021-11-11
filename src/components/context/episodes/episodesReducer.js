import { GET_EPISODE_BY_ID } from '../types.js'

const EpisodesReducer = (state, action) => {
  switch (action.type) {
    case GET_EPISODE_BY_ID:
      return {
        ...state,
        episode: action.payload,
        characters: action.payload.characters,
      }
    default:
      return state
  }
}

export default EpisodesReducer
