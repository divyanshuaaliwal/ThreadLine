// import { Grid, Typography, Button } from "@mui/material";
// import Link from '@mui/material/Link';
// import React from "react";

// const Footer = () => {
//     return (

//         <Grid className="bg-black text-white text-center mt-10"
//             container
//             sx={{ bgcolor: "black", color: "white", py: 3 }}
//         >

//             <Grid item xs={12} sm={6} md={3} >
//                 <Typography className="pb-" variant="h6">{' '}Company{' '}</Typography>

//                 <div> <Button className="pb-5" variant="h6">{' '}About{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}Blog{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}Press{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}Jobs{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}Partners{' '}</Button> </div>
//             </Grid>

//             <Grid item xs={12} sm={6} md={3} >
//                 <Typography className="pb-5" variant="h6">{' '}Solutions{' '}</Typography>

//                 <div> <Button className="pb-5" variant="h6">{' '}Marketing{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}Analytics{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}Commerce{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}Insight{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}Support{' '}</Button> </div>

//             </Grid>

//             <Grid item xs={12} sm={6} md={3} >
//                 <Typography className="pb-5" variant="h6">{' '}Documentation{' '}</Typography>

//                 <div> <Button className="pb-5" variant="h6">{' '}Guides{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}API Status{' '}</Button> </div>

//             </Grid>

//             <Grid item xs={12} sm={6} md={3} >
//                 <Typography className="pb-5" variant="h6">{' '}Legal{' '}</Typography>

//                 <div> <Button className="pb-5" variant="h6">{' '}Claim{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}Privacy{' '}</Button> </div>
//                 <div> <Button className="pb-5" variant="h6">{' '}Terms{' '}</Button> </div>

//             </Grid>

//             <Grid className="pt-20" item xs={12}>

//                 <Typography variant="body2" component="p" align="center">
//                     &copy; 2025 My Company. All rights reserved.
//                 </Typography>

//                 <Typography variant="body2" component="p" align="center">
//                 Crafted with passion by FashionHub Team with ❤️.
//                 </Typography>

//                 <Typography variant="body2" component="p" align="center">
//                     Icons made by{' '}
//                     <Link href="https://www.freepik.com" color="inherit" underline="always">
//                         Freepik
//                     </Link>{' '}
//                     from{' '}
//                     <Link href="https://www.flaticon.com/" color="inherit" underline="always">
//                         www.flaticon.com
//                     </Link>
//                 </Typography>
//             </Grid>


//         </Grid>
//     )
// }

// export default Footer;



import React from 'react';
import Logo from "../../../Data/Logo.webp"

const Footer = () => {
    return (
        <footer className="bg-white rounded-sm shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img
                        src={Logo}
                        className="h-11 rounded-full"
                        alt="Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        ThreadLine
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                        <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025 <a href="#" className="hover:underline">ThreadLine™</a>. All Rights Reserved.
                </span>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-1">
                    Crafted with passion by <span className="font-semibold">ThreadLine</span> Team with ❤️
                </span>
            </div>
        </footer>
    );
};

export default Footer;
