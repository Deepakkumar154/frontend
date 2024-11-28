import React, {FC, useContext, useState} from "react";
import {Button, Card, CardBody, CardFooter, Dialog, IconButton, Input, Typography,} from "@material-tailwind/react";
import {LoginContext, LoginContextType} from "../../context/LoginContextProvider.tsx";
import {loginUser} from "../../api/auth.ts";
import {User} from "../../Modal/User.ts";
import {UserContext, UserContextType} from "../../context/UserContextProvider.tsx";
import {useNavigate} from 'react-router-dom';
import {XMarkIcon} from "@heroicons/react/16/solid";

interface LoginProps {
}

export const Login: FC<LoginProps> = () => {
    const {openLoginPanel, setOpenLoginPanel} = useContext(LoginContext) as LoginContextType;
    const {user, setUser} = useContext(UserContext) as UserContextType;
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [hasError, setHasError] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpenLoginPanel(!openLoginPanel);
    }

    const login = () => {
        loginUser(email, password)
            .then((response) => {
                if (response.message) {
                    throw new Error(response.message);
                }
                let user: User = {
                    id: response.id,
                    email: response.email,
                    firstName: response.firstName,
                    lastName: response.lastName
                }
                localStorage.setItem("user", JSON.stringify(response));
                setUser(user);
                handleOpen();
                navigate("home");
            }).catch((e) => {
            console.log("response: ", e);
            setHasError(true);
        })
    }

    const updateEmail = (event: any) => {
        setHasError(false);
        setEmail(event.target.value);
    }

    const updatePassword = (event: any) => {
        setHasError(false);
        setPassword(event.target.value);
    }

    return (
        <Dialog
            size="xs"
            open={openLoginPanel}
            handler={handleOpen}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                    <Typography variant="h4" color="blue-gray">
                        Sign In
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="text"
                        className="!absolute right-3.5 top-3.5"
                        onClick={handleOpen}
                    >
                        <XMarkIcon className="h-4 w-4 stroke-2"/>
                    </IconButton>
                    <Typography
                        className="mb-3 font-normal"
                        variant="paragraph"
                        color="gray"
                    >
                        Enter your email and password to Sign In.
                    </Typography>
                    <Typography className="-mb-2" variant="h6">
                        Your Email
                    </Typography>
                    <Input label="Email" size="lg" onChange={() => updateEmail(event)}/>
                    <Typography className="-mb-2" variant="h6">
                        Your Password
                    </Typography>
                    <Input label="Password" type="password" size="lg" onChange={() => updatePassword(event)}/>
                </CardBody>
                <CardFooter className="pt-0">
                    {hasError && <div className="text-red-500 text-center pb-2 font-bold">Email id or password is
                        incorrect</div>}
                    <Button variant="gradient" onClick={() => login()} fullWidth>
                        Sign In
                    </Button>
                    <Typography variant="small" className="mt-4 flex justify-center">
                        Don&apos;t have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold"
                            onClick={handleOpen}
                        >
                            Sign up
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </Dialog>
    )
}
