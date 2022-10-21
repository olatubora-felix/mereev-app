import React from "react";
import { Box } from "@mui/material";
import Posts from "./Posts";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Posts
        images="https://res.cloudinary.com/mobinet/image/upload/v1643944196/Rectangle_4441_3x_ltka00.png"
        user="James"
      />
      <Posts
        images="https://res.cloudinary.com/mobinet/image/upload/v1643944172/unsplash_pRJhn4MbsMM_3x_kuleb6.png"
        user="Make"
      />
      <Posts
        images="https://res.cloudinary.com/mobinet/image/upload/v1643867465/Rectangle_4440_3x_pnpiex.png"
        user="Felix"
      />
    </Box>
  );
};

export default Feed;
