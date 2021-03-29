import React from "react";
import {makeStyles} from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const useStyles = makeStyles({
    topNav: {
        position: "relative",
        height: "80px"    
    },
    logo: {
        float : "left",
        height: "100%",
        width: "190px"
    },
    logoText : {
        margin: "28px 10px"
    },
    user: {
        float: "right",
        height: "100%"
    },
    userField: {
        display: "inline-table"
    },
    name: {
        fontWeight: "bold"
    },
  });

function TopNavBar(){
    const classes = useStyles();
    return (
        <Paper component="div" variant="outlined" elevation={3} className={classes.topNav}>
            <Card className={classes.logo}>
                <Typography component="p" className={classes.logoText}>
                    LOGO HERE
                </Typography>
            </Card>
            <Card className={classes.user}>
                <CardActionArea>
                        <CardContent>
                            <Typography component="div" className={classes.userField} gutterBottom>
                                <AccountCircleRoundedIcon/>
                            </Typography>
                            <Typography component="div" className={classes.userField} variant="body2" color="textSecondary">
                                <span className={classes.name}>Anthony Johnson</span><br/>
                                <span>Dummy Design.com</span>
                            </Typography>
                            <Typography component="div" className={classes.userField} gutterBottom variant="h5">
                                +
                            </Typography>
                        </CardContent>                   
                </CardActionArea>
            </Card>

        </Paper>
    
    );
}

export default TopNavBar;


