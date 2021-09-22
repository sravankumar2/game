import React, { useState } from "react";
// import Login from "../Login";
import { Backdrop, Fade, Modal } from "@material-ui/core";
// import Games from "./components/Content/Game";
// import Tables from "./components/Content/Tables";
import { Button } from "antd";
import Results from "./Results";
import Game from "./Game";
// import Results from "./Results";
// import TableData from "./TableData";

const Home = () => {
  const [open, setOpen] = useState(false);
  // const [table, setTable]= useState([{id:"",slot1:'',slot2:"",slot3:"",time:""}])
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Results />
      {/* <button onClick={handleOpen}>Start</button> */}
      <Button onClick={handleOpen} type="primary">
        Start Game
      </Button>
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
          <div>
            <Game handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Home;
