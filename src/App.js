import data from "./data";
import { useState } from "react";
import styled from "styled-components";
import MovieInfo from "./components/MovieInfo";
import GlobalStyle from "./GlobalStyle";
import MovieList from "./components/MovieList";
import { Route } from "react-router-dom";
import Watch from "./components/Watch";
import Header from "./components/Header";

function App() {
  const [movieData, setMovieData] = useState(data());
  const [currentMovie, setCurrentMovie] = useState(movieData[0]);
  const [backgroundImage, setBackgroundImage] = useState(
    currentMovie.background
  );
  return (
    <div className="App">
      <Shadow></Shadow>
      <Back src={backgroundImage} />
      <GlobalStyle backgroundImage={backgroundImage} />
      <Header />
      <Route path="/" exact>
        <MovieInfo currentMovie={currentMovie} movieData={movieData} />
        <MovieList
          movieData={movieData}
          currentMovie={currentMovie}
          setCurrentMovie={setCurrentMovie}
          setBackgroundImage={setBackgroundImage}
        />
      </Route>
      <Route path="/watch/:slug" component={Watch} />
    </div>
  );
}

const Back = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
  filter: brightness(80%);
  transition: all 1s ease-out;
`;

const Shadow = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  box-shadow: inset 0px -500px 500px -50px rgba(0, 0, 0, 0.75);
`;

export default App;
