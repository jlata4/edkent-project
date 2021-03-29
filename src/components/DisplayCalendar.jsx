import React , {useState} from "react";
import { Button, makeStyles} from "@material-ui/core";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import "../../node_modules/bootstrap-daterangepicker/daterangepicker.css";
import DateRangeIcon from '@material-ui/icons/DateRange';
//import DateRangePicker from 'rsuite-daterangepicker';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
},
}));

const DisplayCalendar = ()=> {
  const classes = useStyles();
  return (
    <DateRangePicker customDateRangeIcon = {<DateRangeIcon />}>     
        <input aria-placeholder="Select date range" type="text" className="form-control col-4" />   
    </DateRangePicker>
  );

}

export default DisplayCalendar;
