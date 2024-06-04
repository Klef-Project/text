import React, { ReactNode } from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const Info = (props: any) => {
    return(
        <>
            <div className="m-1 pl-20 pt-6 relative border-2 border-green-800 rounded-3xl bg-green-50 text-lg">
                <div className="m-0 p-2 pl-5 top-0 left-0 absolute">
                    <div className="flex border-b-2 border-green-800 align-middle">
                        <InfoOutlinedIcon sx={{ fontSize: 28}} className="text-green-900" />
                        <p className="m-0 p-0">Info:</p>
                    </div>
                </div>
                {props.children}
            </div>
        </>
    )
}