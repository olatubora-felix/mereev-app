import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import "./App.css";
import AddPost from "./components/AddPost";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { useContext, useState } from "react";
import DarkModeContext from "./context/DarkContext";
import Mobile from "./components/Mobile";

function App() {
  const ctx = useContext(DarkModeContext);
  const [open, setopen] = useState(false);
  const handleOpen = () => {
    setopen(true);
  };
  const handleClose = () => {
    setopen(false);
  };
  const darkTheme = createTheme({
    palette: {
      mode: ctx.mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* Navbar */}
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        <Mobile handleOpen={handleOpen} open={open} handleClose={handleClose} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
