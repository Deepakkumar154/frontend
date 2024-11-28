import React from "react";
import {Button, Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

export const Logout = ({open, handleClose}: { open: boolean; handleClose: () => void }) => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload();
        handleClose(); // Close the dialog
    };

    const handleCancel = () => {
        handleClose(); // Close the dialog
    };

    return (
        <Dialog open={open} handler={handleCancel}>
            <DialogHeader>Logout</DialogHeader>
            <DialogBody>
                Are you sure you want to logout?
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={handleCancel}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleConfirm}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
