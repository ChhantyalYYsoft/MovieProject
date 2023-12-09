import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({ movie, addMovieToList, removeMovie }) {
    return (
        <Card style={{ width: '20rem', paddingBottom:'1rem', marginTop: '1rem', marginBottom: '1rem'}}>
            <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank" rel="noreferrer">
                <Card.Img variant="top" src={movie.Poster} />
            </a>
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                    <div>Rating: {movie.imdbRating} </div>
                    <div>Actors: {movie.Actors} </div>
                    {movie?.choice && <div style={{
                        color: movie.choice === 'awesome' ? 'green' : "yellow"
                    }}>Choice: {movie.choice} </div>}
                    <div style={
                        {
                            color: "purple"
                        }

                    }>Plot: {movie.Plot}</div>
                </Card.Text>
                <div className='d-flex justify-content-between gap-1'>

                    {addMovieToList && <><Button variant="success" style={{
                        flex: "1"
                    }} onClick={() => addMovieToList(movie, "awesome")}>Awesome</Button>
                        <Button variant="warning" style={{
                            flex: "1"
                        }}
                            onClick={() => addMovieToList(movie, "boring")}
                        >  Boring</Button>
                    </>
                    }

                    <Button variant="danger" style={{
                        flex: "1"
                    }}
                        onClick={() => removeMovie(movie)}
                    >
                        Delete</Button>
                </div>
            </Card.Body>
        </Card >
    )
}

export default MovieCard