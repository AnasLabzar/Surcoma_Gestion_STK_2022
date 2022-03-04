import React, {useEffect, useState} from 'react';
import Axios from "axios";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  // const [STK_actuel, setSTK_actuel] = useState(100);
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/readProduct").then((response) => {
  //     setSTK_actuel(response.data);
  //     // console.log(response);
  //   });
  // }, []);

  // if (STK_actuel == "15") {
  //   bgcolor = "red"
  // } else {
  //   bgcolor = "green"
  // }

  const containerStyles = {
    height: 20,
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
    //   margin: 50
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles} >
      <div style={fillerStyles} className={`${completed <= 40 ? 'bg-red-600' : 'bg-green'}`}>
        <span  style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
