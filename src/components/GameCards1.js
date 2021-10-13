// import React from "react";
// //styling and animation

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import { grey } from "@material-ui/core/colors";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//REDUX
import { useDispatch } from "react-redux";
import loadDetails from "../actions/detailsActions";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { CardActionArea } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: grey[500],
  },
}));

export default function GameCards({ name, released, gameImage, id }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // const style1 = {
  //   padding: "3rem",
  // };
  // uselocation
  const location = useLocation();

  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    // console.log("in first");
    dispatch(loadDetails(id));
    document.body.style.overflow = "hidden";
  };

  if (location.pathname === "/") {
    document.body.style.overflow = "auto";
  }

  return (
    <StyledGame onClick={loadDetailsHandler}>
      <Link to={`/game/${id}`} style={{ textDecoration: "none" }}>
        <CardActionArea style={{ display: "flex" }}>
          <Box boxShadow={5}>
            <Card className={classes.root} style={{ margin: "auto" }}>
              {/* redundant box */}
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {name[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={name}
                subheader={released}
              />

              <CardMedia
                className={classes.media}
                image={gameImage}
                title={name}
                style={{ width: "95%", margin: "3% auto" }}
              />
            </Card>
          </Box>
        </CardActionArea>
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  // box-shadow: 1px 1px 2px grey;
  // backgroundcolor: red;
`;

const styledPara = styled(motion.div)`
  // box-shadow: 1px 1px 3px grey;
  // backgroundColor:red;
`;
