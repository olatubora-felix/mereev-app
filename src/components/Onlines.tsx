import React from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

const Onlines = () => {
  return (
    <Box px={3}>
      <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
        Online Friends
      </Typography>
      <AvatarGroup max={8}>
        <Avatar
          alt="Remy Sharp"
          src="https://res.cloudinary.com/mobinet/image/upload/v1646834692/Ellipse_6_un2cnq.svg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://res.cloudinary.com/mobinet/image/upload/v1643311266/adu_gf5wjq.svg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://res.cloudinary.com/mobinet/image/upload/v1643890938/unsplash_ILip77SbmOE_whqt3b.svg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://res.cloudinary.com/mobinet/image/upload/v1643890952/unsplash_nHIb0s-BZMA_gnjak2.svg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://res.cloudinary.com/mobinet/image/upload/v1643890887/unsplash_GntSiIMHyVM_rwlj7u.svg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://res.cloudinary.com/mobinet/image/upload/v1643890887/unsplash_GntSiIMHyVM_rwlj7u.svg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://res.cloudinary.com/mobinet/image/upload/v1643890887/unsplash_GntSiIMHyVM_rwlj7u.svg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://res.cloudinary.com/mobinet/image/upload/v1643890887/unsplash_GntSiIMHyVM_rwlj7u.svg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://res.cloudinary.com/mobinet/image/upload/v1643890887/unsplash_GntSiIMHyVM_rwlj7u.svg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://res.cloudinary.com/mobinet/image/upload/v1643890887/unsplash_GntSiIMHyVM_rwlj7u.svg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://res.cloudinary.com/mobinet/image/upload/v1643890887/unsplash_GntSiIMHyVM_rwlj7u.svg"
        />
      </AvatarGroup>
    </Box>
  );
};

export default Onlines;
