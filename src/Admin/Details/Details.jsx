import { Button, Card, CardContent, CardHeader, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { updateRestaurantStatus } from "../../State/Customers/Restaurant/restaurant.action";

const Details = () => {
  const dispatch = useDispatch();
  const { auth, restaurant, ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const handleRestaurantStatus = () => {
    dispatch(
      updateRestaurantStatus({
        restaurantId: restaurant.usersRestaurant.id,
        jwt: auth.jwt || jwt,
      })
    );
  };
  return (
    <div className="lg:px-20 px-5">
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          {restaurant.usersRestaurant?.name}
        </h1>
        <div>
          <Button
            onClick={handleRestaurantStatus}
            size="large"
            // sx={{ padding: "1rem 2rem" }}
            className="py-[1rem] px-[2rem]"
            variant="contained"
            color={restaurant.usersRestaurant?.open ? "error" : "primary"}
          >
            {restaurant.usersRestaurant?.open ? "Close" : "Open"}
          </Button>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} className="w-[100%]">
          <Card>
            <CardHeader
              title={<span className="text-gray-300"> THÔNG TIN</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Chủ sở hữu</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>{" "}
                    {restaurant.usersRestaurant?.owner.fullName}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Tên thương hiệu</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>{" "}
                    {restaurant.usersRestaurant?.name}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Loại món ăn</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>{" "}
                    {restaurant.usersRestaurant?.cuisineType}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Giờ mở cửa</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>{" "}
                    {restaurant.usersRestaurant?.openingHours}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Trạng thái</p>
                  <div className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>{" "}
                    {restaurant.usersRestaurant?.open ? (
                      <span className="px-5 py-2 rounded-full bg-green-400 text-gray-950">
                        Mở cửa
                      </span>
                    ) : (
                      <span className="text-black px-5 py-2 rounded-full bg-red-400">
                        Đóng cửa
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={3} className="w-[100%]">
          <Card>
            <CardHeader
              title={<span className="text-gray-300"> ĐỊA CHỈ</span>}
            />
            <CardContent>
              <div className="space-y-3 text-gray-200">
                <div className="flex">
                  <p className="w-48">Quốc gia</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>{" "}
                    {restaurant.usersRestaurant?.address.country}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Tỉnh/TP</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>{" "}
                    {restaurant.usersRestaurant?.address.city}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Quận/huyện</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>{" "}
                    {restaurant.usersRestaurant?.address.state}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Địa chỉ chi tiết</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>{" "}
                    {restaurant.usersRestaurant?.address.streetAddress}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={7} className="w-[100%]">
          <Card>
            <CardHeader
              title={<span className="text-gray-300"> LIÊN LẠC</span>}
            />
            <CardContent>
              <div className="space-y-3 text-gray-200">
                <div className="flex">
                  <p className="w-48">Email</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>
                    {restaurant.usersRestaurant?.contactInformation.email}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">SĐT</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">:</span>
                    {" +91"}
                    {restaurant.usersRestaurant?.contactInformation.mobile}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="w-48">Mạng xã hội</p>
                  <div className="text-gray-400 flex items-center pb-3">
                    {" "}
                    <span className="pr-5">:</span>{" "}
                    <a
                      target="_blank"
                      href={
                        restaurant.usersRestaurant?.contactInformation.instagram
                      }
                      rel="noreferrer"
                    >
                      <InstagramIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a
                      className="ml-5"
                      href={
                        restaurant.usersRestaurant?.contactInformation.facebook
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon sx={{ fontSize: "3rem" }} />
                    </a>
                  </div>
                </div>
                {/* <div className="flex">
                  <p className="w-48">Twitter</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    <a
                      href={
                        restaurant.usersRestaurant?.contactInformation.instagram
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TwitterIcon sx={{fontSize:"3rem"}} />
                    </a>
                  </p>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
