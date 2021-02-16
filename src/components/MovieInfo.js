import styled from "styled-components";
import { Link, Route } from "react-router-dom";

import Watch from "./Watch";

import { motion } from "framer-motion";
import { titleAnim } from "../animation";
import slugify from "slugify";

const MovieInfo = ({ currentMovie, movieData }) => {
  return (
    <MovieInfoContainer>
      <Title variants={titleAnim}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          {currentMovie.title}
        </motion.h1>
      </Title>
      <Info>
        <Reviews>
          <h5>{currentMovie.reviews} Değerlendirme</h5>
        </Reviews>
        <Imdb>
          <h5>
            IMDb <span>{currentMovie.imdb}</span>
          </h5>
        </Imdb>
        <Year>
          <h5>{currentMovie.year}</h5>
        </Year>
        <Categories>
          <h5>{currentMovie.categories}</h5>
        </Categories>
      </Info>
      <Description>
        <p>{currentMovie.description}</p>
      </Description>
      <Link
        to={`watch/${slugify(currentMovie.title, {
          replacement: "-",
          remove: undefined,
          lower: true,
          strict: false,
          locale: "vi",
        })}`}
      >
        <Button>
          <i className="bi bi-play-fill"></i> Fragmanı İzle
        </Button>
      </Link>
    </MovieInfoContainer>
  );
};

const MovieInfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 40rem;
  padding: 3rem 4rem;
  border-radius: 10px;
  margin: 5% 10%;
`;

const Title = styled(motion.div)`
  h1 {
    font-size: 3rem;
    color: white;
  }
`;

const Info = styled.div`
  display: flex;
  padding: 1rem 0rem;
  color: #979c9b;
`;

const Reviews = styled.div``;

const Imdb = styled.div`
  margin: 0rem 3rem;
`;

const Year = styled.div`
  padding-right: 3rem;
`;

const Categories = styled.div``;

const Description = styled.div`
  margin: 2rem 0rem;
  color: #979c9b;
  letter-spacing: 1px;
  line-height: 20px;
`;

const Button = styled.button`
  i {
    font-size: 1.2rem;
  }
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 6px;
  background-color: #00a0d6;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1.5px;
  cursor: pointer;
`;

export default MovieInfo;
