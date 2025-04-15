import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';

const categories = [
    "Pho",
    "Bun Bo",
    "Com tam",
    "Banh mi"
];

const foodTypes = [
    {label:"All", value:"All"},
    {label:"Vegetarian only", value:"vegetarian"},
    {label:"Non-Vegetarian", value:"non_vegetarian"},
    {label:"Seasonal", value:"seasonal"}
];

const menu = [1,1,1,1,1,1]

const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("All");

    const handleFilter=(e)=>{
        setFoodType(e.target.value);
        console.log(e.target.value, e.target.name)
    }
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-300 py-2 mt-10'>Home/VietNam/.../3</h3>
            <Grid container spacing={2} columns={16} className='pb-[2rem]'>
                <Grid size={8}>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <img className='w-full h-[50vh] object-cover' src="https://r2.nucuoimekong.com/wp-content/uploads/quan-an-ngon-o-sai-gon-lua-dai-viet.jpg" alt="" />
                            </Grid>
                            {/* <Grid item xs={12} lg={6}>
                                <img className='w-full h-[40vh] object-cover' src="https://r2.nucuoimekong.com/wp-content/uploads/quan-an-ngon-o-sai-gon-lua-dai-viet.jpg" alt="" />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <img className='w-full h-[40vh] object-cover' src="https://r2.nucuoimekong.com/wp-content/uploads/quan-an-ngon-o-sai-gon-lua-dai-viet.jpg" alt="" />
                            </Grid> */}
                        </Grid>
                    </div>
                </Grid>
                <Grid size={8} >
                    <div className="pt-3 pb-5">
                        <h1 className="text-4xl font-semibold">Nhà hàng Lúa Đại Việt</h1>
                        <p className='text-gray-500 mt-1'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat rem nam maiores impedit, reprehenderit ab temporibus provident accusamus ratione, voluptate consectetur architecto ipsam deserunt, qui minus aliquam tempore ducimus accusantium.
                        </p>
                        <div className="space-y-3 mt-3">
                            <p className="text-gray-500 flex items-center gap-3">
                                <LocationOnIcon/>
                                <span>Đường Đề Thám, P.Phạm Ngũ Lão, Quận 1</span>
                            </p>
                            <p className='text-gray-500 flex items-center gap-3'>
                                <CalendarTodayIcon/>
                                <span>Cả tuần: 9.00AM - 11.00PM</span>
                            </p>
                        </div>

                    </div>
                </Grid>
            </Grid>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className="space-y-10 lg:w-[20%] filter ">
                <div className='box space-y-5 lg:sticky top-28'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                                {foodTypes.map((item)=>(
                                    <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='category' value={foodType}>
                                {categories.map((item)=>(
                                    <FormControlLabel key={item} value={item} control={<Radio />} label={item} />))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className="space-y-10 lg:w-[80%] lg:pl-10">
                {menu.map((item)=><MenuCard/>)}
            </div>
        </section>
    </div>
  );
};

export default RestaurantDetails