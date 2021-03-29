import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AdbRoundedIcon from '@material-ui/icons/AdbRounded';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ArchiveIcon from '@material-ui/icons/Archive';
import SettingsIcon from '@material-ui/icons/Settings';
import Dashboard from "./Dashboard";


function TabPanel(props) {
  const { children, value, index, ...other } = props;
    console.log("children", children);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box div={3}>
          {children}
        </Box>
      )}
      
        
     
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    leftNav: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: "visible",
  },
  tabList: {
      backgroundImage: `<PhoneIcon />`,
  }
}));

function LeftNavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {   
    setValue(newValue); 
  };


  return (
    <div className={classes.leftNav}>
      <Tabs 
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
      
        <Tab className={classes.tabList} icon={<PhoneIcon />} label="Menu Option 1 +" {...a11yProps(0)}/>
        <Tab className={classes.tabList} icon={<AdbRoundedIcon />} label="Menu Option 2 +" {...a11yProps(1)}/>
        <Tab className={classes.tabList} icon={<FavoriteIcon />} label="Menu Option 3 +" {...a11yProps(2)}/>
        <Tab className={classes.tabList} icon={<AddRoundedIcon />} label="Menu Option 4 +" {...a11yProps(3)}/>
        <Tab className={classes.tabList} icon={<AddAPhotoIcon />} label="Menu Option 5 ->" {...a11yProps(4)} />
        <Tab className={classes.tabList} icon={<ArchiveIcon />} label="Menu Option 6" {...a11yProps(5)} />
        <Tab className={classes.tabList} icon={<PersonPinIcon />} label="Menu Option 7 +" {...a11yProps(6)} />
        <Tab className={classes.tabList} icon={<SettingsIcon />} label="Settings" {...a11yProps(7)} />
        
      </Tabs>
      <TabPanel className="tabcontent" value={value} index={0}>
        <Dashboard/>
      </TabPanel>
      <TabPanel className="tabcontent" value={value} index={1}>
        <Dashboard/>
      </TabPanel>
      <TabPanel className="tabcontent" value={value} index={2}>
      <Dashboard/>
      </TabPanel>
      <TabPanel className="tabcontent" value={value} index={3}>
      <Dashboard/>
      </TabPanel>
      <TabPanel className="tabcontent" value={value} index={4}>
        <Dashboard/>
      </TabPanel>
      <TabPanel className="tabcontent" value={value} index={5}>
      <Dashboard/>
      </TabPanel>
      <TabPanel className="tabcontent" value={value} index={6}>
        <Dashboard/>
      </TabPanel>
      <TabPanel className="tabcontent" value={value} index={7}>
        Settings <SettingsIcon/>
      </TabPanel>
    </div>
  );
}

export default LeftNavBar;



