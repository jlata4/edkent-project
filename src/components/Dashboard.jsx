import React ,{ useState} from "react";
import {Grid, Button, makeStyles, Paper} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import SecurityIcon from '@material-ui/icons/Security';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import DisplayCalendar from "./DisplayCalendar";
import DisplayChart from "./DisplayChart";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "1050px",
      marginLeft: "25px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    upgrade: {
        marginTop: "20px",
        float: "right",
    },
    dataField: {
        display: "inline-table"
    },
    name: {
        fontWeight: "bold"
    },
    attr: {
        marginLeft: "10px",
    },
    button: {
        margin: theme.spacing(1),
    }
  }));

 


  const DisplayGraphArea = (props) => {
    const {first, second, third, fourth} = props;
    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={6}>
                <Grid item xs={6}>Analytics </Grid>
                <Grid item xs={6}><DisplayCalendar/></Grid>           
                <Grid item xs={3}><span style= {{fontWeight:'bold'}}>{first}</span>Attribute1</Grid>
                <Grid item xs={3}><span style= {{fontWeight:'bold'}}>{second}</span>Attribute2</Grid>
                <Grid item xs={3}><span style= {{fontWeight:'bold'}}>{third}</span>Attribute3</Grid>
                <Grid item xs={3}><span style= {{fontWeight:'bold'}}>{fourth}</span>Attribute4</Grid>
                <Grid container><DisplayChart/></Grid>
            </Grid>
         </div>          
    );
}

function Dashboard(){
    const classes = useStyles();
    const firstValue = "245/500";
    const secondValue = 120;
    const thirdValue = 125;
    const fourthValue = 0;
    return (
        <div className={classes.root}>
            <Grid container spacing={7}>
                <Grid item xs={12}>
                    <Button className={classes.upgrade}>Upgrade</Button>
                </Grid>
                <Grid item xs={3}>         
                    <Card className={classes.user}>
                        <CardActionArea>
                                <CardContent>
                                    <Typography component="div" className={classes.dataField} gutterBottom>
                                        <DataUsageIcon/>
                                    </Typography>
                                    <Typography component="div" className={classes.dataField} variant="body2" color="textSecondary">
                                        <span name="first" className={classes.name}>{firstValue}</span><br/>
                                        <span id="1">ATTRIBUTE 1</span>
                                    </Typography>                           
                                </CardContent>                   
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>         
                    <Card className={classes.user}>
                        <CardActionArea>
                                <CardContent>
                                    <Typography component="div" className={classes.dataField} gutterBottom>
                                        <SecurityIcon/>
                                    </Typography>
                                    <Typography component="div" className={classes.dataField} variant="body2" color="textSecondary">
                                        <span name="second" className={classes.name}>{secondValue}</span><br/>
                                        <span id="2">ATTRIBUTE 2</span>
                                    </Typography>                           
                                </CardContent>                   
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>         
                    <Card className={classes.user}>
                        <CardActionArea>
                                <CardContent>
                                    <Typography component="div" className={classes.dataField} gutterBottom>
                                        <DataUsageIcon/>
                                    </Typography>
                                    <Typography component="div" className={classes.dataField} variant="body2" color="textSecondary">
                                        <span name="third" className={classes.name}>{thirdValue}</span><br/>
                                        <span id="3">ATTRIBUTE 3</span>
                                    </Typography>                           
                                </CardContent>                   
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>         
                    <Card className={classes.user}>
                        <CardActionArea>
                                <CardContent>
                                    <Typography component="div" className={classes.dataField} gutterBottom>
                                        <FindInPageIcon/>
                                    </Typography>
                                    <Typography component="div" className={classes.dataField} variant="body2" color="textSecondary">
                                        <span name="fourth" className={classes.name}>{fourthValue}</span><br/>
                                        <span id="4">ATTRIBUTE 4</span>
                                    </Typography>                           
                                </CardContent>                   
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                <Paper className={classes.paper}><DisplayGraphArea first={firstValue} second={secondValue} third={thirdValue} fourth={fourthValue}/></Paper>
                </Grid>
            </Grid>
               
            
        </div>
    );

}

export default Dashboard;