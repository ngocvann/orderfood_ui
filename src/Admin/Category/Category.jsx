import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRestaurantsCategory } from "../../State/Customers/Restaurant/restaurant.action";
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Modal,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import CreateCategory from "./CreateCategory";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  p: 4,
};

const Category = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { auth } = useSelector((store) => store);
  const { categories } = useSelector((store) => store.restaurant);
  const jwt = localStorage.getItem("jwt");
  const [openCreateCategory, setOpenCreateCategory] = React.useState(false);

  const handleOpenCreateCategory = () => setOpenCreateCategory(true);
  const handleCloseCreateCategory = () => setOpenCreateCategory(false);

  useEffect(() => {
    if (jwt && id) {
      dispatch(getRestaurantsCategory({ restaurantId: id, jwt }));
    } else {
      console.error("JWT or restaurantId is undefined:", { jwt, id });
    }
  }, [dispatch, jwt, id]);

  return (
    <div>
      <Card className="mt-16">
        <CardHeader
          title={"DANH MỤC MÓN ĂN"}
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
          action={
            <IconButton onClick={handleOpenCreateCategory}>
              <AddIcon />
            </IconButton>
          }
        />
        <TableContainer>
          <Table sx={{}} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Tên danh mục</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories?.map((item, index) => (
                <TableRow
                  className="cursor-pointer"
                  hover
                  key={item.id}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  <TableCell>{item?.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Modal
        open={openCreateCategory}
        onClose={handleCloseCreateCategory}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateCategory
            handleClose={handleCloseCreateCategory}
            restaurantId={id}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Category;
