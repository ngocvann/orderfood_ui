import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='w-[18rem]'>

        <div className={`${true? 'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover' src="https://r2.nucuoimekong.com/wp-content/uploads/quan-an-ngon-o-sai-gon-lua-dai-viet.jpg" alt="" />
            <Chip size='small' className='absolute top-2 left-2' color={true?"success":"error"} label={true?"open":'closed'}/>
        </div>
        <div className="p-4 textPart lg:flex w-full justify-between">
            <div className="space-y-1">
                <p className='font-semibold text-lg'>Nhà hàng Lúa Đại Việt</p>
                <p className='text-gray-500 text-sm'>
                    Phục vụ hơn 300 món ăn
                </p>
            </div>
            <div>
                <IconButton>
                    {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
            </div>
        </div>
        
    </Card>
  )
}

export default RestaurantCard