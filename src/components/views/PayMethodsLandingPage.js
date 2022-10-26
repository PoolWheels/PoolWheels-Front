import React, { useEffect, useState, useContext } from "react";
import { Grid } from "@mui/material";


function PayMethodsLandingPage() {
    const [tasks, setTasks] = useState([]);

  
    return (
      <div>
        <h1>👋 Hello, Welcome !</h1>
        <Grid
          className="Pay Methods"
          rowSpacing={3}
          justifyContent="center"
          columnSpacing={1}
          container
        >
          {tasks.map((task) => (
            <Grid item xs="auto" wrap="nowrap" container key={task.id}>

            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
  
  export default PayMethodsLandingPage;