import { Box, Button, Card, Divider, Grid, TextField } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { AddLocation } from '@mui/icons-material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Modal from '@mui/material/Modal';
// import * as Yup from "yup"

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#191919',
    outline:"none",
    boxShadow: 24,
    p: 4,
    borderRadius: 2
};
const initialValues = {
    detailAddress:"",
    commune:"",
    district:"",
    city:""
}
// const validationSchema=Yup.object.shape({
//     detailAddress:Yup.string().required("Vui lòng nhập địa chỉ"),
//     commune:Yup.string().required("Vui lòng nhập phường/xã"),
//     district:Yup.string().required("Vui lòng nhập quận/huyện"),
//     city:Yup.string().required("Vui lòng nhập thành phố")
// })
const items=[1,1]
const Cart = () => {
    const createOrderUsingSelectedAddress=()=>{}
    const handleOpenAddressModal = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleSubmit=(values)=>{
        console.log("form value", values)
    }
  return (
    <>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
               {items.map((item)=> (
                    <CartItem/>
                ))}
                <Divider/>
                <div className='billDetails px-5 text-sm'>
                    <p className='font-extralight py-5'>Bill Details</p>
                    <div className="space-y-3">
                        <div className="flex justify-between text-gray-400">
                            <p>Item Total</p>
                            <p>$500</p>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Deliver Fee</p>
                            <p>$21</p>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Tax</p>
                            <p>$33</p>
                        </div>
                        <Divider/>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>Total pay</p>
                        <p>$3300</p>
                    </div>
                </div>
            </section>
            <Divider orientation='vertical' flexItem/>
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                <div>
                    <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                    <div className="flex gap-5 flex-wrap justify-center">
                        {[1,1,1,1,1].map((item)=>(
                            <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>
                        ))}
                        <Card className='flex gap-5 w-64 p-5'>
                            <AddLocation/>
                            <div className='space-y-3 text-gray-500'>
                                <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>
                                    Add
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Formik initialValues={initialValues}
                        // validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid size={{xs: 12}} style={{ width: '100%' }}>
                                    <Field as={TextField} 
                                        name="detailAddress" 
                                        label="Địa chỉ" 
                                        fullWidth
                                        variant="outlined"
                                        // error={!ErrorMessage("detailAddress")}
                                        // helperText={
                                        //     <ErrorMessage>
                                        //         {(msg)=><span className='text-red-600'>{msg}</span>}
                                        //     </ErrorMessage>
                                        // }
                                    />
                                </Grid>
                                <Grid size={{xs: 12}} style={{ width: '100%' }}>
                                    <Field as={TextField} 
                                        name="commune" 
                                        label="Phường/xã" 
                                        fullWidth
                                        variant="outlined"
                                        // error={!ErrorMessage("detailAddress")}
                                        // helperText={
                                        //     <ErrorMessage>
                                        //         {(msg)=><span className='text-red-600'>{msg}</span>}
                                        //     </ErrorMessage>
                                        // }
                                    />
                                </Grid>
                                <Grid size={{xs: 12}} style={{ width: '100%' }}>
                                    <Field as={TextField} 
                                        name="district" 
                                        label="Quận/huyện" 
                                        fullWidth
                                        variant="outlined"
                                        // error={!ErrorMessage("detailAddress")}
                                        // helperText={
                                        //     <ErrorMessage>
                                        //         {(msg)=><span className='text-red-600'>{msg}</span>}
                                        //     </ErrorMessage>
                                        // }
                                    />
                                </Grid>
                                <Grid size={{xs: 12}} style={{ width: '100%' }}>
                                    <Field as={TextField} 
                                        name="city" 
                                        label="Tỉnh/TP" 
                                        fullWidth
                                        variant="outlined"
                                        // error={!ErrorMessage("detailAddress")}
                                        // helperText={
                                        //     <ErrorMessage>
                                        //         {(msg)=><span className='text-red-600'>{msg}</span>}
                                        //     </ErrorMessage>
                                        // }
                                    />
                                </Grid>
                                <Form style={{ width: '100%' }}>
                                    <Grid size={{xs: 12}} >
                                        <Button fullWidth variant='contained' type='submit' color='primary'>
                                            Giao hàng
                                        </Button>
                                    </Grid>
                                </Form>                                
                            </Grid>
                </Formik>
            </Box>
        </Modal>
    </>
  )
}

export default Cart