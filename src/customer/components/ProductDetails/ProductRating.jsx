import React from 'react';
import { Box, Grid, LinearProgress, Rating, Typography } from '@mui/material'


const ProductRating = () => {
    return (
        <Grid item xs={12} md={5}>
            <Box className="space-y-3 p-4 border border-gray-200 rounded-lg shadow-sm">
                <Typography variant="h6" className="font-semibold pb-2">Product Rating</Typography>

                <div className="flex items-center space-x-3">
                    <Rating value={4.6} precision={0.5} readOnly />
                    <Typography variant="body2" className="opacity-60">5948 Ratings</Typography>
                </div>

                <Box className="mt-5 space-y-3">
                    {
                        [
                            {label: "Excellent", value: 40, color: "success"}, 
                            {label: "Very Good", value: 30, color: "success"}, 
                            {label: "Good", value: 25, color: "warning"}, 
                            {label: "Average", value: 20, color: "warning"}, 
                            {label: "Poor", value: 15, color: "error"}
                        
                        ].map( (progress, index) => (
                            
                            <Grid container alignItems="center" spacing={2} key={index}>
                                
                                <Grid item xs={4} sm={3}>
                                    <Typography variant="body2">{progress.label}</Typography>
                                </Grid>
                                
                                <Grid item xs={8} sm={9}>
                                    <LinearProgress
                                        sx={{
                                            bgcolor: "#d0d0d0",
                                            borderRadius: 4,
                                            height: 7,
                                        }}
                                        variant="determinate"
                                        value={progress.value}
                                        color={progress.color}
                                    />
                                </Grid>
                            </Grid>
                        ))
                    }
                </Box>
            </Box>
        </Grid>
    )
}

export default ProductRating;