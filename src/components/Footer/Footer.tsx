import React from "react";
import logo from "../../assets/traGo-logo.jpeg"
import {Typography} from "@material-tailwind/react";
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="w-full bg-white p-8 border-t border-blue-gray-50">
            <div
                className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                <img src={logo} alt="logo-ct" className="w-10"/>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <NavLink className="flex items-center" to={"/about-us"}>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                About Us
                            </Typography>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="flex items-center" to={"/policy"}>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Policy
                            </Typography>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="flex items-center" to={"/contact-us"}>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contact Us
                            </Typography>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50"/>
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2024 TragoIt. All Rights Reserved.
            </Typography>
        </footer>
    );
}
