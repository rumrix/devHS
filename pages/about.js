import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Index() {
  const classes = useStyles();
  const [open0, setOpen0] = React.useState(false);

  const handleOpen0 = () => {
    setOpen0(true);
  };

  const handleClose0 = () => {
    setOpen0(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <Box>
      <Container width="auto" maxWidth="auto">
        <Box>
          <div>
            <img src="/assets/images/wp3850825.jpg" onClick={handleOpen0} />
            <Modal
              aria-labelledby="test-wb-title"
              aria-describedby="test-wb-description"
              className={classes.modal}
              open={open0}
              onClose={handleClose0}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open0}>
                <div className={classes.paper}>
                  <h2 id="test-wb-title">WallPaper</h2>
                  <p id="test-wb-description">
                    Duis aliquet vehicula porta. Phasellus nisi sem, porta ut
                    leo vitae, dapibus gravida ante. Pellentesque iaculis
                    accumsan arcu. Praesent lectus odio, sodales eu aliquet
                    eget, dapibus dignissim arcu. Suspendisse potenti. Aliquam
                    libero magna, dictum eget egestas quis, sagittis a purus.
                    Praesent ut arcu id dui tristique suscipit. Vivamus et lacus
                    viverra, ultrices dolor at, vehicula ante. Curabitur aliquet
                    maximus nulla, sed mattis quam gravida et. Fusce eget
                    placerat erat. Sed ante ligula, finibus a erat sit amet,
                    dictum maximus est. Pellentesque tellus augue, feugiat ac
                    varius quis, ultrices eu diam. In semper dignissim diam.
                    Praesent varius congue sem sit amet cursus. Donec bibendum
                    metus id sapien dapibus, eu laoreet justo mattis. Aenean
                    arcu metus, laoreet vel eleifend at, mollis vitae elit. Sed
                    nec lorem vel urna vehicula vehicula quis ac ligula. Donec
                    semper, felis ut maximus luctus, justo neque efficitur
                    magna, et dapibus libero quam a nulla. Fusce quis sem
                    feugiat, dictum sem non, ornare velit. Ut non lectus ante.
                    Etiam eget pulvinar orci. Nunc in ultricies ante. Vestibulum
                    at magna elementum, elementum dolor id, tempor tellus.
                    Pellentesque cursus lacus vitae egestas elementum. Quisque
                    euismod lorem at tellus commodo suscipit vel in arcu. Sed
                    non consectetur libero. Fusce urna tortor, vulputate eu
                    lectus eget, porta facilisis tellus. Proin volutpat lacus eu
                    risus lobortis mollis. Nulla euismod quis felis nec
                    pharetra. Ut facilisis egestas sollicitudin. Cras elementum
                    arcu nec massa maximus, vel malesuada enim rhoncus. Aenean
                    fermentum, odio a facilisis tempor, lectus ligula
                    sollicitudin turpis, tempus tempor tellus purus elementum
                    erat. Nam suscipit urna ac diam sagittis, a faucibus diam
                    vestibulum. Cras aliquam placerat augue, et molestie tellus
                    bibendum vitae. Donec malesuada diam ut turpis fermentum
                    pellentesque. Nam ornare justo eget purus posuere, ut varius
                    enim facilisis. Aenean augue erat, finibus eget volutpat at,
                    fermentum cursus leo. Vivamus fermentum rhoncus eros, vel
                    malesuada enim sodales vel. Morbi in nisl vitae metus
                    blandit placerat. Aliquam a purus in risus maximus cursus.
                    Mauris semper placerat porta. Morbi cursus purus et lectus
                    vestibulum volutpat. Quisque eu lorem ornare, scelerisque
                    sem sed, porta risus. In cursus ac urna et cursus.
                    Suspendisse potenti.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Cras maximus ultrices eros, sit amet
                    ultrices elit ultrices eget. Nulla lobortis magna at enim
                    consequat, nec aliquet massa efficitur.
                  </p>
                </div>
              </Fade>
            </Modal>
          </div>
          <div>
            <img src="/assets/images/test_camel.jpg" onClick={handleOpen1} />
            <Modal
              aria-labelledby="test-camel-title"
              aria-describedby="test-camel-description"
              className={classes.modal}
              open={open1}
              onClose={handleClose1}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open1}>
                <div className={classes.paper}>
                  <h2 id="test-camel-title">Cameleon</h2>
                  <p id="test-camel-description">
                    Pellentesque cursus lacus vitae egestas elementum. Quisque
                    euismod lorem at tellus commodo suscipit vel in arcu. Sed
                    non consectetur libero. Fusce urna tortor, vulputate eu
                    lectus eget, porta facilisis tellus. Proin volutpat lacus eu
                    risus lobortis mollis. Nulla euismod quis felis nec
                    pharetra. Ut facilisis egestas sollicitudin. Cras elementum
                    arcu nec massa maximus, vel malesuada enim rhoncus. Aenean
                    fermentum, odio a facilisis tempor, lectus ligula
                    sollicitudin turpis, tempus tempor tellus purus elementum
                    erat. Nam suscipit urna ac diam sagittis, a faucibus diam
                    vestibulum. Cras aliquam placerat augue, et molestie tellus
                    bibendum vitae. Donec malesuada diam ut turpis fermentum
                    pellentesque. Nam ornare justo eget purus posuere, ut varius
                    enim facilisis. Aenean augue erat, finibus eget volutpat at,
                    fermentum cursus leo. Vivamus fermentum rhoncus eros, vel
                    malesuada enim sodales vel. Morbi in nisl vitae metus
                    blandit placerat. Aliquam a purus in risus maximus cursus.
                    Mauris semper placerat porta. Morbi cursus purus et lectus
                    vestibulum volutpat. Quisque eu lorem ornare, scelerisque
                    sem sed, porta risus. In cursus ac urna et cursus.
                    Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Cras maximus ultrices eros, sit amet
                    ultrices elit ultrices eget. Nulla lobortis magna at enim
                    consequat, nec aliquet massa efficitur. Duis aliquet
                    vehicula porta. Phasellus nisi sem, porta ut leo vitae,
                    dapibus gravida ante. Pellentesque iaculis accumsan arcu.
                    Praesent lectus odio, sodales eu aliquet eget, dapibus
                    dignissim arcu. Suspendisse potenti. Aliquam libero magna,
                    dictum eget egestas quis, sagittis a purus. Praesent ut arcu
                    id dui tristique suscipit. Vivamus et lacus viverra,
                    ultrices dolor at, vehicula ante. Curabitur aliquet maximus
                    nulla, sed mattis quam gravida et. Fusce eget placerat erat.
                    Sed ante ligula, finibus a erat sit amet, dictum maximus
                    est. Pellentesque tellus augue, feugiat ac varius quis,
                    ultrices eu diam. In semper dignissim diam. Praesent varius
                    congue sem sit amet cursus. Donec bibendum metus id sapien
                    dapibus, eu laoreet justo mattis. Aenean arcu metus, laoreet
                    vel eleifend at, mollis vitae elit. Sed nec lorem vel urna
                    vehicula vehicula quis ac ligula. Donec semper, felis ut
                    maximus luctus, justo neque efficitur magna, et dapibus
                    libero quam a nulla. Fusce quis sem feugiat, dictum sem non,
                    ornare velit. Ut non lectus ante. Etiam eget pulvinar orci.
                    Nunc in ultricies ante. Vestibulum at magna elementum,
                    elementum dolor id, tempor tellus.
                  </p>
                </div>
              </Fade>
            </Modal>
          </div>
          <div>
            <img src="/assets/images/test_blwhi.jpg" onClick={handleOpen2} />
            <Modal
              aria-labelledby="test-blwhi-title"
              aria-describedby="test-blwhi-description"
              className={classes.modal}
              open={open2}
              onClose={handleClose2}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open2}>
                <div className={classes.paper}>
                  <h2 id="test-blwhi-title">Black White</h2>
                  <p id="test-blwhi-description">
                    Fusce eget placerat erat. Sed ante ligula, finibus a erat
                    sit amet, dictum maximus est. Pellentesque tellus augue,
                    feugiat ac varius quis, ultrices eu diam. In semper
                    dignissim diam. Praesent varius congue sem sit amet cursus.
                    Donec bibendum metus id sapien dapibus, eu laoreet justo
                    mattis. Aenean arcu metus, laoreet vel eleifend at, mollis
                    vitae elit. Sed nec lorem vel urna vehicula vehicula quis ac
                    ligula. Donec semper, felis ut maximus luctus, justo neque
                    efficitur magna, et dapibus libero quam a nulla. Fusce quis
                    sem feugiat, dictum sem non, ornare velit. Ut non lectus
                    ante. Etiam eget pulvinar orci. Nunc in ultricies ante.
                    Vestibulum at magna elementum, elementum dolor id, tempor
                    tellus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras maximus ultrices eros, sit amet ultrices elit
                    ultrices eget. Nulla lobortis magna at enim consequat, nec
                    aliquet massa efficitur. Duis aliquet vehicula porta.
                    Phasellus nisi sem, porta ut leo vitae, dapibus gravida
                    ante. Pellentesque iaculis accumsan arcu. Praesent lectus
                    odio, sodales eu aliquet eget, dapibus dignissim arcu.
                    Suspendisse potenti. Aliquam libero magna, dictum eget
                    egestas quis, sagittis a purus. Praesent ut arcu id dui
                    tristique suscipit. Vivamus et lacus viverra, ultrices dolor
                    at, vehicula ante. Curabitur aliquet maximus nulla, sed
                    mattis quam gravida et. Pellentesque cursus lacus vitae
                    egestas elementum. Quisque euismod lorem at tellus commodo
                    suscipit vel in arcu. Sed non consectetur libero. Fusce urna
                    tortor, vulputate eu lectus eget, porta facilisis tellus.
                    Proin volutpat lacus eu risus lobortis mollis. Nulla euismod
                    quis felis nec pharetra. Ut facilisis egestas sollicitudin.
                    Cras elementum arcu nec massa maximus, vel malesuada enim
                    rhoncus. Aenean fermentum, odio a facilisis tempor, lectus
                    ligula sollicitudin turpis, tempus tempor tellus purus
                    elementum erat. Nam suscipit urna ac diam sagittis, a
                    faucibus diam vestibulum. Cras aliquam placerat augue, et
                    molestie tellus bibendum vitae. Donec malesuada diam ut
                    turpis fermentum pellentesque. Nam ornare justo eget purus
                    posuere, ut varius enim facilisis. Aenean augue erat,
                    finibus eget volutpat at, fermentum cursus leo. Vivamus
                    fermentum rhoncus eros, vel malesuada enim sodales vel.
                    Morbi in nisl vitae metus blandit placerat. Aliquam a purus
                    in risus maximus cursus. Mauris semper placerat porta. Morbi
                    cursus purus et lectus vestibulum volutpat. Quisque eu lorem
                    ornare, scelerisque sem sed, porta risus. In cursus ac urna
                    et cursus. Suspendisse potenti.
                  </p>
                </div>
              </Fade>
            </Modal>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
