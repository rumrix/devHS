import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Index() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Container width="auto" maxWidth="auto">
        <Box>
          <div className={classes.root}>
            <AppBar position="static" color="gray">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              Pellentesque cursus lacus vitae egestas elementum. Quisque euismod
              lorem at tellus commodo suscipit vel in arcu. Sed non consectetur
              libero. Fusce urna tortor, vulputate eu lectus eget, porta
              facilisis tellus. Proin volutpat lacus eu risus lobortis mollis.
              Nulla euismod quis felis nec pharetra. Ut facilisis egestas
              sollicitudin. Cras elementum arcu nec massa maximus, vel malesuada
              enim rhoncus. Aenean fermentum, odio a facilisis tempor, lectus
              ligula sollicitudin turpis, tempus tempor tellus purus elementum
              erat. Nam suscipit urna ac diam sagittis, a faucibus diam
              vestibulum. Cras aliquam placerat augue, et molestie tellus
              bibendum vitae. Donec malesuada diam ut turpis fermentum
              pellentesque. Nam ornare justo eget purus posuere, ut varius enim
              facilisis. Aenean augue erat, finibus eget volutpat at, fermentum
              cursus leo. Vivamus fermentum rhoncus eros, vel malesuada enim
              sodales vel. Morbi in nisl vitae metus blandit placerat. Aliquam a
              purus in risus maximus cursus. Mauris semper placerat porta. Morbi
              cursus purus et lectus vestibulum volutpat. Quisque eu lorem
              ornare, scelerisque sem sed, porta risus. In cursus ac urna et
              cursus. Suspendisse potenti. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras maximus ultrices eros, sit amet
              ultrices elit ultrices eget. Nulla lobortis magna at enim
              consequat, nec aliquet massa efficitur. Duis aliquet vehicula
              porta. Phasellus nisi sem, porta ut leo vitae, dapibus gravida
              ante. Pellentesque iaculis accumsan arcu. Praesent lectus odio,
              sodales eu aliquet eget, dapibus dignissim arcu. Suspendisse
              potenti. Aliquam libero magna, dictum eget egestas quis, sagittis
              a purus. Praesent ut arcu id dui tristique suscipit. Vivamus et
              lacus viverra, ultrices dolor at, vehicula ante. Curabitur aliquet
              maximus nulla, sed mattis quam gravida et. Fusce eget placerat
              erat. Sed ante ligula, finibus a erat sit amet, dictum maximus
              est. Pellentesque tellus augue, feugiat ac varius quis, ultrices
              eu diam. In semper dignissim diam. Praesent varius congue sem sit
              amet cursus. Donec bibendum metus id sapien dapibus, eu laoreet
              justo mattis. Aenean arcu metus, laoreet vel eleifend at, mollis
              vitae elit. Sed nec lorem vel urna vehicula vehicula quis ac
              ligula. Donec semper, felis ut maximus luctus, justo neque
              efficitur magna, et dapibus libero quam a nulla. Fusce quis sem
              feugiat, dictum sem non, ornare velit. Ut non lectus ante. Etiam
              eget pulvinar orci. Nunc in ultricies ante. Vestibulum at magna
              elementum, elementum dolor id, tempor tellus.
            </TabPanel>
            <TabPanel value={value} index={1}>
              Fusce eget placerat erat. Sed ante ligula, finibus a erat sit
              amet, dictum maximus est. Pellentesque tellus augue, feugiat ac
              varius quis, ultrices eu diam. In semper dignissim diam. Praesent
              varius congue sem sit amet cursus. Donec bibendum metus id sapien
              dapibus, eu laoreet justo mattis. Aenean arcu metus, laoreet vel
              eleifend at, mollis vitae elit. Sed nec lorem vel urna vehicula
              vehicula quis ac ligula. Donec semper, felis ut maximus luctus,
              justo neque efficitur magna, et dapibus libero quam a nulla. Fusce
              quis sem feugiat, dictum sem non, ornare velit. Ut non lectus
              ante. Etiam eget pulvinar orci. Nunc in ultricies ante. Vestibulum
              at magna elementum, elementum dolor id, tempor tellus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Cras maximus ultrices
              eros, sit amet ultrices elit ultrices eget. Nulla lobortis magna
              at enim consequat, nec aliquet massa efficitur. Duis aliquet
              vehicula porta. Phasellus nisi sem, porta ut leo vitae, dapibus
              gravida ante. Pellentesque iaculis accumsan arcu. Praesent lectus
              odio, sodales eu aliquet eget, dapibus dignissim arcu. Suspendisse
              potenti. Aliquam libero magna, dictum eget egestas quis, sagittis
              a purus. Praesent ut arcu id dui tristique suscipit. Vivamus et
              lacus viverra, ultrices dolor at, vehicula ante. Curabitur aliquet
              maximus nulla, sed mattis quam gravida et. Pellentesque cursus
              lacus vitae egestas elementum. Quisque euismod lorem at tellus
              commodo suscipit vel in arcu. Sed non consectetur libero. Fusce
              urna tortor, vulputate eu lectus eget, porta facilisis tellus.
              Proin volutpat lacus eu risus lobortis mollis. Nulla euismod quis
              felis nec pharetra. Ut facilisis egestas sollicitudin. Cras
              elementum arcu nec massa maximus, vel malesuada enim rhoncus.
              Aenean fermentum, odio a facilisis tempor, lectus ligula
              sollicitudin turpis, tempus tempor tellus purus elementum erat.
              Nam suscipit urna ac diam sagittis, a faucibus diam vestibulum.
              Cras aliquam placerat augue, et molestie tellus bibendum vitae.
              Donec malesuada diam ut turpis fermentum pellentesque. Nam ornare
              justo eget purus posuere, ut varius enim facilisis. Aenean augue
              erat, finibus eget volutpat at, fermentum cursus leo. Vivamus
              fermentum rhoncus eros, vel malesuada enim sodales vel. Morbi in
              nisl vitae metus blandit placerat. Aliquam a purus in risus
              maximus cursus. Mauris semper placerat porta. Morbi cursus purus
              et lectus vestibulum volutpat. Quisque eu lorem ornare,
              scelerisque sem sed, porta risus. In cursus ac urna et cursus.
              Suspendisse potenti.
            </TabPanel>
            <TabPanel value={value} index={2}>
              Duis aliquet vehicula porta. Phasellus nisi sem, porta ut leo
              vitae, dapibus gravida ante. Pellentesque iaculis accumsan arcu.
              Praesent lectus odio, sodales eu aliquet eget, dapibus dignissim
              arcu. Suspendisse potenti. Aliquam libero magna, dictum eget
              egestas quis, sagittis a purus. Praesent ut arcu id dui tristique
              suscipit. Vivamus et lacus viverra, ultrices dolor at, vehicula
              ante. Curabitur aliquet maximus nulla, sed mattis quam gravida et.
              Fusce eget placerat erat. Sed ante ligula, finibus a erat sit
              amet, dictum maximus est. Pellentesque tellus augue, feugiat ac
              varius quis, ultrices eu diam. In semper dignissim diam. Praesent
              varius congue sem sit amet cursus. Donec bibendum metus id sapien
              dapibus, eu laoreet justo mattis. Aenean arcu metus, laoreet vel
              eleifend at, mollis vitae elit. Sed nec lorem vel urna vehicula
              vehicula quis ac ligula. Donec semper, felis ut maximus luctus,
              justo neque efficitur magna, et dapibus libero quam a nulla. Fusce
              quis sem feugiat, dictum sem non, ornare velit. Ut non lectus
              ante. Etiam eget pulvinar orci. Nunc in ultricies ante. Vestibulum
              at magna elementum, elementum dolor id, tempor tellus.
              Pellentesque cursus lacus vitae egestas elementum. Quisque euismod
              lorem at tellus commodo suscipit vel in arcu. Sed non consectetur
              libero. Fusce urna tortor, vulputate eu lectus eget, porta
              facilisis tellus. Proin volutpat lacus eu risus lobortis mollis.
              Nulla euismod quis felis nec pharetra. Ut facilisis egestas
              sollicitudin. Cras elementum arcu nec massa maximus, vel malesuada
              enim rhoncus. Aenean fermentum, odio a facilisis tempor, lectus
              ligula sollicitudin turpis, tempus tempor tellus purus elementum
              erat. Nam suscipit urna ac diam sagittis, a faucibus diam
              vestibulum. Cras aliquam placerat augue, et molestie tellus
              bibendum vitae. Donec malesuada diam ut turpis fermentum
              pellentesque. Nam ornare justo eget purus posuere, ut varius enim
              facilisis. Aenean augue erat, finibus eget volutpat at, fermentum
              cursus leo. Vivamus fermentum rhoncus eros, vel malesuada enim
              sodales vel. Morbi in nisl vitae metus blandit placerat. Aliquam a
              purus in risus maximus cursus. Mauris semper placerat porta. Morbi
              cursus purus et lectus vestibulum volutpat. Quisque eu lorem
              ornare, scelerisque sem sed, porta risus. In cursus ac urna et
              cursus. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Cras maximus ultrices eros, sit amet
              ultrices elit ultrices eget. Nulla lobortis magna at enim
              consequat, nec aliquet massa efficitur.
            </TabPanel>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
