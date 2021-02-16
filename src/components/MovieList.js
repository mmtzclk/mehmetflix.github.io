import Movie from "./Movie";

import Carousel, { consts } from "react-elastic-carousel";

import styled from "styled-components";

const MovieList = ({
  movieData,
  currentMovie,
  setCurrentMovie,
  setBackgroundImage,
}) => {
  const responsiveCarousel = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <MovieListContainer>
      <Title>
        <h3>Son Zamanların En İyi Filmleri</h3>
      </Title>
      <Movies>
        <Carousel
          itemsToShow={6}
          focusOnSelect={true}
          easing="cubic-bezier(1,.15,.55,1.54)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
          transitionMs={700}
          breakPoints={responsiveCarousel}
        >
          {movieData.map((movie) => (
            <Movie
              movieData={movieData}
              movie={movie}
              setCurrentMovie={setCurrentMovie}
              key={movie.id}
              setBackgroundImage={setBackgroundImage}
            />
          ))}
        </Carousel>
      </Movies>
    </MovieListContainer>
  );
};

const MovieListContainer = styled.div`
  position: fixed;
  margin: 0 10%;
  width: 80%;
  bottom: 20px;
`;

const Title = styled.div`
  text-align: center;
  color: white;
  font-size: 3rem;
  padding-bottom: 2rem;
`;

const Movies = styled.div`
  display: flex;
`;

export default MovieList;
