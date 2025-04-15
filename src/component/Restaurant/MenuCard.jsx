import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo = [
  {
    category:"Nước chấm",
    ingredients:["Muối ớt xanh"]
  },
  {
    category:"Độ cay",
    ingredients:["Cay","Không cay"]
  }
]

const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log("value")
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
      <div className="lg:flex items-center justify-between">
        <div className='lg:flex items-center lg:gap-5'>
          <img className='w-[7rem] h-[7rem] object-cover' src="https://product.hstatic.net/200000626331/product/37_9ab6ca3156c24a12a02ed0a3dd14c35f_grande.png" alt="" />
          <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
            <p className='font-semibold text-xl'>Sụn Gà Rang Muối</p>
            <p>175.000&#8363;</p>
            <p className='text-gray-400'>Giòn sật của miếng sụn gà khi kết hợp vị mặn từ muối càng làm cho món ăn thêm phần hấp dẫn. Chấm với tương ớt hay muối tiêu xanh thì đúng hết sẩy.</p>
          </div>
        </div>
      </div>
      </AccordionSummary>
      <AccordionDetails>
        <form action="">
          <div className="flex gap-5 flex-wrap">
            {
              demo.map((item)=> (
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredients.map((item)=> (
                      <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />
                    ))}
                  </FormGroup>
                </div>                
              ))}
          </div>
          <div className='pt-5'>
            <Button type='submit' variant='contained' disabled={false}>{true?"Add to Cart":"Out of Stock"}</Button>
          </div>
        </form> 
      </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard