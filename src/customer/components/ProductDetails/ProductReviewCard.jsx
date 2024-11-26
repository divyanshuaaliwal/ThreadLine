import { Avatar, Box, Rating, Typography, LinearProgress } from '@mui/material';
import React from 'react';

const ProductReviewCard = () => {
    return (
        <Box className="space-y-3 p-4 border border-gray-200 rounded-lg shadow-sm">

            <Box display="flex" alignItems="flex-start" flexWrap="wrap" gap={2}>
                
                {/* Avatar Section */}
                <Box flexShrink={0}>
                    <Avatar
                        className="text-white"
                        sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
                    >
                        AK
                    </Avatar>
                </Box>

                {/* Review Content Section */}
                <Box flex="1" minWidth={0}>
                    <Box className="space-y-2">
                        <div>
                            <Typography variant="h6" className="font-semibold text-lg">
                                Devendra Prajapat
                            </Typography>
                            <Typography variant="body2" className="opacity-80 text-sm">
                                April 5, 2024
                            </Typography>
                        </div>
                        <Rating value={4.5} precision={0.5} readOnly />
                        <Typography variant="body2" className="text-sm md:text-base">
                            Nice product, I love this shirt. The fabric is soft, and the fit is perfect. Definitely worth the price!
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductReviewCard;