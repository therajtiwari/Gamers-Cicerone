// import React from "react";
// //styling and animation

import React from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//REDUX
import { useDispatch } from "react-redux";
import loadDetails from "../actions/detailsActions";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

export default function GameCards({ name, released, gameImage, id }) {
  const location = useLocation();

  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    console.log("in first");
    dispatch(loadDetails(id));
    document.body.style.overflow = "hidden";
  };

  if (location.pathname === "/") {
    document.body.style.overflow = "auto";
  }

  return (
    <StyledGame onClick={loadDetailsHandler}>
      <Link
        to={`/game/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <h4 style={{ textAlign: "center", paddingTop: "1rem" }}> {name}</h4>
        <h5
          style={{ textAlign: "center", paddingBottom: "1rem", color: "grey" }}
        >
          {released}
        </h5>
        <img
          src={gameImage}
          style={{
            width: "100%",
            minHeight: "275px",
            maxHeight: "275px",
            objectFit: "cover",
          }}
          alt=""
        />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  box-shadow: 1px 1px 5px grey;
  backgroundcolor: red;
  border-radius: 5px;
  overflow: hidden;

  // padding: 1rem;

  margin: 2rem auto;
`;
