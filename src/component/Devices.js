import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDevices } from "../redux/action";
import Axios from "axios";

const Devices = () => {
  const [send, setSend] = useState(false);
  const state = useSelector((state) => state.deviceState);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  let totalDevice = state?.devices?.devices?.length;

  useEffect(() => {
    let ctn = document.getElementById("dot-container");
    for (let i = 0; i < Number(totalDevice); i++) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      dot.style.backgroundColor = "white";
      ctn.appendChild(dot);
    }
  });

  // logout
  const logout = () => {
    localStorage.removeItem("auth");
    history.push("/");
  };
  // access_token
  const access_token = JSON.parse(localStorage.getItem("auth"));
  const user = {
    name: "Abdur Rakib Rony",
    email: JSON.parse(localStorage.getItem("userEmail")),
    repoUrl: "https://github.com/ronyfr3/MeldCX",
    message: "Task Done",
  };
  const sendNotify = () => {
    Axios({
      method: "post",
      url: "http://35.201.2.209:8000/notify",
      data: user,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then(function () {
        setSend(true);
        setTimeout(() => {
          setSend(false);
        }, 4000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="wrapper">
      <div className="info">
        {state.loading ? <small>loading...</small> : <p>{totalDevice}</p>}
        <small>{totalDevice > 0 ? "devices" : "device"}</small>
        <small>Online</small>
      </div>
      <div id="dot-container"></div>
      <div className="btns">
        <button className="notify" onClick={sendNotify}>
          {send ? " send" : " Notify"}
        </button>
        <button className="logout" onClick={logout}>
          log out
        </button>
      </div>
    </div>
  );
};

export default Devices;
