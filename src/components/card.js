import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import BasicModal from "./Modal";

function ActionAreaCard(props) {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ maxWidth: 768 }}>
        <CardActionArea onClick={() => setOpen(true)}>
          <CardMedia
            component="img"
            height="140"
            src={require("../img/" + props.img)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <BasicModal open={open} onClose={handleClose} img={props.img} />

      </Card>
    </div>
  );
}

export default ActionAreaCard;
