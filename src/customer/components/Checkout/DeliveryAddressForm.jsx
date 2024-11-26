import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import TextField from '@mui/material/TextField';

const DeliveryAddressForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        
        const formDataObject = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber")
        };

          
        console.log("address", formDataObject);

    }
    return (
        <Grid container spacing={4}>

            <Grid item xs={12} lg={5} className=''>

                <Box className="border rounded-e-md shadow-md p-5">
                    
                    <div className="h-[17rem] sm:h-[15rem] md:h-[15rem] lg:h-[31.3rem] overflow-y-scroll" >
                    {
                        [1,1,1,1,1]. map ( (card,index) => 
                            <div className="p-7 cursor-pointer hover:bg-gray-50 transition duration-200">
                                <AddressCard index={index}/>
                                {/* <Button sx={{mt:2, ml:0.5, bgcolor: "rgb(145,85,253)"}} size="large" variant='contained'>Deliver Here</Button> */}
                            </div>
                        )
                    }
                    </div>
                </Box>
               
            </Grid>

            <Grid item xs={12} lg={7}>
                <Box className="border rounded-s-md shadow-md p-5">
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            
                            <Grid item xs={12} sm={6}>
                                
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    fullWidth
                                    autoComplete="given-name"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    fullWidth
                                    autoComplete="given-name"
                                />
                            </Grid>

                            <Grid item xs={12} >
                                
                                <TextField
                                    required
                                    id="address"
                                    name="address"
                                    label="Address"
                                    fullWidth
                                    autoComplete="given-name"
                                    multiline
                                    rows={4}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete="given-name"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                
                                <TextField
                                    required
                                    id="state"
                                    name="state"
                                    label="State/Province/Region"
                                    fullWidth
                                    autoComplete="given-name"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip/ Postal Code"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                
                                <TextField
                                    required
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    fullWidth
                                    autoComplete="tel"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                               <Button sx={{mt:2, py: 1.5, bgcolor: "rgb(145,85,253)"} } size="large" variant='contained' type='submit'>Deliver Here</Button>
                            </Grid>

                        </Grid>
                    </form>
                </Box>
            </Grid>
            
        </Grid>
    )
}

export default DeliveryAddressForm;