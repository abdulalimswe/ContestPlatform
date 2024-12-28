import React from "react";

import styled from './home.module.css';

const Home =()=>{
    return(
        <div className={styled.container1}>
		    <div className={styled.content}>
		      <h1>Welcome to the Online Judge!</h1>
		      <p>Start solving problems and improve your coding skills.</p>
		    </div>
	    </div>
    );
}

export default Home;