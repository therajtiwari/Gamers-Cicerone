import { React, useEffect } from "react";

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
  const stringID = id.toString();
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {

    dispatch(loadDetails(id));
    console.log("path from gamecard", typeof (toString(id)))
    document.body.style.overflow = "hidden";
  };

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     console.log("testingggggg");
  //     document.body.style.overflow = "auto";
  //   }

  // }, [])

  if (location.pathname === "/") {
    // console.log("testingggggg");
    document.body.style.overflow = "auto";
  }
  


  return (
    <StyledGame layoutId={stringID} onClick={loadDetailsHandler}>
      <Link
        to={`/game/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <motion.h4 layoutId={"title " + stringID} style={{ textAlign: "center", paddingTop: "1rem" }}> {name}</motion.h4>
        <h5
          style={{ textAlign: "center", paddingBottom: "1rem", color: "grey" }}
        >
          {released}
        </h5>
        <motion.img
          src={gameImage}
          layoutId={"image " + stringID}
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
  border-radius: 5px;
  overflow: hidden;
  // padding: 1rem;
  margin: 2rem auto;
`;
