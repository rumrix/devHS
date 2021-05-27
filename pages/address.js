import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import DaumPostcode from "react-daum-postcode";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  text: {
    color: "#8a8027",
  },
  zip: {
    width: 150,
    padding: 5,
    color: "#212121",
  },
  input: {
    width: 350,
    padding: 5,
    color: "#212121",
  },
});

export default function Index() {
  const classes = useStyles();

  let [address, setAddress] = React.useState("");
  let [detailAddress, setDetailAddress] = React.useState("");
  let [postcode, setPostcode] = React.useState("");

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";

      setAddress(data.roadAddress);
      setDetailAddress(data.buildingName);
      setPostcode(data.zonecode);
    }

    console.log(fullAddress, data);
  };

  const height = 500;
  const width = 1200;

  return (
    <Box>
      <Container width="auto" maxWidth="auto">
        <Box>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.text}>Daum postcode</Typography>
              <DaumPostcode
                onComplete={handleComplete}
                width={width}
                height={height}
              />
              <TextField
                className={classes.zip}
                label="우편번호"
                variant="outlined"
                margin="dense"
                type="text"
                name="postcode"
                value={postcode}
              />
              <TextField
                className={classes.input}
                label="주소"
                variant="outlined"
                margin="dense"
                type="text"
                name="address"
                value={address}
              />
              <TextField
                className={classes.input}
                label="상세주소"
                variant="outlined"
                margin="dense"
                type="text"
                name="detailAddress"
                value={detailAddress}
              />
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
