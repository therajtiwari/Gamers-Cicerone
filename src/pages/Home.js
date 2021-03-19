import React, { useEffect } from "react";
import { loadGames } from "../actions/gameActions";
import { useDispatch, useSelector } from "react-redux";
//components
import GameCards from "../components/GameCards";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  //   fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get the data back
  const { popular, latest, upcoming } = useSelector((state) => state.games);
  console.log(popular, latest, upcoming);
  //   popular.map((game) => console.log(game.name));

  return (
    <GameList>
      <h2>Latest Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <GameCards
            name={game.name}
            released={game.released}
            gameImage={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 8rem;
  h2 {
    padding: 3rem 0rem;
  }
`;
const Games = styled(motion.div)`
  // background-color: red;
  min-height: 40vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-column-gap: 8rem;
  grid-row-gap: 6rem;
`;
export default Home;
