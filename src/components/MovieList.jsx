import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { Button, ButtonGroup } from 'react-bootstrap'

function MovieList({ movieList, removeFromList }) {

    const [filteredList, setFilteredList] = useState([])

    useEffect(() => {
        setFilteredList(movieList)
    }, [movieList])

    const filterMovies = (choice) => {
        if (choice === 'all') {
            setFilteredList(movieList);
        } else {
            const updateList = movieList.filter(movie => movie.choice === choice);
            setFilteredList(updateList)
        }
        // TIDI
    }
    return (
        <>
            {movieList.length > 0 && (
                <>
                    <hr />
                    <ButtonGroup aria-label="Basic example">
                        <Button variant="primary" onClick={() => filterMovies("all")}>All</Button>
                        <Button variant="success" onClick={() => filterMovies("awesome")}>Awesome</Button>
                        <Button variant="warning" onClick={() => filterMovies("boring")}>Boring</Button>
                    </ButtonGroup>
                    <div className='d-flex flex-wrap gap-3 justify-content-between'>
                        {
                            filteredList.map(movie => {
                                return <MovieCard movie={movie}  removeMovie={removeFromList}/>
                            })
                        }
                    </div>
                </>
            )
            }
        </>
    )
}

export default MovieList