import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { Mail, Notifications } from "@mui/icons-material";
import { useState, useContext } from "react";
import DarkModeContext from "../context/DarkContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ctx = useContext(DarkModeContext);
  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: `${ctx.mode === "dark" ? "#fff" : "#fff"}`,
    color: `${ctx.mode === "dark" ? "black" : ""}`,
    width: "300px",
    padding: "5px 10px",
    margin: "0px 10px",
    borderRadius: "5px",
    border: "1px solid #fff",
  }));
  const Icon = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    cursor: "pointer",
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    cursor: "pointer",
  }));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography sx={{ display: { xs: "none", sm: "flex" } }}>
          Mereev Dev
          <PetsIcon sx={{ marginLeft: "5px" }} />
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." fullWidth />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={handleOpen}
            src="https://res.cloudinary.com/mobinet/image/upload/v1643890938/unsplash_ILip77SbmOE_whqt3b.svg"
          />
        </Icon>
        <UserBox onClick={handleOpen}>
          <Avatar src="https://res.cloudinary.com/mobinet/image/upload/v1643890938/unsplash_ILip77SbmOE_whqt3b.svg" />
          <Typography variant="h6">Olawole</Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
