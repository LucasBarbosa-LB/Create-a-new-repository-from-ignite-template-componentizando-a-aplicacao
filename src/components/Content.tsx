import { MovieCard } from './MovieCard';

import { GenreResponseProps, MovieProps } from '../@types/types'

interface ContentProps {
  selectedGenre: GenreResponseProps
  movies: Array<MovieProps>
}

export const Content = (props: ContentProps) => (
  <>
    <header>
      <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {props.movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  </>
)