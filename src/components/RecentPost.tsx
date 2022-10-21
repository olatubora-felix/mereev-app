import React from "react";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";
import { itemData } from "../data";

const RecentPost = () => {
  return (
    <Box px={3}>
      <Typography mt={2} mb={2} fontWeight={100}>
        Latest Post
      </Typography>
      <ImageList cols={3} rowHeight={100} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.image}>
            <img
              src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt="images"
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default RecentPost;
