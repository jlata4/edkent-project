import React from "react";
import {Grid, Button, makeStyles, Paper} from "@material-ui/core";
import DataUsageIcon from '@material-ui/icons/DataUsage';
import SecurityIcon from '@material-ui/icons/Security';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import DisplayCalendar from "./DisplayCalendar";
import DisplayChart from "./DisplayChart";
import AttributeCard from "./AttributeCard";
import Copyright from "./Copyright";

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
        borderRadius: "25px"
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
    },
    mainLabel : {
        fontWeight: "bold",
        color: "black"
    },
    labelGrid: {
        fontSize: "12px"
    },
    attrLabel: {
        fontWeight: "bold",
        marginRight: "5px",
        color: "black",       
    }
}));

const DisplayGraphArea = (props) => {
    const {first, second, third, fourth} = props;
    const classes = useStyles();
    return(
        <div>
            <Grid container spacing={6}>
                <Grid className={classes.mainLabel} item xs={6}>Analytics</Grid>
                <Grid item xs={6}><DisplayCalendar/></Grid>           
                <Grid className={classes.labelGrid} item xs={3}><span className={classes.attrLabel}>{first}</span>Attribute1</Grid>
                <Grid className={classes.labelGrid} item xs={3}><span className={classes.attrLabel}>{second}</span>Attribute2</Grid>
                <Grid className={classes.labelGrid} item xs={3}><span className={classes.attrLabel}>{third}</span>Attribute3</Grid>
                <Grid className={classes.labelGrid} item xs={3}><span className={classes.attrLabel}>{fourth}</span>Attribute4</Grid>
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
    const firstName = "ATTRIBUTE 1";
    const secondName = "ATTRIBUTE 2";
    const thirdName = "ATTRIBUTE 3";
    const fourthName = "ATTRIBUTE 4";
    const firstIcon = <DataUsageIcon/>;
    const secondIcon = <SecurityIcon/>;
    const thirdIcon = <AssignmentTurnedInIcon/>;
    const fourthIcon = <FindInPageIcon/>;
    return (
        <div className={classes.root}>
            <Grid container spacing={7}>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" className={classes.upgrade}>Upgrade</Button>
                </Grid>
                <AttributeCard
                    icon={firstIcon}
                    value={firstValue}
                    name={firstName}
                />
                <AttributeCard
                    icon={secondIcon}
                    value={secondValue}
                    name={secondName}
                />
                <AttributeCard
                    icon={thirdIcon}
                    value={thirdValue}
                    name={thirdName}
                />
                <AttributeCard
                    icon={fourthIcon}
                    value={fourthValue}
                    name={fourthName}
                />               
                <Grid item xs={12}>
                    <Paper className={classes.paper}><DisplayGraphArea first={firstValue} second={secondValue} third={thirdValue} fourth={fourthValue}/></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Copyright/>
                </Grid>           
            </Grid>           
        </div>
    );
}

export default Dashboard;