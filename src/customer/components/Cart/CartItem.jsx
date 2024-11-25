import { Button, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    
    return (

        <div className='p-5 shadow-lg border rounded-md'>
            
            <div className='flex items-center'>
                
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' 
                        src='https://t4.ftcdn.net/jpg/06/11/54/13/360_F_611541314_bil0Vni4zpZ9yPYpK8dSqGoodtKgtkDY.jpg'
                    />
                </div>

                <div className='ml-5 space-y-1'>
                    
                    <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                    <p className='opacity-70'>Size: L, White</p>
                    <p className='opacity-70 mt-2'>Seller: Crishtaliyo 2fashion</p>
                    
                    <div className="flex items-center space-x-5 text-lg text-gray-900 pt-6">
                        <p className='font-semibold'>₹1990</p>
                        <p className='opacity-50 line-through'>₹2110</p>
                        <p className='font-semibold text-green-600'>5% off</p>
                    </div>

                </div>

            </div>

            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                
                <div className='flex items-center space-x-2'>
                    
                    <IconButton> 
                        <RemoveCircleOutlineIcon/>
                    </IconButton>

                    <span className='py-1 px-7 border rounded-sm'>
                        3
                    </span>

                    <IconButton sx={{ color: "rgb(145, 85, 253)" }}>
                        <AddCircleOutlineIcon/>
                    </IconButton>


                </div>
                
                <div>
                    <Button sx={{ color: "rgb(145, 85, 253)" }}>remove</Button>
                </div>
            </div>
        </div>
        
    )
}

export default CartItem;