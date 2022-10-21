import {
  AppBar,
  IconButton,
  Toolbar,
  styled,
  Fab,
  MenuItem,
  Menu,
  Box,
  Switch,
} from "@mui/material";
import React, { Fragment } from "react";
import { useContext, useState } from "react";
import DarkModeContext from "../context/DarkContext";
import Typography from "@mui/material/Typography";
import { ModalProps } from "../constants";
import {
  AccountBox,
  Add,
  Article,
  Group,
  Home,
  More,
  Person,
  Settings,
  ShoppingBag,
} from "@mui/icons-material";

const Mobile: React.FC<ModalProps> = (props) => {
  const [open, setOpen] = useState(false);
  const StyledFab = styled(Fab)({
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  });

  const ctx = useContext(DarkModeContext);

  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, display: { xs: "block", sm: "none" } }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <Home />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
            <Article />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
            <Group />
          </IconButton>

          <StyledFab
            color="secondary"
            aria-label="add"
            onClick={props.handleOpen}
          >
            <Add />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Person />
          </IconButton>

          <IconButton color="inherit">
            <AccountBox />
          </IconButton>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <More />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton color="inherit">
            <Settings />
            <Typography>Settings</Typography>
          </IconButton>
          <IconButton color="inherit">
            <ShoppingBag />
            <Typography>Marketplace</Typography>
          </IconButton>
          <Switch onChange={ctx.handleChange} />
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default Mobile;
