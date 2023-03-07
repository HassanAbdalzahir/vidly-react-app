import { getMoviesByGeners } from "../services/fakeMovieService";

export function handleLike(movie) {
  const movies = [...this.state.movies];
  const index = movies.indexOf(movie);
  movies[index].liked === true
    ? (movies[index].liked = false)
    : (movies[index].liked = true);
  this.setState({ movies });
}

export function handleDelete(id) {
  // deleteMovie(id);
  const movies = this.state.movies.filter((movie) => movie._id !== id);
  this.setState({ movies });
}

export function handlePageChange(page) {
  const currentPage = page;
  this.setState({ currentPage });
}

export function handleGenre(genre) {
  const movies = getMoviesByGeners(genre);
  this.setState({ movies: movies, selectedGenre: genre });
}

export function handleSort(path) {
  const sortColumn = { ...this.state.sortColumn };
  if (sortColumn.path === path)
    sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  else {
    sortColumn.path = path;
    sortColumn.order = "asc";
  }
  this.setState({ sortColumn });
}
