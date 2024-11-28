import React, {FC} from "react";
import {Alert} from "@material-tailwind/react";

function SuccessIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
            <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
            />
        </svg>
    )
}

function FailureIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clip-rule="evenodd"/>
        </svg>
    )
}

interface AlertComponentProps {
    isSuccess: boolean;
    open: boolean;
    setOpen: (des: boolean) => void;
    message?: string
}

export const AlertComponent: FC<AlertComponentProps> = ({isSuccess, open, setOpen, message}) => {
    const closeAlert = () => {
        setOpen(false);
    }

    return (
        <>
            <div className="my-4 flex justify-center fixed w-96 right-2 top-3/4 z-[99999]">
                <Alert
                    open={open}
                    className={"rounded-none border-l-4 font-medium text-[#2ec946] w-3/5 bg-white" + (isSuccess ? " border-green-500 bg-green-500/10 text-green-500" : " border-red-500 bg-red-900/10 text-red-500")}
                    icon={isSuccess ? <SuccessIcon/> : <FailureIcon/>}
                    onClose={closeAlert}
                >
                    <p>{message}</p>
                    {/*{isSuccess ?*/}
                    {/*    <p>{message ? message : "Trip saved successfully"} </p> :*/}
                    {/*    <p>Failed to save the trip</p>*/}
                    {/*}*/}
                </Alert>
            </div>
        </>
    );
}
