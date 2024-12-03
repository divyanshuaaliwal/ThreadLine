import React from 'react';
import CartItem from '../Cart/CartItem';
import { Button } from '@mui/material';
import AddressCard from '../AddressCard/AddressCard';

const OrderSummary = () => {
    
    return (

        <div>

            <div className='p-4 shadow-lg rounded-2xl border mb-5'>
                <AddressCard index={0} />
            </div>

            <div>

                <div className='grid grid-cols-1  lg:grid-cols-3 relative'>
                        
                    <div className='col-span-2 space-y-5'>
                        {
                            [1,1,1,1,1,1].map( (item) => <CartItem/> )
                        }
                    </div>
       
                    <div className='pl-5 sticky top-5 h-[100vh] mt-5 lg:mt-0'>
        
                        <div className="rounded-xl border-2 border-gray-200 bg-white p-6 shadow-md">
                                
                            <p className="uppercase text-center font-bold text-gray-500">Price Details</p>
                                    
                                <hr className="my-4" />
            
                                <div className="space-y-4 font-semibold">
                                        
                                    <div className="flex justify-between text-black">
                                        <span>Price</span>
                                        <span>₹4697</span>
                                    </div>
            
                                    <div className="flex justify-between">
                                        <span>Discount</span>
                                        <span className="text-green-600">-₹3419</span>
                                    </div>
            
                                    <div className="flex justify-between">
                                        <span>Delivery Charge</span>
                                        <span className="text-green-600">Free</span>
                                    </div>
                
                                    <div className="flex justify-between font-bold">
                                        <span>Total Amount</span>
                                        <span className="text-green-600">₹1278</span>
                                    </div>
            
                                </div>
            
                                <button
                                    className="mt-6 w-full rounded-lg bg-purple-500 px-6 py-3 text-white font-bold shadow-lg hover:bg-purple-600 focus:outline-none"
                                //    onClick={handleCheckout}
                                >
                                    Checkout
                                </button>
                                
                        </div>
       
                
                    </div>
       
                </div>

            </div>

        </div>
        
        
    )

}

export default OrderSummary;