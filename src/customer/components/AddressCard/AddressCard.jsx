import { Button } from '@mui/material';
import React from 'react';

const AddressCard = ({index}) => {
    return (
        <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:gap-8">
                
                <div className="flex-1">
                    <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[12px] font-medium text-white">
                        {`Address ${index + 1}`}
                    </strong>

                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                        <p className="hover:underline">Raam Kapoor</p>
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                        Mumbai, gokul dham market, 40001.
                    </p>

                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                        <div className="flex items-center gap-1 text-gray-500">
                            <p className="text-xs font-medium">Ph :</p>
                            <p className="text-xs font-medium">9167459820</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center sm:h-auto mt-4 sm:mt-0">
                    <Button size="large" variant="contained" sx={{ backgroundColor: "rgb(145,85,253)", "&:hover": { backgroundColor: "rgb(125,70,223)" }}}>
                        Deliver Here
                    </Button>
                </div>

            </div>
        </article>

    );
};

export default AddressCard;
