import { Box } from "@mui/material";
import Comment from "./Comment";
import Onlines from "./Onlines";
import RecentPost from "./RecentPost";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Onlines />
        <RecentPost />
        <Comment />
      </Box>
    </Box>
  );
};

export default Rightbar;
