import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameActions";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
//components
import GameCards from "../components/GameCards";
import GameDetail from "../components/GameDetail";
// import gamesReducer from "../reducers/gamesReducers";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  //   fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // getting the current location
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];
  // console.log(pathID);
  //get the data back
  const { popular, latest, upcoming } = useSelector((state) => state.games);
  return (
    <Container fluid style={{ width: "80%" }}>
      {pathID && <GameDetail />}
      <h2>Latest Popular Games</h2>

      <StyledGames>
        <Row>
          {upcoming.map((game) => (
            <Col md={6} sm={12} lg={4}>
              <GameCards
                name={game.name}
                released={game.released}
                gameImage={game.background_image}
                id={game.id}
                key={game.id}
              />
            </Col>
          ))}
        </Row>
      </StyledGames>

      {/* <GameList>
        {pathID && <GameDetail />}
        <h2>Latest Popular Games</h2>
        <StyledGames>
          {popular.map((game) => (
            <GameCards
              name={game.name}
              released={game.released}
              gameImage={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </StyledGames>
      </GameList>
      <GameList>
        {pathID && <GameDetail />}
        <h2>Upcoming Popular Games</h2>
        <StyledGames>
          {upcoming.map((game) => (
            <GameCards
              name={game.name}
              released={game.released}
              gameImage={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </StyledGames>
      </GameList> */}
    </Container>
  );
};

const GameList = styled(motion.div)`
  margin: 3rem auto;
  width: 80%;
  h2 {
    padding: 3rem 0rem;
  }

  // text-align: center;
`;
const StyledGames = styled(motion.div)`
  // background-color: red;
  // min-height: 40vh;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  // grid-column-gap: 4rem;
  // grid-row-gap: 6rem;
`;
export default Home;
