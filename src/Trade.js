import React, { useState } from "react";
import "./Trade.css";
import { useStateValue } from "./StateProvider";
// import Product from "./Product";
import SwapHorizontalCircleOutlinedIcon from "@material-ui/icons/SwapHorizontalCircleOutlined";
import { Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "reactstrap";
import StarIcon from "@material-ui/icons/Star";
import Files from "react-files";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: "10px",
  },
  container2: {
    padding: "10px",
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  tdInput: {
    textAlign: "initial",
  },
  tdTitle: {
    textAlign: "initial",
    width: "30%",
  },
  img: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
    maxWidth: "300px",
    minWidth: "300px",
    maxHeight: "500px",
    minHeight: "500px",
  },
  img2: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
    maxWidth: "150px",
    minWidth: "150px",
    maxHeight: "300px",
    minHeight: "300px",
  },
  productRating: {
    color: "#f0c14b",
  },
  textFied: {
    width: "100%",
  },
  files: {
    padding: "5px 10px",
    fontSize: "10px",
    textAlign: "center",
    cursor: "pointer",
    outline: "none",
    color: "#fff",
    backgroundColor: "#04AA6D",
    border: "none",
    borderRadius: "5px",
    boxShadow: "0 2px #999",
    "&:hover": { backgroundColor: "#3e8e41" },
    "&:active": {
      backgroundColor: "#3e8e41",
      boxShadow: "0 5px #666",
      transform: "translateY(4px)",
    },
  },
  button: {
    alignContent: "center",
    borderWidth: "0px",
    borderRadius: "5px",
    "&:hover": { backgroundColor: "#d9d9d9" },
    "&:active": {
      backgroundColor: "#d9d9d9",
      boxShadow: "0 5px #333333",
      transform: "translateY(4px)",
    },
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));

function Trade() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState([]);
  const [{ trade, traded_data }, dispatch] = useStateValue();
  const classes = useStyles();
  const history = useHistory();

  const onFilesChange = (files) => {
    setFiles(files);
  };

  const onFilesError = (error, file) => {
    setFiles(file);
  };

  const onSwap = () => {
    if (
      title !== "" &&
      description !== "" &&
      quantity !== "" &&
      files.length > 0
    ) {
      console.log("trade", trade[0]);
      dispatch({
        type: "TRADED_DATA",
        item: {
          from: { ...trade[0] },
          mines: {
            title: title,
            description: description,
            quantity: quantity,
            files: files,
          },
          rating: null,
        },
      });

      history.push("/List");
    } else {
      toast.error("Complete all information first !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const newItem = {
        title: title,
        description: description,
        quantity: quantity,
        image: e.target.result,
      };

      setItems((prevItems) => [...prevItems, newItem]);
      setTitle("");
      setDescription("");
      setQuantity("");
      setImage(null);
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className={classes.container2}>
      <ToastContainer style={{ top: "60px" }} />
      <h1>Trade Items</h1>
      <Grid container spacing={5} className={classes.container}>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <table>
              <tr>
                <td>
                  <h4>{trade[0]?.title}</h4>
                </td>
              </tr>
              <tr>
                <td>
                  <small>$</small>
                  <strong>{trade[0]?.price}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={classes.productRating}>
                    {Array(trade[0]?.rating)
                      .fill()
                      .map((_, index) => (
                        <StarIcon key={index} />
                      ))}
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    height: "auto",
                    width: "auto",
                    maxWidth: "230px",
                    maxHeight: "150px",
                  }}
                >
                  <img className={classes.img} src={trade[0]?.image} alt="" />
                </td>
              </tr>
            </table>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <div style={{ height: "300px" }}></div>
          <Button
            onClick={() => onSwap()}
            className={classes.button}
            style={{ alignContent: "center", borderWidth: "0px" }}
          >
            <SwapHorizontalCircleOutlinedIcon fontSize="large" />
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <h4>Input Your Item</h4>
            <table>
              <tr>
                <td className={classes.tdTitle}>Title :</td>
                <td className={classes.tdInput}>
                  <TextField
                    id="outlined-input"
                    label="title"
                    type="text"
                    variant="outlined"
                    size="small"
                    className={classes.textFied}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={classes.tdTitle}>Product Description :</td>
                <td className={classes.tdInput}>
                  <TextField
                    id="outlined-input"
                    label="Product Description"
                    multiline={true}
                    rows="3"
                    type="text"
                    variant="outlined"
                    size="small"
                    className={classes.textFied}
                    name="desc"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={classes.tdTitle}>Quantity :</td>
                <td className={classes.tdInput}>
                  <TextField
                    id="outlined-input"
                    label="Quantity"
                    type="number"
                    variant="outlined"
                    size="small"
                    name="quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    // className={classes.textFied}
                  />
                </td>
              </tr>
            </table>
            <div>&nbsp;</div>
            <Grid container spacing={5}>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                {/* <Paper className={classes.paper}> */}
                <Files
                  className={classes.files}
                  onChange={onFilesChange}
                  onError={onFilesError}
                  accepts={["image/*"]}
                  multiple={false}
                  maxFileSize={10000000}
                  minFileSize={0}
                  clickable
                >
                  {files.length > 0 ? "Replace File" : "Upload File"}
                </Files>
                {/* </Paper> */}
              </Grid>
              <Grid item xs={4}></Grid>
              {files.length > 0 ? (
                <Grid item xs={12}>
                  {files.map((file, index) => (
                    <div key={index}>
                      {/* <Grid item xs={4}> */}
                      <Paper className={classes.paper}>
                        <img
                          className={classes.img2}
                          src={file.preview.url}
                          alt={file.name}
                        />
                      </Paper>
                      {/* </Grid> */}
                    </div>
                  ))}
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <div
                    className={classes.img2}
                    style={{ padding: "15px" }}
                  ></div>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
    // <div className="trade">
    //   <h1>Trade Items</h1>

    //   <table>
    //     <tr>
    //       <th style={{ width: "40%" }}>Item</th>
    //       <th></th>
    //       <th style={{ width: "40%" }}>Your Item</th>
    //     </tr>
    //     <tr>
    //       <td style={{ width: "40%", padding: "10px" }}>
    //         {/* <div className="home__row"> */}
    //         <Product
    //           id={trade[0]?.id}
    //           title={trade[0]?.title}
    //           price={trade[0]?.price}
    //           image={trade[0]?.image}
    //           rating={trade[0]?.rating}
    //           isHideButton={true}
    //         />
    //         {/* </div> */}
    //       </td>
    //       <td>
    //         {/* <div className="home__row"> */}
    //         <SwapHorizontalCircleOutlinedIcon className="iconSwap" />
    //         {/* </div> */}
    //       </td>
    //       <td
    //         style={{
    //           textAlign: "left",
    //           width: "40%",
    //           padding: "10px",
    //         }}
    //       >
    //         {/* <div className="home__row"> */}
    //         <div className="trade__form">
    //           <div style={{ backgroundColor: "white", maxHeight: "40vh" }}>
    //             <label htmlFor="title">Title:</label>
    //             <input
    //               type="text"
    //               id="title"
    //               value={title}
    //               onChange={(e) => setTitle(e.target.value)}
    //             />

    //             <label htmlFor="description">Product Description:</label>
    //             <textarea
    //               id="description"
    //               value={description}
    //               onChange={(e) => setDescription(e.target.value)}
    //             ></textarea>

    //             <label htmlFor="quantity">Quantity:</label>
    //             <input
    //               type="number"
    //               id="quantity"
    //               value={quantity}
    //               onChange={(e) => setQuantity(e.target.value)}
    //             />

    //             <label htmlFor="image">Upload Image:</label>
    //             <input type="file" id="image" onChange={handleImageUpload} />
    //             {image && (
    //               <button onClick={handleRemoveImage}>Remove Image</button>
    //             )}
    //           </div>

    //           <div className="trade__items">
    //             {items.map((item, index) => (
    //               <div key={index} className="trade__item">
    //                 <h3>{item.title}</h3>
    //                 <p>{item.description}</p>
    //                 <p>Quantity: {item.quantity}</p>
    //                 <div className="trade__image-container">
    //                   {item.image && (
    //                     <img
    //                       src={item.image}
    //                       alt="Item"
    //                       className="trade__image"
    //                     />
    //                   )}
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //         {/* </div> */}
    //       </td>
    //     </tr>
    //   </table>
    // </div>
  );
}

export default Trade;
