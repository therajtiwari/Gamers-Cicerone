import React from "react";
//REDUX
import { useSelector } from "react-redux";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const GameDetail = () => {
  const { gameSS, gameDetail, isLoading } = useSelector(
    (state) => state.details
  ); //see how it extracts from the data

  return (
    <>
      {!isLoading && (
        <CardShadow>
          <Detail>
            <Stats>
              <Rating>
                <h3>{gameDetail.name}</h3>
                <h3 style={{ marginTop: "1rem" }}>
                  Rating: {gameDetail.rating}
                </h3>
              </Rating>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameDetail.platforms.map((data) => (
                    <h3>{data.platform.name} </h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={gameDetail.background_image}
                alt={gameDetail.name + "-main"}
              />
            </Media>
            <Description>
              <p>{gameDetail.description_raw}</p>
            </Description>
            <Gallery>
              {gameSS.results.map((ss) => (
                <img src={ss.image} alt={ss.image} key={ss.image}></img>
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: teal;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 82%;
  border-radius: 0.5rem;
  color: black;
  margin: 0rem auto;
  padding: 4rem 7rem;
  background: white;
  position: absolute;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Rating = styled(motion.div)``;

const Platforms = styled(motion.div)`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Media = styled(motion.div)`
  margin: 3rem 2rem;
  margin-top: 5rem;
`;

const Description = styled(motion.div)`
  margin: 4rem 0rem;
  line-height: 1.8rem;
`;

const Gallery = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 50%;
    padding: 1rem;
  }
`;

export default GameDetail;
