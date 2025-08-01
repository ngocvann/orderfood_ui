import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useParams } from "react-router-dom";
import {
  Alert,
  Box,
  Chip,
  CircularProgress,
  IconButton,
  OutlinedInput,
  Snackbar,
} from "@mui/material";
import { uploadToCloudinary } from "../utils/UploadToCloudnary";
import { createMenuItem } from "../../State/Customers/Menu/menu.action";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const validationSchema = Yup.object({
  name: Yup.string().required("Tên không được để trống."),
  description: Yup.string().required("Mô tả không được để trống."),
  price: Yup.number()
    .typeError("Giá phải ở dạng số")
    .required("Giá không được để trống.")
    .min(0, "Giá phải lớn hơn hoặc bằng 0"),

  imageUrl: Yup.string().url("URL sai").required("URL không được để trống."),
  vegetarian: Yup.boolean().required("Chọn món không được để trống."),
  seasonal: Yup.boolean().required("Không được để trống."),
  quantity: Yup.number()
    .typeError("Số lượng phải là số")
    .required("Số lượng không được để trống.")
    .min(0, "Số lượng phải lớn hơn hoặc bằng 0"),
});
const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  images: [],
  restaurantId: "",

  vegetarian: true,
  seasonal: false,
  quantity: 0,
  ingredients: [],
};

const AddMenuForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { restaurant, ingredients, auth, menu } = useSelector((store) => store);
  const [uploadImage, setUploadingImage] = useState("");
  const jwt = localStorage.getItem("jwt");

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.restaurantId = restaurant.usersRestaurant.id;

      dispatch(createMenuItem({ menu: values, jwt: auth.jwt || jwt }));
      console.log("values ----- ", values);
    },
  });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setUploadingImage(true);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadingImage(false);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  const [openSnackBar, setOpenSnackBar] = useState(false);

  useEffect(() => {
    if (menu.message || menu.error) setOpenSnackBar(true);
  }, [menu.message, menu.error]);

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  return (
    <>
      <div className="lg:px-32 px-5 lg:flex  justify-center min-h-screen items-center pb-5">
        <div>
          <h1 className="font-bold text-2xl text-center py-2">
            Thêm thực đơn mới
          </h1>
          <form onSubmit={formik.handleSubmit} className="space-y-4 ">
            <Grid container spacing={2}>
              <Grid className="flex flex-wrap gap-5" item xs={12}>
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />

                <label className="relative" htmlFor="fileInput">
                  <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                    <AddPhotoAlternateIcon className="text-white" />
                  </span>
                  {uploadImage && (
                    <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                      <CircularProgress />
                    </div>
                  )}
                </label>

                <div className="flex flex-wrap gap-2">
                  {formik.values.images.map((image, index) => (
                    <div className="relative">
                      <img
                        className="w-24 h-24 object-cover"
                        key={index}
                        src={image}
                        alt={`ProductImage ${index + 1}`}
                      />
                      <IconButton
                        onClick={() => handleRemoveImage(index)}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          outline: "none",
                        }}
                      >
                        <CloseIcon sx={{ fontSize: "1rem" }} />
                      </IconButton>
                    </div>
                  ))}
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Tên món"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="description"
                  name="description"
                  label="Mô tả"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="price"
                  name="price"
                  label="Giá"
                  variant="outlined"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  error={formik.touched.price && Boolean(formik.errors.price)}
                  helperText={formik.touched.price && formik.errors.price}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="categoryId">Food Category</InputLabel>
                  <Select
                    id="category"
                    name="category"
                    label="Danh mục"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                  >
                    {restaurant.categories.map((item) => (
                      <MenuItem value={item}>{item.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="ingredient-multiple-chip-label">
                    Lựa chọn
                  </InputLabel>
                  <Select
                    labelId="ingredient-multiple-chip-label"
                    id="ingredient-multiple-chip"
                    multiple
                    name="ingredients"
                    value={formik.values.ingredients}
                    onChange={formik.handleChange}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Ingrededients"
                      />
                    }
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value.id} label={value.name} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {ingredients.ingredients?.map((item) => (
                      <MenuItem
                        key={item.id}
                        value={item}
                        // style={getStyles(name, personName, theme)}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="vegetarian">Is Vegetarian</InputLabel>
                  <Select
                    id="vegetarian"
                    name="vegetarian"
                    label="Is Vegetarian"
                    onChange={formik.handleChange}
                    value={formik.values.vegetarian}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="seasonal">Is Seasonal</InputLabel>
                  <Select
                    id="seasonal"
                    name="seasonal"
                    label="Is Seasonal"
                    onChange={formik.handleChange}
                    value={formik.values.seasonal}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="isVegan">Is Vegan</InputLabel>
                <Select
                  id="isVegan"
                  name="isVegan"
                  label="Is Vegan"
                  onChange={formik.handleChange}
                  value={formik.values.isVegan}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
            </Grid>
            <Button variant="contained" color="primary" type="submit">
              TẠO MỚI
            </Button>
          </form>
        </div>
      </div>

      <Snackbar
        sx={{ zIndex: 50 }}
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackBar}
        // handleClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity={menu.error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {menu.message || auth.error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddMenuForm;
