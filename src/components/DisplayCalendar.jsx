import React from "react";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import "../../node_modules/bootstrap-daterangepicker/daterangepicker.css";
import DateRangeIcon from '@material-ui/icons/DateRange';

const DisplayCalendar = ()=> {
  return (
    <DateRangePicker customDateRangeIcon = {<DateRangeIcon />}>     
        <input aria-placeholder="Select date range" type="text" className="form-control col-4" />   
    </DateRangePicker>
  );

}

export default DisplayCalendar;
