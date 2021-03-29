import React from "react";
import {makeStyles, Paper} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({    
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      fontSize: "12px"
    }
}));

const Copyright = () => {
    const classes = useStyles();
	return (		
        <Paper className={classes.paper}>
			<p>
				{"@ Copyright"} - Dummy Design 2020 All Rights Reserved				
			</p>
        </Paper>		
	);
};

export default Copyright;