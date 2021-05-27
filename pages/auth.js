import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  items: {
    padding: "3px",
    margin: "7px",
  },
}));

export default function Index() {
  const classes = useStyles();
  const [certiChk, setCertiChk] = React.useState(false);
  const [certiText, setCertiText] = React.useState("본인인증 전 입니다.");
  const [certiName, setCertiName] = React.useState("");
  const [certiPhone, setCertiPhone] = React.useState("");

  function onSubmit() {
    const { IMP } = window;
    IMP.init("imp10391932");

    const data = {
      merchant_uid: `mid_${new Date().getTime()}`,
      company: "아임포트",
      carrier: "SKT",
    };

    data.name = certiName;
    data.phone = certiPhone;

    IMP.certification(data, callback);
  }

  function callback(response) {
    const { success, error_msg } = response;

    if (success) {
      setCertiChk(true);
      setCertiText("본인인증 성공하였습니다.");
    } else {
      setCertiChk(false);
      setCertiText(`본인인증 실패하였습니다. ${error_msg}`);
    }
  }

  function nameSet(event) {
    setCertiName(event.target.value);
  }

  function phoneSet(event) {
    setCertiPhone(event.target.value);
  }

  return (
    <Box>
      <Container width="auto" maxWidth="auto">
        <Box>
          <Card>
            <CardContent>
              <FormControl>
                <TextField
                  label="이름"
                  onKeyUp={nameSet}
                  className={classes.items}
                />
                <TextField
                  label="휴대폰번호"
                  onKeyUp={phoneSet}
                  className={classes.items}
                />
                <Button
                  onClick={onSubmit}
                  color="primary"
                  variant="contained"
                  className={classes.items}
                >
                  본인인증 테스트
                </Button>
                <p className={classes.items}>{certiText}</p>
              </FormControl>
              <FormGroup row>
                <FormControlLabel
                  color="primary"
                  control={<Switch checked={certiChk} name="checkedA" />}
                  label="본인인증 성공여부"
                />
              </FormGroup>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
