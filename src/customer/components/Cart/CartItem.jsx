import { Button, IconButton } from '@mui/material';
import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    
    return (
        <div>
        
            <div className="p-5 rounded-xl border-2 border-gray-100 bg-white">
                
                <div className="flex items-start">
                        
                    <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                        <img className='w-full h-full object-cover object-top' 
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        />
                    </div>

                    <div className='ml-5 space-y-1'>

                        <p className="font-semibold">
                            Men Slim Mid Rise Black Jeans
                        </p>

                        <p className="opacity-70">
                            Size: L, White
                        </p>

                        <p className="opacity-70 mt-2">
                            Seller: Crishtaliyo 2fashion
                        </p>

                                   
                        <div className="mt-2 flex items-center space-x-5 text-gray-900 pt-2 text-lg">
                            <p className="font-semibold">₹1990</p>
                            <p className="opacity-50 line-through">₹2110</p>
                            <p className="font-semibold text-green-600">5%off</p>
                        </div>           
                        
                    </div>

                </div>

                <div className='flex items-center lg:space-x-10 pt-4'>
                    
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

                <div className="flex justify-end">
                    
                    <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                        </svg>

                        <span className="text-[10px] font-medium sm:text-xs">Added!</span>
                    </strong>
                </div>

            </div>

        </div>
    )
}

export default CartItem;