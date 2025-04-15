import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className="flex items-center space-x-5">
            <img className='h-16 w-16' src="https://product.hstatic.net/200000626331/product/sup_ghe_01249c6d1f1c413ebc3ba316b2f63788_grande.png" alt="" />
            <div>
                <p>Blue Crab Soup (Small Bowl) - Soup Ghẹ</p>
                <p>98,000đ</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'> Complete </Button>
        </div>
    </Card>
  )
}

export default OrderCard