import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteEventAction } from "../../State/Customers/Restaurant/restaurant.action";

const EventCard = ({ item, isCustomer }) => {
  const dispatch = useDispatch();
  const handleDeleteEvent = () => {
    dispatch(deleteEventAction(item.id));
  };
  return (
    <div>
      <Card sx={{ width: 290 }}>
        <CardMedia
          sx={{
            height: 145,
            "&:hover": {
              transform: "scale(1.1)", // Example: Scale the image on hover
              transition: "transform 0.5s ease-in-out", // Example: Apply a smooth transition effect
            },
          }}
          image={item.image}
          title="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.restaurant.name}
          </Typography>
          <div className="py-2 space-y-2">
            <p>{item.location}</p>
            <p className="text-sm text-green-500">{item.startedAt}</p>
            <p className="text-sm text-red-500">{item.endsAt}</p>
          </div>
        </CardContent>
        {!isCustomer && (
          <CardActions className="pt-2">
            <IconButton
              onClick={handleDeleteEvent}
              aria-label="add to favorites"
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
