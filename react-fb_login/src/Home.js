import React from 'react';

export default function Home({fbpic, fbdata}) {
    return(
      <React.Fragment>
        <img src={fbpic} alt={fbdata.name}/>
        <h3 className="d-inline text-success mx-2">
          Welcome back {fbdata.name}!
        </h3>
        <p className="my-5"> This is the home page of the app.</p>
      </React.Fragment>
    )
  }
  