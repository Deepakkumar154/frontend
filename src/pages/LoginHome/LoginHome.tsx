import React, {FC, useContext, useEffect, useState} from "react";
import {Header} from "../../components/Header/Header.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";
import {UserContext, UserContextType} from "../../context/UserContextProvider.tsx";
import {User} from "../../Modal/User.ts";
import {Button, Card, CardBody, Typography} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";

interface LoginHomeProps {
}

export const LoginHome: FC<LoginHomeProps> = () => {
    const {user, setUser} = useContext(UserContext) as UserContextType;
    const [currentUser, setCurrentUser] = useState<User>({email: '', firstName: '', lastName: ''});
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            let currentUser: User = {
                email: foundUser.email,
                firstName: foundUser.firstName,
                lastName: foundUser.lastName
            }
            setUser(currentUser);
            setCurrentUser(currentUser);
        }
    }, []);

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    const goToAddTrip = () => {
        navigate("/add-trip");
    }

    return (
        <>
            <Header/>
            {currentUser.email == '' || currentUser.email == null || currentUser.email == undefined
                ?
                <div>Please Login in!</div>
                : <>

                    <div className='lg:items-center bg-gray-100 container mx-auto'>
                        <div className="relative bg-cover bg-no-repeat h-96 w-full py-5"
                             style={{backgroundImage: `url(src/assets/bg-image1.jpg)`}}>
                            <p className='lg:text-3xl text-2xl my-3'>Hello, {currentUser.firstName}</p>
                            <p className='font-bold lg:text-5xl text-3xl'>Welcome to TrgaoIt!</p>
                            <p className='lg:text-2xl text-xl p-2'>As a partner, you can showcase your trips to
                                travelers
                                nationwide</p>
                            <p className='lg:text-2xl text-xl '>and grow your earnings.</p>
                            <Button className='w-4/5 lg:w-auto my-5 lg:mx-auto' onClick={() => goToAddTrip()}>Add
                                Trip</Button>
                        </div>
                        <hr/>

                        {/*Steps to get started*/}
                        <div className="py-5 my-10 mx-auto justify-center items-center">
                            <p className='font-bold lg:text-5xl text-3xl'>Steps to add trip</p>
                            <div className='flex flex-col lg:flex lg:flex-row justify-center items-center lg:gap-4'>
                                <Card className="mt-6 w-96">
                                    <CardBody>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="mb-4 h-12 w-12 text-gray-900">
                                            <path fill-rule="evenodd"
                                                  d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                                                  clip-rule="evenodd"/>
                                            <path fill-rule="evenodd"
                                                  d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                                                  clip-rule="evenodd"/>
                                        </svg>

                                        <Typography variant="h5" color="blue-gray" className="mb-2">
                                            Step1: Enter Trip Details
                                        </Typography>
                                        <Typography>
                                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                                            follow my dreams and inspire others.
                                        </Typography>
                                    </CardBody>
                                </Card>
                                <Card className="mt-6 w-96">
                                    <CardBody>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="mb-4 h-12 w-12 text-gray-900">
                                            <path
                                                d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"/>
                                        </svg>

                                        <Typography variant="h5" color="blue-gray" className="mb-2">
                                            Step 2: Create Your Itinerary
                                        </Typography>
                                        <Typography>
                                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                                            follow my dreams and inspire others.
                                        </Typography>
                                    </CardBody>
                                </Card>
                                <Card className="mt-6 w-96">
                                    <CardBody>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="mb-4 h-12 w-12 text-gray-900">
                                            <path fill-rule="evenodd"
                                                  d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                                                  clip-rule="evenodd"/>
                                        </svg>

                                        <Typography variant="h5" color="blue-gray" className="mb-2">
                                            Step 3: Relax and Await Bookings
                                        </Typography>
                                        <Typography>
                                            Because it&apos;s about motivating the doers. Because I&apos;m here to
                                            follow my dreams and inspire others.
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>

                </>
            }
            <Footer></Footer>
        </>
    )
}
