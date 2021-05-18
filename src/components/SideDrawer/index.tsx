import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import DataSelector from "./DataSelector";
import CountSelector from "./CountSelector";
import styled from "styled-components";
import MenuOpenIcon from "@material-ui/icons/Menu";

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 2px solid #00000042;
  border-radius: 8px;
  padding: 5px 10px;
  height: 35%;
  min-width: min(310px, 90%);
  margin: 5px;
  background-color: #f2e9b4;
`;

const SideDrawer: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <React.Fragment>
      <Button
        onClick={toggleDrawer(true)}
        style={{ color: "#ffffff", fontSize: "3.2rem" }}
      >
        <MenuOpenIcon fontSize="inherit" color="inherit" />
      </Button>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Controls>
          <DataSelector />
          <Divider />
          <CountSelector />
        </Controls>
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
