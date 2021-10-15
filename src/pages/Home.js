import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameActions";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
//components
import GameCards from "../components/GameCards";
import GameDetail from "../components/GameDetail";
import Nav from "../components/Nav"
import { loadSearchedGames } from '../actions/gameActions'

// import gamesReducer from "../reducers/gamesReducers";
//styling
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {

  //   fetch games
  const dispatch = useDispatch();
  const [searchedGame, changeSearchedGame] = useState('');
  const [loadmore, changeLoadMore] = useState(true);


  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadSearchedGames(searchedGame, 12));
    changeLoadMore(false);

  }


  // getting the current location
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];
  // console.log("home", typeof (pathID));
  //get the data back
  const { popular, latest, upcoming, searched } = useSelector((state) => state.games);
  return (
    <AnimateSharedLayout type="crossfade">
      <Container fluid style={{ width: "80%" }}>
        <Nav searchedGame={searchedGame} changeSearchedGame={changeSearchedGame} loadmore={loadmore} changeLoadMore={changeLoadMore} />
        <AnimatePresence>
          {pathID ? <GameDetail pathID={pathID} /> : <></>}
        </AnimatePresence>

        {searched && searched.length > 0 ?
          <GameList>
            <h2>Search Results</h2>
            <StyledGames>
              <Row>
                {searched.map((game) => (
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
              {loadmore && <Button variant="secondary" onClick={handleSubmit} style={{ float: "right" }}>Load More</Button>}
            </StyledGames>
          </GameList>
          : <> </>}
        <GameList>
          <h2>Upcoming Games</h2>
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
        </GameList>
        <GameList>
          <h2>Latest Games</h2>
          <StyledGames>
            <Row>
              {latest.map((game) => (
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
        </GameList>
        <GameList>
          <h2>Popular Games</h2>
          <StyledGames>
            <Row>
              {popular.map((game) => (
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
        </GameList>

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

      </Container >
    </AnimateSharedLayout>
  );
};

const GameList = styled(motion.div)`
        margin: 3rem auto;
       h2{
        //  color: #48434f;
         font-weight: bold;
       }
       h2:after{
         margin-top: 0.5rem;
          content: "";
          height: 2px;
          display: block;
          background-color: #b7b5bd;
          width: 100%;
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
        // margin: 3rem auto;
        `;
export default Home;
