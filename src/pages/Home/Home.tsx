import React, {FC, useContext, useEffect, useState} from "react";
import {
    Avatar,
    Button,
    Card,
    CardBody,
    Timeline,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography
} from "@material-tailwind/react";
import {Header} from "../../components/Header/Header.tsx";
import {LoginContext, LoginContextType} from "../../context/LoginContextProvider.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";
import {User} from "../../Modal/User.ts";
import {UserContext, UserContextType} from "../../context/UserContextProvider.tsx";
import {useNavigate} from "react-router-dom";
import {AlertComponent} from "../../components/Alert/AlertComponent.tsx";
import {AlertContext, AlertContextType} from "../../context/AlertContextProvider.tsx";
import {SignUpContext, SignUpContextType} from "../../context/SignUpContextProvider.tsx";

interface HomeProps {
}

export const Home: FC<HomeProps> = () => {
    const {openLoginPanel, setOpenLoginPanel} = useContext(LoginContext) as LoginContextType;
    const {user, setUser} = useContext(UserContext) as UserContextType;
    const [currentUser, setCurrentUser] = useState<User>({id: '', email: '', firstName: '', lastName: ''});
    const {isSuccess, open, setOpen} = useContext(AlertContext) as AlertContextType;
    const {openSignUpPanel, setOpenSignUpPanel} = useContext(SignUpContext) as SignUpContextType;
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            let currentUser: User = {
                id: foundUser.id,
                email: foundUser.email,
                firstName: foundUser.firstName,
                lastName: foundUser.lastName
            }
            setUser(currentUser);
            setCurrentUser(currentUser);
            navigate("/home");
        }
    }, []);

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    const handleOpen = () => {
        setOpenLoginPanel(!openLoginPanel);
    }

    function handleSignUp() {
        setOpenSignUpPanel(!openSignUpPanel);
    }

    return (
        <>
            <Header/>
            <div className='lg:items-center bg-gray-100 container mx-auto'>
                <div className="relative bg-cover bg-no-repeat h-96 w-full py-5"
                     style={{backgroundImage: `url(src/assets/bg-image1.jpg)`}}>
                    <p className='font-bold lg:text-5xl text-3xl'>Partner with TragoIt</p>
                    <p className='lg:text-2xl text-xl my-3'>at no cost for the first 8 months</p>
                    <div
                        className="absolute inset-0 flex flex-col lg:flex lg:flex-row mx-2 lg:mx-auto justify-center items-center gap-4">
                        <Button className='w-full lg:w-auto' onClick={handleSignUp}>Lets get started</Button>
                        <Button className='w-full lg:w-auto bg-white text-black' onClick={handleOpen}>Already a
                            partner</Button>
                    </div>
                </div>

                {/*Steps to get started*/}
                <Card className="lg:w-3/5 py-5 my-10 lg:mx-auto mx-4 justify-center items-center">
                    <p className="font-bold lg:text-5xl text-3xl py-8 text-black">Steps to get Started</p>
                    <div className="lg:w-[32rem] pb-5 px-4">
                        <Timeline>
                            <TimelineItem>
                                <TimelineConnector/>
                                <TimelineHeader className="pb-8">
                                    <TimelineIcon className="p-0">
                                        <Avatar size="sm" src="https://docs.material-tailwind.com/img/team-1.jpg"
                                                alt="user 1" withBorder/>
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        Step 1: Sign Up for Your Account
                                    </Typography>
                                </TimelineHeader>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineConnector/>
                                <TimelineHeader className="pb-8">
                                    <TimelineIcon className="p-0">
                                        <Avatar size="sm" src="https://docs.material-tailwind.com/img/team-2.jpg"
                                                alt="user 2" withBorder/>
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        Step 2: Await Verification Approval
                                    </Typography>
                                </TimelineHeader>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineConnector/>
                                <TimelineHeader className="pb-8">
                                    <TimelineIcon className="p-0">
                                        <Avatar size="sm" src="https://docs.material-tailwind.com/img/team-3.jpg"
                                                alt="user 3" withBorder/>
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        Step 3: Offer Your Trips
                                    </Typography>
                                </TimelineHeader>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineHeader className="pb-8">
                                    <TimelineIcon className="p-0">
                                        <Avatar size="sm" src="https://docs.material-tailwind.com/img/team-3.jpg"
                                                alt="user 3" withBorder/>
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        Step 4: Manage Bookings and Get Paid
                                    </Typography>
                                </TimelineHeader>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </Card>

                {/*Why partner with us?*/}
                <div className="py-5 my-10 mx-auto justify-center items-center">
                    <p className='font-bold lg:text-5xl text-3xl'>Why partner with us?</p>
                    <div className='flex flex-col lg:flex lg:flex-row justify-center items-center lg:gap-4'>
                        <Card className="mt-6 w-96">
                            <CardBody>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mb-4 h-12 w-12 text-gray-900"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"/>
                                </svg>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Group Adventures Made Easy
                                </Typography>
                                <Typography>
                                    Simple, stress-free trip planning for groups, ensuring smooth coordination and a
                                    great experience for everyone.
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-96">
                            <CardBody>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mb-4 h-12 w-12 text-gray-900"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"/>
                                </svg>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Effortless Travel Planning
                                </Typography>
                                <Typography>
                                    Organize trips with ease, removing the stress of details, and providing a smooth,
                                    seamless travel experience from start to finish.
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-96">
                            <CardBody>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="mb-4 h-12 w-12 text-gray-900"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"/>
                                </svg>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Unbeatable Prices
                                </Typography>
                                <Typography>
                                    Offers the best value, ensuring customers get the lowest rates and deals that can't
                                    be matched elsewhere
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}

// 9-4 6-2
