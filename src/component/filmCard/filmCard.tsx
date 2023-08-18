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
        <p className={styles.scoreBox}>
          <LikeFilled style={{ color: "#E8E8E8", marginLeft: "5px" }} />
          {`${e2p(movie.avg_rate_label)}`}
        </p>
        <p className={styles.figcaptionMovieTitle}>{`${movie.movie_title}`}</p>
        <p className={styles.figcaptionGenre}>{`${genreList.join(" - ")}`}</p>
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
            />
            <figcaption className={styles.figcaption}>
              <HoverData movie={movie} />
            </figcaption>
          </figure>
        </div>
        <Row
          justify={"space-between"}
          style={{ marginTop: "8px" }}
          align={"middle"}
        >
          <Col>
            <p className={styles.title}>{movie.movie_title}</p>
          </Col>
          <Col>
            <p className={styles.scoreBox}>{`امتیاز ${e2p(
              movie.rate_avrage
            )}`}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FilmCard;
