import React, { Fragment } from "react";
import { ModalProps } from "../constants";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";

import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const AddPost: React.FC<ModalProps> = (props) => {
  const StyleModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  return (
    <Fragment>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: "5%",
          left: "10%",
          display: { xs: "none", sm: "block" },
        }}
        onClick={props.handleOpen}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyleModal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            color="gray"
            textAlign="center"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="https://res.cloudinary.com/mobinet/image/upload/v1643890938/unsplash_ILip77SbmOE_whqt3b.svg" />
            <Typography variant="h6" sx={{ marginLeft: "16px" }}>
              Olawole
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            rows={3}
            multiline
            placeholder="What's on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} my={3}>
            <EmojiEmotions color="primary" sx={{ cursor: "pointer" }} />
            <Image color="secondary" sx={{ cursor: "pointer" }} />
            <VideoCameraBack color="success" sx={{ cursor: "pointer" }} />
            <PersonAdd color="error" sx={{ cursor: "pointer" }} />
          </Stack>
          <ButtonGroup fullWidth variant="contained">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </Fragment>
  );
};

export default AddPost;
