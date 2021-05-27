import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import ReactPlayer from "react-player";
import { Player } from "video-react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  playerPaMa: {
    padding: 0,
    margin: 0,
  },
}));

export default function Index() {
  const classes = useStyles();
  const width = "100%";
  const height = "1200px";
  const controls = true;

  return (
    <Box>
      <Container width="auto" maxWidth="auto">
        <Box>
          <Card className={classes.playerPadding}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width={width}
              height={height}
              controls={controls}
            />
          </Card>
          <br />
          <Card className={classes.playerPadding}>
            <Player>
              <source src="/assets/videos/test.mp4" />
            </Player>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
