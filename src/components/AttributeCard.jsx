import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    dataField: {
        display: "inline-table"
    },
    value: {
        fontWeight: "bold",
        color: "black"
    },
    name: {
        fontSize: "12px"
    }
  }));

const AttributeCard = (props) => {
    const classes = useStyles();
    const {icon, value, name} = props;
    return (
        <Grid item xs={3}>         
            <Card className={classes.user}>
                <CardActionArea>
                        <CardContent>
                            <Typography component="div" className={classes.dataField} gutterBottom>
                                {icon}
                            </Typography>
                            <Typography component="div" className={classes.dataField} variant="body2" color="textSecondary">
                                <span className={classes.value}>{value}</span><br/>
                                <span className={classes.name}>{name}</span>
                            </Typography>                           
                        </CardContent>                   
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default AttributeCard;