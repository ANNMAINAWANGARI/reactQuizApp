import { Button } from '@material-ui/core';
import React from 'react'
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Results.css";

function Results({score,name}) {

 const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

 return (
  <div className='results'>
   <h3>FINAL SCORE:{score}</h3>
   <Button 
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
  </div>
 )
}

export default Results
