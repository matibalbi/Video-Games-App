import axios from "axios"
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_SORT = 'SET_SORT';
export const GET_GENRES = 'GET_GENRES';
export const SET_FILTER_GENRE = 'SET_FILTER_GENRE';
export const SET_FILTER_TYPE = 'SET_FILTER_TYPE';

export function getVideogames() {
    return (dispatch) => {
        return axios("http://localhost:3001/videogames")
        .then(res => dispatch({type: GET_VIDEOGAMES, payload: res.data}))
    }
}

export function getVideogameDetail(id) {
    return (dispatch) => {
        return axios(`http://localhost:3001/videogame/${id}`)
        .then(res => dispatch({type: GET_VIDEOGAME_DETAIL, payload: res.data}))
    }
}

export function setCurrentPage(number) {
    return (dispatch) => {
        dispatch({type: SET_CURRENT_PAGE, payload: number})
    }
}

export function setSort(type) {
    return (dispatch) => {
        dispatch({type: SET_SORT, payload: type})
    }
}

export function getGenres() {
    return (dispatch) => {
        return axios("http://localhost:3001/genres")
        .then(res => dispatch({type: GET_GENRES, payload: res.data}))
    }
}

export function setFilterGenre(value) {
    return (dispatch) => {
        dispatch({type: SET_FILTER_GENRE, payload: value})
    }
}

export function setFilterType(value) {
    return (dispatch) => {
        dispatch({type: SET_FILTER_TYPE, payload: value})
    }
}