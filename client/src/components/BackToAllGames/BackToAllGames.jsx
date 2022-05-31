import {useDispatch, useSelector} from "react-redux"
import {setCurrentPage, setFilterGenre, setFilterType, setSortName, setSortRating, setSearch} from "../../redux/actions";
import './BackToAllGames.css'

const BackToAllGames = () => {

  const sortName = useSelector(state => state.sortName)
  const sortRating = useSelector(state => state.sortRating)
  const filterGenre = useSelector(state => state.filterGenre)
  const filterType = useSelector(state => state.filterType)
  const currentPage = useSelector(state => state.currentPage)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setSearch(false))
    if (sortName !== "") dispatch(setSortName(""))
    if (sortRating !== "") dispatch(setSortRating(""))
    if (filterGenre !== "all") dispatch(setFilterGenre("all"))
    if (filterType !== "all") dispatch(setFilterType("all"))
    if (currentPage !== "1") dispatch(setCurrentPage(1))
  }

  return (
    <div className='containerBack'>
      <button type="button" onClick={handleClick}>Back to all videogames</button>
    </div>
  );
}

export default BackToAllGames;