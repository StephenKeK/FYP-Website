import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStateValue } from "./StateProvider";
import { Box, Grid } from "@material-ui/core";
import SwapHorizontalCircleOutlinedIcon from "@material-ui/icons/SwapHorizontalCircleOutlined";
import Rating from "material-ui-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  container: {
    padding: "10px",
  },
  img2: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
    maxWidth: "150px",
    minWidth: "150px",
    maxHeight: "200px",
    minHeight: "200px",
  },
  no: {
    width: "5%",
  },
  myItem: {
    width: "30%",
  },
  icon: {
    width: "5%",
  },
  chooseItem: {
    width: "30%",
  },
  rating: {
    width: "30%",
  },
  ratingRow: {
    width: 400,
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: "150px",
    minWidth: "150px",
    maxHeight: "300px",
    minHeight: "300px",
  },
}));

const TradeList = () => {
  const [{ traded_data }, dispatch] = useStateValue();
  const [rating, setRating] = useState(0);
  const classes = useStyles();

  const setRatingFunc = (data, index) => {
    dispatch({
      type: "TRADED_DATA_RATING",
      item: data,
      id: index,
    });
    toast.success("Success submit your rating !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  //   console.log("render", traded_data);
  return (
    <Grid container spacing={5} className={classes.container}>
      <ToastContainer style={{ top: "60px" }} />
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.no}>No</TableCell>
                <TableCell align="left" className={classes.myItem}>
                  My Item
                </TableCell>
                <TableCell align="center" className={classes.icon}>
                  Swap
                </TableCell>
                <TableCell align="left" className={classes.chooseItem}>
                  Choose item
                </TableCell>
                <TableCell align="left" className={classes.chooseItem}>
                  Rating
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {traded_data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" className={classes.no}>
                    {index + 1}
                  </TableCell>
                  <TableCell align="left" className={classes.myItem}>
                    <Grid container spacing={5} className={classes.container}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                          <h3>{row.mines.title}</h3>
                          <p>{row.mines.description}</p>
                          <p>Quantity :{row.mines.quantity}</p>
                          <img
                            className={classes.img2}
                            src={row.mines.files[0]?.preview.url}
                            alt={row.mines.files[0]?.name}
                          />
                        </Paper>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align="center" className={classes.icon}>
                    <SwapHorizontalCircleOutlinedIcon />
                  </TableCell>
                  <TableCell align="left" className={classes.chooseItem}>
                    <Grid container spacing={5} className={classes.container}>
                      <Grid item xs={12}>
                        <Paper className={classes.paper}>
                          <h3>{row.from.title}</h3>
                          <p>
                            <small>RM</small>
                            <strong>{row.from.price}</strong>
                          </p>

                          <img
                            className={classes.img2}
                            src={row.from.image}
                            alt={row.from.image}
                          />
                        </Paper>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell align="left" className={classes.rating}>
                    {row.rating === null ? (
                      <div className={classes.ratingRow}>
                        <Rating
                          name="simple-controlled"
                          value={row.rating}
                          onChange={(newValue) => {
                            // setRating(newValue);
                            setRatingFunc(newValue, index);
                          }}
                          max={5}
                        />
                        <p style={{ color: "red" }}>Submit Your Rating !</p>
                      </div>
                    ) : (
                      <Rating value={row.rating} readOnly></Rating>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default TradeList;
