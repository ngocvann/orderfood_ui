import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteRestaurant,
  updateRestaurantStatus,
} from "../../State/Customers/Restaurant/restaurant.action";

export default function RestaurantCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDeleteRestaurant = () => {
    dispatch(deleteRestaurant(item.id));
  };

  const handleUpdateRestaurantStatus = () => {
    dispatch(updateRestaurantStatus(item.id));
  };

  return (
    <Card sx={{ maxWidth: 345, m: "1rem" }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "#e91e63", color: "white" }}
            aria-label="recipe"
          >
            Z
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.name}
        subheader="September 14, 2016"
      />
      <img
        className="h-[17rem] w-full object-cover"
        src={item.imageUrl}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Ngon!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="flex w-full items-center justify-between">
          <div>
            <IconButton onClick={handleDeleteRestaurant} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </div>
          <div>
            <Button
              color={item.open ? "warning" : "success"}
              onClick={handleUpdateRestaurantStatus}
            >
              {item.open ? "Close" : "Open"}
            </Button>
          </div>
          <div>
            <Button
              size="small"
              onClick={() => navigate(`/admin/restaurants/${item.id}`)}
            >
              Tổng quan
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
