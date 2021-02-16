import styled from "styled-components";
import Tilt from "react-parallax-tilt";

const Movie = ({ movie, setCurrentMovie, setBackgroundImage, movieData }) => {
  const changeMovie = () => {
    setCurrentMovie(movie);
    setBackgroundImage(movie.background);
  };

  return (
    <Image onClick={changeMovie}>
      <Tilt className="parallax-effect" scale={1.5} transitionSpeed={2500}>
        <img src={movie.poster} alt="" />
        <div className="inner-element">{movie.title}</div>
      </Tilt>
    </Image>
  );
};

const Image = styled.div`
  img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
    pointer-events: none;
  }

  &:hover {
    .inner-element {
      visibility: visible;
    }
  }

  &:hover img {
    filter: brightness(30%);
  }

  .inner-element {
    position: absolute;
    align-items: center;
    font-size: 25px;
    color: white;
    transform: translateZ(60px);
    visibility: hidden;
  }
  .parallax-effect {
    @include background;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: darkgreen;
    color: white;
    border-radius: 20px;
    transform-style: preserve-3d;
  }
`;
export default Movie;
