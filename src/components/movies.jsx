import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import "font-awesome/css/font-awesome.css";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import {
  handleDelete,
  handleGenre,
  handleLike,
  // handleLikeIcon,
  handlePageChange,
  handleSort,
} from "../utils/movies-functions";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: getGenres(),
    selectedGenre: getGenres()[0],
    sortColumn: { path: "title", order: "asc" },
  };

  render() {
    const { length: count } = this.state.movies;
    const { movies: allMovies, currentPage, pageSize, sortColumn } = this.state;
    if (count === 0) return <p>No Movies In database.</p>;

    const sorted = _.orderBy(allMovies, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <>
        <div className="row">
          <div className="col-3">
            <ListGroup
              genres={this.state.genres}
              onSelectGenre={handleGenre.bind(this)}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col">
            <p>There Are {count} Movie.</p>
            <MoviesTable
              movies={movies}
              onDelete={handleDelete.bind(this)}
              onLike={handleLike.bind(this)}
              onSort={handleSort.bind(this)}
            />
            <Pagination
              itemsCount={count}
              pageSize={this.state.pageSize}
              onPageChange={handlePageChange.bind(this)}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
