import React, { useState } from "react";

import { Backdrop, Fade, Modal } from "@material-ui/core";
// import Login from "./Login";
import { Button } from "antd";
import "antd/dist/antd.css";
import Login from "./Login";
function Header() {
  const loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  const bal = localStorage.getItem("balance");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    alert("you are logOut");
    localStorage.setItem("loginStatus", false);
  };
  return (
    <nav
      style={{
        background: "#753eca",
        height: "65px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "1rem",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        color: "#fff",
        padding: "0 30px",
      }}
    >
      <div>SRAVANKUMAR</div>
      {loginStatus === false ? (
        // <div onClick={handleOpen}>Login</div>
        <Button onClick={handleOpen} type="primary">
          Login
        </Button>
      ) : (
        // <div onClick={handleLogout}>logout</div>
        <Button onClick={handleLogout} type="primary">
          LogOut
        </Button>
      )}
      <div>
        <div>
          <p>{`bal:${bal}$`}</p>
        </div>
      </div>
      {!loginStatus && (
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            {/* <div className={styles.form_wrapper}> */}
            <Login handleClose={handleClose} />
            {/* </div> */}
          </Fade>
        </Modal>
      )}
    </nav>
  );
}

export default Header;
