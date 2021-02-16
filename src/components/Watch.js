import data from "../data";
import { useEffect, useState } from "react";
import slugify from "slugify";
import styled from "styled-components";

const Watch = ({ match }) => {
  const [movieData, setMovieData] = useState(data());
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movieData.filter(
      (stateMovie) =>
        slugify(stateMovie.title, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
        }) === match.params.slug
    );
    setMovie(currentMovie[0]);
  }, [movieData, match.params.id]);

  return (
    <div>
      {movie && (
        <div>
          <Back src={movie.background} />
          <VideoContainer>
            <iframe
              width="50%"
              height="55%"
              src={`https://www.youtube.com/embed/${movie.video}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="none"
            ></iframe>
          </VideoContainer>
        </div>
      )}
    </div>
  );
};

const Back = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  filter: brightness(20%);
  transition: all 1s ease-out;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Watch;
