import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react'

const ProductReviewCard = () => {

    return (
        <div>
            <Grid container spacing={2} gap={3}>

                <Grid item xs={1}>
                    <Box className='space-y-5'>
                        <Avatar className='text-white' sx={{width:56, height:56, bgcolor:"#9155fd"}}>DH</Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className="font-semibold text-lg">Devendra Prajapat</p>
                            <p className='opacity-80'>April 5, 2024</p>
                        </div>
                    </div>


                    <Rating  value={4.5} precision={0.5} name='half-rating' readOnly></Rating>
                    <p>Nice product, I love this shirt.</p>
                </Grid>



             </Grid>
        </div>
    )
}

export default ProductReviewCard;