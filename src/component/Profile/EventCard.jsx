import { Delete } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:290}}>
            <CardMedia sx={{height:290}} image='https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg'/>
            <CardContent>
                <Typography variant='h5' >
                    Viet Nam Fast Food
                </Typography>
                <Typography variant='h5' >
                    50% off on your first order
                </Typography>
                <div className="py-2 space-y-2">
                    <p>{"HCM"}</p>
                    <p className='text-sm text-blue-500'>April 14, 2025 12.00 AM</p>
                    <p className='text-sm text-red-500'>April 30, 2025 12.00 AM</p>
                </div>
            </CardContent>

            {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}

export default EventCard