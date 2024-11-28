import React, {FC, useContext, useEffect, useState} from "react";
import logo from "../../assets/traGo-logo.jpeg"
import {
    Avatar,
    Button,
    IconButton,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    MobileNav,
    Navbar,
    Typography,
} from "@material-tailwind/react";
import {InboxArrowDownIcon, PowerIcon, UserCircleIcon,} from "@heroicons/react/24/solid";
import {LoginContext, LoginContextType} from "../../context/LoginContextProvider.tsx";
import {UserContext, UserContextType} from "../../context/UserContextProvider.tsx";
import {User} from "../../Modal/User.ts";
import {NavLink, useNavigate} from "react-router-dom";
import {Logout} from "../Logout/logout.tsx";
import {SignUpContext, SignUpContextType} from "../../context/SignUpContextProvider.tsx";

interface HeaderProps {
}

export const Header: FC<HeaderProps> = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const {user, setUser} = useContext(UserContext) as UserContextType;
    const {openLoginPanel, setOpenLoginPanel} = useContext(LoginContext) as LoginContextType;
    const {openSignUpPanel, setOpenSignUpPanel} = useContext(SignUpContext) as SignUpContextType;
    const [currentUser, setCurrentUser] = useState<User>({id: '', email: '', firstName: '', lastName: ''});
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [open, setOpen] = useState(false);
    const [homePage, setHomePage] = useState("/");
    let navigate = useNavigate();

    const closeMenu = () => setIsMenuOpen(false);
    const handleOpen = () => {
        setOpenLoginPanel(!openLoginPanel);
    }

    const handleSignUpOpen = () => {
        setOpenSignUpPanel(!openSignUpPanel);
    }

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log("loggedInUser: ", loggedInUser);
        if (loggedInUser && JSON.parse(loggedInUser).email !== '') {
            const foundUser = JSON.parse(loggedInUser);
            let currentUser: User = {
                email: foundUser.email,
                firstName: foundUser.firstName,
                lastName: foundUser.lastName
            }
            setUser(currentUser);
            setCurrentUser(currentUser);
            setHomePage("/home");
        }
    }, []);

    useEffect(() => {
        console.log('user: ', user);
        setCurrentUser(user);
    }, [user]);


    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink className="flex items-center" to={"/about-us"}>
                    About Us
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink className="flex items-center" to={"/policy"}>
                    Policy
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink className="flex items-center" to={"/contact-us"}>
                    Contact Us
                </NavLink>
            </Typography>
        </ul>
    );

    const profileMenuItems = [
        {
            label: "My Trips",
            icon: InboxArrowDownIcon,
            goTo: () => {
                navigate("/my-trips")
            }
        },
        {
            label: "Sign Out",
            icon: PowerIcon,
            goTo: () => {
                handleOpenDialog();
            }
        },
    ];

    return (
        <>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <NavLink to={homePage}>
                        <div className="flex lg:flex-1 cursor-pointer">
                            <span className="sr-only">TraGo</span>
                            <img alt=""
                                 src={logo}
                                 className="h-20 w-auto"/>
                        </div>
                    </NavLink>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        {currentUser.email == '' || currentUser.email == null || currentUser.email == undefined ?
                            <div className="flex items-center gap-x-1">
                                <Button
                                    variant="text"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                    onClick={handleOpen}
                                >
                                    <span>Log In</span>
                                </Button>
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                    onClick={handleSignUpOpen}
                                >
                                    <span>Sign Up</span>
                                </Button>
                            </div>
                            :
                            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                                <MenuHandler>
                                    <Button
                                        variant="text"
                                        color="blue-gray"
                                        className="flex items-center rounded-full p-0"
                                    >
                                        <Avatar
                                            variant="circular"
                                            size="md"
                                            alt="tania andrew"
                                            withBorder={true}
                                            color="blue-gray"
                                            className=" p-0.5"
                                            src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        />
                                    </Button>
                                </MenuHandler>
                                <MenuList className="p-1">
                                    {profileMenuItems.map(({label, icon, goTo}, key) => {
                                        const isLastItem = key === profileMenuItems.length - 1;
                                        return (
                                            <MenuItem
                                                key={label}
                                                onClick={goTo}
                                                className={`flex items-center gap-2 rounded ${
                                                    isLastItem
                                                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                                        : ""
                                                }`}
                                            >
                                                {React.createElement(icon, {
                                                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                                    strokeWidth: 2,
                                                })}
                                                <Typography
                                                    as="span"
                                                    variant="small"
                                                    className="font-normal"
                                                    color={isLastItem ? "red" : "inherit"}
                                                >
                                                    {label}
                                                </Typography>
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </Menu>
                        }
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    {currentUser.email === ''
                        ? <div className="flex items-center gap-x-1">
                            <Button fullWidth variant="text" size="sm" className="">
                                <span>Log In</span>
                            </Button>
                            <Button fullWidth variant="gradient" size="sm" className="">
                                <span>Sign in</span>
                            </Button>
                        </div>
                        : <div>helllooooo</div>
                    }
                </MobileNav>
            </Navbar>
            <Logout open={open} handleClose={handleCloseDialog}/>
        </>
    )
}
