import { Button } from './Button';

import { GenreResponseProps } from '../@types/types'

interface SideBarProps {
  genres: Array<GenreResponseProps>
  selectedGenreId: number
  setSelectedGenreId: (value: number) => void
}

export const SideBar = (props: SideBarProps) => {
  const handleClickButton = (id: number) => {
    props.setSelectedGenreId(id);
  }

  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  )
}