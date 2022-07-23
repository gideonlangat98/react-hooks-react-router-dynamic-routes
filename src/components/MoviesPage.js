import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";
import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <MoviesList movies={movies} />
      <Route exact path={match.url}>
        <h3>Choose a Movie from the list above</h3>
      </Route>
      <Route path={`$match.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>
      <MovieShow />
    </div>
  );
}
export default MoviesPage;
