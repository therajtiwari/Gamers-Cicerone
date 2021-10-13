import React from "react";
//components and pages
import styled from "styled-components";
import { motion } from "framer-motion";

function PageNotFound() {
    return (
        <StyledPageNotFound>
            <div id="main">
                <div class="fof">
                    <h1>Error 404</h1>
                </div>
            </div>
        </StyledPageNotFound >

    );
}

const StyledPageNotFound = styled(motion.div)`
*{
    transition: all 0.6s;
}

body{
    font-family: 'Lato', sans-serif;
    color: #888;
    margin: 0;
}

#main{
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.fof{
	  display: table-cell;
	  vertical-align: middle;
}

.fof h1{
	  font-size: 50px;
	  display: inline-block;
	  padding-right: 12px;
	  animation: type .5s alternate infinite;
}

@keyframes type{
	  from{box-shadow: inset -3px 0px 0px #888;}
	  to{box-shadow: inset -3px 0px 0px transparent;}
}
        `
export default PageNotFound;
