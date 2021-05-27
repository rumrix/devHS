import React from "react";
import api from "../api";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const IndexPage = () => {
  let [requestData, setRequestData] = React.useState("");
  let [responseData, setResponseData] = React.useState("");
  const classes = useStyles();

  const onChngQty = (e) => {
    e.preventDefault();
    setRequestData(e.target.value);
  };

  const fetchData = (e) => {
    e.preventDefault();
    if (!requestData) {
      requestData = 0;
    }
    api
      .getData(requestData)
      .then((response) => {
        console.log(response);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box>
      <Container width="auto" maxWidth="auto">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Nextjs Axios Test
            </Typography>
            <Box>
              <TextField
                color="primary"
                label="조회수량"
                variant="outlined"
                margin="dense"
                type="text"
                name="frtQty"
                onChange={(e) => onChngQty(e)}
              />
              <Button
                variant="contained"
                color="inherit"
                onClick={(e) => fetchData(e)}
              >
                조회
              </Button>
            </Box>
            <TableContainer component={Paper} variant="outlined">
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Fruit</StyledTableCell>
                    <StyledTableCell align="right">Id</StyledTableCell>
                    <StyledTableCell align="right">Quantity</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {responseData ? (
                    responseData.map((datas) => {
                      return (
                        <StyledTableRow key={datas.name}>
                          <StyledTableCell component="th" scope="row">
                            {datas.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {datas.id}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {datas.quantity}
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })
                  ) : (
                    <StyledTableRow key="No Key">
                      <StyledTableCell component="th" scope="row">
                        No Name
                      </StyledTableCell>
                      <StyledTableCell align="right">No Id</StyledTableCell>
                      <StyledTableCell align="right">
                        No Quantity
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
export default IndexPage;
