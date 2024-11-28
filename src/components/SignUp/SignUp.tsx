import React, {FC, useContext, useState} from "react";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import {useNavigate} from 'react-router-dom';
import {SignUpContext, SignUpContextType} from "../../context/SignUpContextProvider.tsx";
import {AlertContext, AlertContextType} from "../../context/AlertContextProvider.tsx";
import {XMarkIcon} from "@heroicons/react/16/solid";
import {Textarea} from "@headlessui/react";
import {UserAgent} from "../../Modal/UserAgent.ts";
import {TextBox} from "../TextBox/TextBox.tsx";
import {Dropdown} from "../Dropdown/Dropdown.tsx";
import {signUpUser} from "../../api/auth.ts";

interface SignUpProps {
}

export const SignUp: FC<SignUpProps> = () => {
    const {openSignUpPanel, setOpenSignUpPanel} = useContext(SignUpContext) as SignUpContextType;
    const {setOpen, setIsSuccess, setMessage} = useContext(AlertContext) as AlertContextType;
    let initialState = {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        company: '',
        foundOn: '',
        address: '',
        govtIdType: '',
        govtId: '',
        gstNumber: '',
        contact: ''
    };
    const [userDetail, setUserDetail] = useState<UserAgent>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleOpen = () => {
        setOpenSignUpPanel(!openSignUpPanel);
    }

    const signUp = () => {
        console.log("userDetails: ", userDetail);
        signUpUser(userDetail)
            .then((response) => {
                if (response.message) {
                    throw new Error(response.message);
                }
                setOpen(true);
                setIsSuccess(true);
                setMessage("Signup successful, Please Login!!")
                setUserDetail(initialState);
                handleOpen();
                navigate("/");
            }).catch((e) => {
            console.log("response: ", e);
            setHasError(true);
            setOpen(true);
            setIsSuccess(false);
            setMessage("Error signing up, Please try again later!!");
            setUserDetail(initialState);
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setUserDetail((userAgent: UserAgent) => ({
            ...userAgent,
            [name]: value,
        }));
    };

    const handleOptionChange = (name: string, value: string) => {
        setUserDetail((userAgent: UserAgent) => ({
            ...userAgent,
            [name]: value,
        }));
    };

    return (
        <>
            <Dialog size="sm" open={openSignUpPanel} handler={handleOpen} className="p-4">
                <DialogHeader className="relative m-0 block">
                    <Typography variant="h4" color="blue-gray">
                        Sign Up
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="text"
                        className="!absolute right-3.5 top-3.5"
                        onClick={handleOpen}
                    >
                        <XMarkIcon className="h-4 w-4 stroke-2"/>
                    </IconButton>
                </DialogHeader>
                <DialogBody className="space-y-4 pb-6 h-[38rem] lg:h-[42rem] overflow-scroll">
                    <div className="flex gap-4 lg:flex-row flex-col">
                        <TextBox name="firstName" label="First Name" placeholder="First Name"
                                 value={userDetail?.firstName}
                                 handleChange={handleChange}></TextBox>
                        <TextBox name="lastName" label="Last Name" placeholder="Last Name"
                                 value={userDetail?.lastName}
                                 handleChange={handleChange}></TextBox>
                    </div>
                    <TextBox name="email" label="Email" placeholder="Email"
                             value={userDetail?.email}
                             handleChange={handleChange}></TextBox>
                    <div className="flex gap-4 lg:flex-row flex-col">
                        <TextBox name="password" label="Password" placeholder="Password"
                                 value={userDetail?.password} type="password"
                                 handleChange={handleChange}></TextBox>
                        {/*<TextBox name="confirmPassword" label="Confirm Password" placeholder="Confirm Password"*/}
                        {/*         value={userDetail?.confirmPassword}*/}
                        {/*         handleChange={handleChange}></TextBox>*/}
                    </div>
                    {/*{hasPasswordMismatchError && <div className="text-red-500 text-center font-bold">Password doesn't match</div>}*/}

                    <div className="flex gap-4 lg:flex-row flex-col">
                        <TextBox name="company" label="Company" placeholder="Company"
                                 value={userDetail?.company}
                                 handleChange={handleChange}></TextBox>
                        <TextBox name="foundOn" label="Found On" placeholder="Found On"
                                 value={userDetail?.foundOn}
                                 handleChange={handleChange}></TextBox>
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Address
                        </Typography>
                        <Textarea
                            rows={2}
                            name="address"
                            value={userDetail?.address}
                            placeholder="Address"
                            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                            labelProps={{
                                className: "hidden",
                            }}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex gap-4 lg:flex-row flex-col">
                        <Dropdown label="Govt Id Type" name="govtIdType"
                                  options={["AdharCard", "License", "VoterId"]}
                                  value={userDetail?.govtIdType}
                                  handleOptionChange={handleOptionChange}></Dropdown>
                        <TextBox name="govtId" label="Govt ID" placeholder="Govt ID"
                                 value={userDetail?.govtId}
                                 handleChange={handleChange}></TextBox>
                    </div>
                    <div className="flex gap-4 lg:flex-row flex-col">
                        <TextBox name="gstNumber" label="Gst No" placeholder="Gst No"
                                 value={userDetail?.gstNumber}
                                 handleChange={handleChange}></TextBox>
                        <TextBox name="contact" label="Contact" placeholder="Contact"
                                 value={userDetail?.contact}
                                 handleChange={handleChange}></TextBox>
                    </div>
                </DialogBody>
                <DialogFooter className="justify-center">
                    <Button className="ml-auto w-full" onClick={signUp}>
                        Sign Up
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}
