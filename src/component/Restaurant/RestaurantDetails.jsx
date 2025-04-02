import { Divider, Grid } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const RestaurantDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-300 py-2 mt-10'>Home/VN/VN fast food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className='w-full h-[40vh] object-cover' src="https://r2.nucuoimekong.com/wp-content/uploads/quan-an-ngon-o-sai-gon-lua-dai-viet.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://r2.nucuoimekong.com/wp-content/uploads/quan-an-ngon-o-sai-gon-lua-dai-viet.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className='w-full h-[40vh] object-cover' src="https://r2.nucuoimekong.com/wp-content/uploads/quan-an-ngon-o-sai-gon-lua-dai-viet.jpg" alt="" />
                    </Grid>
                </Grid>
                
            </div>
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
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className="space-y-10 lg:w-[20%] filter">
                Filter 
            </div>
            <div className="space-y-10 lg:w-[20%] lg:pl-10">
                
            </div>
        </section>
    </div>
  )
}

export default RestaurantDetails