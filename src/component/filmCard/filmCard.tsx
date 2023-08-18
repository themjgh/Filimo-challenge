import React from "react";
import { Movie } from "@/types/movie";
import Image from "next/image";
import styles from "../../styles/components/filmCard/filmCard.module.css";
import { Row, Col } from "antd";
import { LikeFilled } from "@ant-design/icons";

const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const e2p = (s: string) => s.replace(/\d/g, (d) => farsiDigits[parseInt(d)]);

const FilmCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const HoverData: React.FC<{ movie: Movie }> = ({ movie }) => {
    let genreList = movie.categories.map((cat) => {
      return cat.title;
    });
    return (
      <div className={styles.hoverDataBox}>
        <p className={styles.scoreBox} data-testid={"figcaption-scoreBox"}>
          <LikeFilled style={{ color: "#E8E8E8", marginLeft: "5px" }} />
          {`${e2p(movie.avg_rate_label)}`}
        </p>
        <p className={styles.figcaptionMovieTitle} data-testid={"figcaption-movie-title"}>{`${movie.movie_title}`}</p>
        <p className={styles.figcaptionGenre} data-testid={"figcaption-genre"}>{`${genreList.join(" - ")}`}</p>
      </div>
    );
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.coverImage}>
          <figure className={styles.figure}>
            <Image
              alt={movie.movie_title_en}
              src={movie.pic.movie_img_s}
              width={217}
              height={290}
              className={styles.coverImage}
              about={movie.movie_title_en}
              priority
              data-testid={"film-poster"}
            />
            <figcaption data-testid={"figcaption"} className={styles.figcaption}>
              <HoverData data-testid={"hover-data"} movie={movie} />
            </figcaption>
          </figure>
        </div>
        <Row
          justify={"space-between"}
          style={{ marginTop: "8px" }}
          align={"middle"}
        >
          <Col>
            <p data-testid={"movie-title"} className={styles.title}>{movie.movie_title}</p>
          </Col>
          <Col>
            <p data-testid={"score"} className={styles.scoreBox}>{`امتیاز ${e2p(
              movie.rate_avrage
            )}`}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FilmCard;
