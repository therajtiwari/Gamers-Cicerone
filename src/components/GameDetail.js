import React from "react";
//REDUX
import { useSelector } from "react-redux";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const GameDetail = () => {
  const { gameSS, gameDetail } = useSelector((state) => state.details); //see how it extracts from the data
  console.log(gameDetail, gameSS);

  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{gameDetail.name}</h3>
            <p>Rating: {gameDetail.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {gameDetail.platforms.map((data) => (
                <h3>{data.platform.name} </h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img
            src={gameDetail.background_image}
            alt={gameDetail.name + "-main"}
          />
        </div>
        <div className="description">
          <p>{gameDetail.description_raw}</p>
        </div>
        <div className="gallery">
          {gameSS.results.map((ss) => (
            <img src={ss.image}></img>
          ))}
        </div>
      </Detail>
    </CardShadow>
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
  z-index:2;
  display: flex;
  justify-content: center;
 
  &::-webkit-scrollbar{
      width:0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color:teal;
}
&::-webkit-scrollbar-track{
    background:white;
}
  
 
`;

const Detail = styled(motion.div)`

  width: 80%;
  border-radius: 0.5rem;
  color: black;
  margin:0rem auto;
  padding: 4rem 10rem;
  background: white;
  position: absolute;
  img {
    width: 100%;
  }

`;
export default GameDetail;
