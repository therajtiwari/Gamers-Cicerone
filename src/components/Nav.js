import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button, InputGroup, FormControl } from "react-bootstrap"
import { loadSearchedGames } from '../actions/gameActions'
// import { dispatch } from "react-redux"
import { useDispatch, useSelector } from "react-redux";
import { fadeIn } from "../animations";


const Nav = ({ searchedGame, changeSearchedGame, loadmore, changeLoadMore }) => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loadSearchedGames(searchedGame, 6));
        changeLoadMore(true);
    }
    // console.log(useSelector)

    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show" >
            <h1>Gamers' Cicerone</h1>
            <div className="search-bar" style={{ width: "50%", margin: "auto", marginTop: "20px" }}>
                <InputGroup style={{ boxShadow: " rgba(149, 157, 165, 0.7) 0px 8px 24px", border: "none" }}>
                    <FormControl
                        // placeholder="Username"
                        style={{ border: "none" }}
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => changeSearchedGame(e.target.value)}
                    />
                    <Button variant="secondary" onClick={handleSubmit} id="basic-addon1">Search</Button>
                </InputGroup>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
margin-top:20px;
min-height:20vh;
// background-color: #1a1a1a;
text-align: center;
`

export default Nav
