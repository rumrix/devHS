import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [sessionChk, setSessionChk] = React.useState("false");
  const [userChk, setUserChk] = React.useState("");

  React.useEffect(() => {
    setSessionChk(localStorage.getItem("rememberMe"));
    if (localStorage.getItem("user") !== "") {
      setUserChk(localStorage.getItem("user"));
    } else {
      setUserChk("게스트");
    }
  });

  return (
    <BottomNavigation showLabels className={classes.root} color="secondary">
      <BottomNavigationAction
        label={userChk}
        icon={sessionChk === "false" ? <PersonOutlineIcon /> : <PersonIcon />}
      />
    </BottomNavigation>
  );
}
