import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "@/types/movie";

// state Type
export interface MovieListState {
  requestResult: Movie[];
  movieList: Movie[];
  genreFilters: string[];
  scoreFilter: string;
  filterChanged: boolean;
}

// Initial state
const initialState: MovieListState = {
  requestResult: [],
  movieList: [],
  genreFilters: [],
  scoreFilter: "default",
  filterChanged: false,
};

// Actual Slice
export const movieListSlice = createSlice({
  name: "movieListSlice",
  initialState,
  reducers: {
    setRequestResult: (state, action) => {
      let res = action.payload.requestResult;
      return {
        ...state,
        requestResult: res,
      };
    },
    setMovieList: (state, action) => {
      let movieList = action.payload.movieList;
      return {
        ...state,
        movieList: movieList,
      };
    },
    setGenreFilters: (state, action) => {
      let genreFilters = action.payload.genreFilters;
      let newState = {
        ...state,
        genreFilters: genreFilters,
      };
      return newState;
    },
    scoreFilter: (state, action) => {
      let sortType = action.payload.sortType;
      return {
        ...state,
        scoreFilter: sortType,
      };
    },

    filterChanged: (state, action) => {
      let change = action.payload.change;
      return {
        ...state,
        filterChanged: change,
      };
    },
  },
});

export const {
  setRequestResult,
  setMovieList,
  setGenreFilters,
  scoreFilter,
  filterChanged,
} = movieListSlice.actions;

export default movieListSlice.reducer;
