"use client";
import styles from "@/styles/home/home.module.css";
import { useState, useEffect } from "react";
import { Movie } from "@/types/movie";
import { Row, Col } from "antd";
import GenreFilter from "@/component/filterts/genre";
import ScoreFilter from "@/component/filterts/score";
import FilmCard from "@/component/filmCard/filmCard";
import { NextPage } from "next";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
// redux hooks
import { useAppSelector } from "@/redux/store";
import {
  setRequestResult,
  setMovieList,
  setGenreFilters,
  scoreFilter,
} from "@/redux/features/movieListSlice";

import { useDispatch } from "react-redux";

const HomePage: NextPage = () => {
  const dispatch = useDispatch();
  const [firstLoad, setFirstLoad] = useState(true);

  // app router version navigation hooks
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const makeFirstFilter = (moviesList: Movie[]) => {
    let genreFilterList: string[] = [];
    const sortType = searchParams.getAll("sortType");
    let sortOrder = "default";

    if (searchParams.getAll("filters").length !== 0) {
      genreFilterList = searchParams.getAll("filters")[0].split(",");
      dispatch(setGenreFilters({ genreFilters: genreFilterList }));
    } else {
      dispatch(setGenreFilters({ genreFilters: [] }));
    }

    if (sortType.length !== 0) {
      sortOrder = sortType[0];
      dispatch(scoreFilter({ sortType: sortOrder }));
    } else {
      dispatch(scoreFilter({ sortType: "default" }));
    }

    // filter and sort function
    const filterFunction = (movies: Movie[], filters: string[]): Movie[] => {
      let filteredMovies = movies.filter((movie) => {
        let fetchedCategories = movie.categories.filter((category) => {
          return filters.includes(category.title_en);
        });
        if (fetchedCategories.length !== 0) {
          return true;
        }
        return false;
      });
      return filteredMovies;
    };
    const sortFunction = (movies: Movie[], sortType: string): Movie[] => {
      let sortedList = [...movies];
      sortedList.sort((movie1, movie2) => {
        return parseFloat(movie1.rate_avrage) - parseFloat(movie2.rate_avrage);
      });
      if (sortType !== "desc") {
        sortedList.reverse();
      }
      return sortedList;
    };

    let movieListTemp = [...moviesList];

    if (genreFilterList.length !== 0) {
      movieListTemp = filterFunction([...moviesList], genreFilterList);
    }
    if (sortOrder !== "default") {
      movieListTemp = sortFunction(movieListTemp, sortOrder);
    }

    dispatch(
      setMovieList({
        movieList: movieListTemp,
      })
    );
  };
  // fetch data from movies api
  useEffect(() => {
    const getServerSideProps = () => {
      fetch("http://localhost:3000/api/movies").then((res) => {
        res.json().then((movieList: Movie[]) => {
          dispatch(setRequestResult({ requestResult: movieList }));
          dispatch(setMovieList({ movieList: movieList }));
          makeFirstFilter(movieList);
        });
      });
    };
    getServerSideProps();
  }, []);

  let requestResult: Movie[] = useAppSelector((state) => {
    return state.movieListSlice.requestResult;
  });

  let moviesList: Movie[] = useAppSelector((state) => {
    return state.movieListSlice.movieList;
  });

  let genreFilters: string[] = useAppSelector((state) => {
    return state.movieListSlice.genreFilters;
  });

  let scoreFilterType: string = useAppSelector((state) => {
    return state.movieListSlice.scoreFilter;
  });

  let filterChange: boolean = useAppSelector((state) => {
    return state.movieListSlice.filterChanged;
  });

  // filter movies based on genre and score filter states
  useEffect(() => {
    const filterHandler = () => {
      if (firstLoad) {
        return;
      }
      let genreFilterList: string[] = [];
      const sortType = searchParams.getAll("sortType");
      let sortOrder = "default";

      if (searchParams.getAll("filters").length !== 0) {
        genreFilterList = searchParams.getAll("filters")[0].split(",");
        dispatch(setGenreFilters({ genreFilters: genreFilterList }));
      } else {
        dispatch(setGenreFilters({ genreFilters: [] }));
      }

      if (sortType.length !== 0) {
        sortOrder = sortType[0];
        dispatch(scoreFilter({ sortType: sortOrder }));
      } else {
        dispatch(scoreFilter({ sortType: "default" }));
      }

      // filter and sort function
      const filterFunction = (movies: Movie[], filters: string[]): Movie[] => {
        let filteredMovies = movies.filter((movie) => {
          let fetchedCategories = movie.categories.filter((category) => {
            return filters.includes(category.title_en);
          });
          if (fetchedCategories.length !== 0) {
            return true;
          }
          return false;
        });
        return filteredMovies;
      };
      const sortFunction = (movies: Movie[], sortType: string): Movie[] => {
        let sortedList = [...movies];
        sortedList.sort((movie1, movie2) => {
          return (
            parseFloat(movie1.rate_avrage) - parseFloat(movie2.rate_avrage)
          );
        });
        if (sortType !== "desc") {
          sortedList.reverse();
        }
        return sortedList;
      };

      let movieListTemp = [...requestResult];

      if (genreFilterList.length !== 0) {
        movieListTemp = filterFunction([...requestResult], genreFilterList);
      }
      if (sortOrder !== "default") {
        movieListTemp = sortFunction(movieListTemp, sortOrder);
      }

      dispatch(
        setMovieList({
          movieList: movieListTemp,
        })
      );
    };

    filterHandler();
  }, [searchParams]);

  // change url query params (searchParams) based on genre and score filter states
  useEffect(() => {
    const genreFilterList = searchParams.getAll("filters");
    const sortType = searchParams.getAll("sortType");
    if (sortType.length === 0) {
      sortType[0] = "default";
    }

    const genreateUrlWithParam = () => {
      if (genreFilters.length === 0) {
        router.push(`${pathname}?sortType=${scoreFilterType}`);
      } else {
        router.push(
          `${pathname}?sortType=${scoreFilterType}&filters=${genreFilters}`
        );
      }
    };

    if (firstLoad) {
      setFirstLoad(false);
    } else {
      genreateUrlWithParam();
    }

    //if user enter url with query param
  }, [filterChange]);

  return (
    <>
      <Row justify={"center"} style={{ marginTop: "28px", direction: "rtl" }}>
        <Col lg={8} sm={24} xs={23}>
          <GenreFilter />
        </Col>
        <Col lg={8} sm={24} xs={23}>
          <ScoreFilter />
        </Col>
      </Row>
      <Row justify={"start"} className={styles.movieListBox}>
        {moviesList.map((movie: Movie) => {
          return (
            <Col
              key={movie.movie_id}
              xxl={4}
              xl={4}
              lg={6}
              md={8}
              sm={24}
              xs={24}
            >
              <FilmCard movie={movie} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomePage;
