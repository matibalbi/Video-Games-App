import axios from "axios"
export const GET_VIDEOGAMES_FROM_DB = 'GET_VIDEOGAMES_FROM_DB';
export const GET_VIDEOGAMES_FROM_API = 'GET_VIDEOGAMES_FROM_API';
export const GET_VIDEOGAMES_SEARCH_FROM_DB = 'GET_VIDEOGAMES_SEARCH_FROM_DB';
export const GET_VIDEOGAMES_SEARCH_FROM_API = 'GET_VIDEOGAMES_SEARCH_FROM_API';
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAME_DETAIL';
export const GET_GENRES = 'GET_GENRES';
export const SET_VIDEOGAME_UPDATE = 'SET_VIDEOGAME_UPDATE';
export const SET_SEARCH_DB = 'SET_SEARCH_DB';
export const SET_SEARCH_API = 'SET_SEARCH_API';
export const SET_INPUT_SEARCH = 'SET_INPUT_SEARCH';
export const SET_SORT_NAME = 'SET_SORT_NAME';
export const SET_SORT_RATING = 'SET_SORT_RATING';
export const SET_FILTER_GENRE = 'SET_FILTER_GENRE';
export const SET_FILTER_TYPE = 'SET_FILTER_TYPE';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_LOADING_VIDEOGAMES_DB = 'SET_LOADING_VIDEOGAMES_DB';
export const SET_LOADING_VIDEOGAMES_API = 'SET_LOADING_VIDEOGAMES_API';
export const SET_LOADING_GENRES = 'SET_LOADING_GENRES';
export const SET_LOADING_SEARCH_DB = 'SET_LOADING_SEARCH_DB';
export const SET_LOADING_SEARCH_API = 'SET_LOADING_SEARCH_API';
export const SET_LOADING_DETAIL = 'SET_LOADING_DETAIL';
export const RESET_DETAIL = 'RESET_DETAIL';
export const RESET_UPDATE = 'RESET_UPDATE';

export const getVideogamesFromDB = () => {
    return (dispatch) => {
        return axios("/videogames/db")
        .then(res => dispatch({type: GET_VIDEOGAMES_FROM_DB, payload: res.data}))
    }
}

export const getVideogamesFromAPI = () => {
    return (dispatch) => {
        return axios("/videogames/api")
        .then(res => dispatch({type: GET_VIDEOGAMES_FROM_API, payload: res.data}))
    }
}

export const getVideogamesSearchFromDB = videogame => {
    return (dispatch) => {
        return axios(`/videogames/db?game=${videogame}`)
        .then(res => dispatch({type: GET_VIDEOGAMES_SEARCH_FROM_DB, payload: res.data}))
    }
}

export const getVideogamesSearchFromAPI = videogame => {
    return (dispatch) => {
        return axios(`/videogames/api?game=${videogame}`)
        .then(res => dispatch({type: GET_VIDEOGAMES_SEARCH_FROM_API, payload: res.data}))
    }
}

export const getVideogameDetail = id => {
    return (dispatch) => {
        return axios(`/videogame/${id}`)
        .then(res => dispatch({type: GET_VIDEOGAME_DETAIL, payload: res.data}))
    }
}

export const getGenres = () => {
    return (dispatch) => {
        return axios("/genres")
        .then(res => {
            dispatch({type: GET_GENRES, payload: res.data})
        })
    }
}

export const setVideogameUpdate = value => {
    return (dispatch) => {
        dispatch({type: SET_VIDEOGAME_UPDATE, payload: value})
    }
}

export const setSearchDB = value => {
    return (dispatch) => {
        dispatch({type: SET_SEARCH_DB, payload: value})
    }
}

export const setSearchAPI = value => {
    return (dispatch) => {
        dispatch({type: SET_SEARCH_API, payload: value})
    }
}

export const setInputSearch = value => {
    return (dispatch) => {
        dispatch({type: SET_INPUT_SEARCH, payload: value})
    }
}

export const setSortName = sortType => {
    return (dispatch) => {
        dispatch({type: SET_SORT_NAME, payload: sortType})
    }
}

export const setSortRating = sortType => {
    return (dispatch) => {
        dispatch({type: SET_SORT_RATING, payload: sortType})
    }
}

export const setFilterGenre = value => {
    return (dispatch) => {
        dispatch({type: SET_FILTER_GENRE, payload: value})
    }
}

export const setFilterType = value => {
    return (dispatch) => {
        dispatch({type: SET_FILTER_TYPE, payload: value})
    }
}

export const setCurrentPage = number => {
    return (dispatch) => {
        dispatch({type: SET_CURRENT_PAGE, payload: number})
    }
}

export const setLoadingVideogamesDB = value => {
    return (dispatch) => {
        dispatch({type: SET_LOADING_VIDEOGAMES_DB, payload: value})
    }
}

export const setLoadingVideogamesAPI = value => {
    return (dispatch) => {
        dispatch({type: SET_LOADING_VIDEOGAMES_API, payload: value})
    }
}

export const setLoadingGenres = value => {
    return (dispatch) => {
        dispatch({type: SET_LOADING_GENRES, payload: value})
    }
}

export const setLoadingSearchDB = value => {
    return (dispatch) => {
        dispatch({type: SET_LOADING_SEARCH_DB, payload: value})
    }
}

export const setLoadingSearchAPI = value => {
    return (dispatch) => {
        dispatch({type: SET_LOADING_SEARCH_API, payload: value})
    }
}

export const setLoadingDetail = value => {
    return (dispatch) => {
        dispatch({type: SET_LOADING_DETAIL, payload: value})
    }
}

export const resetDetail = () => {
    return (dispatch) => {
        dispatch({type: RESET_DETAIL, payload: {}})
    }
}

export const resetUpdate = () => {
    return (dispatch) => {
        dispatch({type: RESET_UPDATE, payload: {}})
    }
}