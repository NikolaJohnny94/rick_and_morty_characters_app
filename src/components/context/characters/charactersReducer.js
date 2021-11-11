import {
  GET_CHARACTERS,
  GET_CHARACTERS_BY_NAME,
  CLEAR_CHARACTERS,
  GET_CHARACTER_BY_ID,
} from '../types'

const CharactersReducer = (state, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      }
    case GET_CHARACTERS_BY_NAME:
      return {
        ...state,
        characters: action.payload.results,
        pages: action.payload.info.pages,
        next: action.payload.info.next,
        prev: action.payload.info.prev,
      }
    case CLEAR_CHARACTERS:
      return {
        ...state,
        characters: [],
        character: {},
        episodes: [],
        origin: {},
        location: {},
        pages: null,
        next: null,
        prev: null,
      }
    case GET_CHARACTER_BY_ID:
      return {
        ...state,
        character: action.payload,
        episodes: action.payload.episode,
        origin: action.payload.origin,
        location: action.payload.location,
      }
    default:
      return state
  }
}

export default CharactersReducer
