import React, {FC} from "react";
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {Typography} from "@material-tailwind/react";

interface AboutUsProps {
}

export const AboutUs: FC<AboutUsProps> = ({}) => {
    return (
        <>
            <Header/>
            <div className="lg:items-center container mx-auto text-center py-5 bg-cover"
                 style={{backgroundImage: `url(src/assets/bg-image1.jpg)`}}>
                <Typography variant="h4">Welcome to TragoIt – Your Gateway to Unforgettable Journeys!</Typography>
                <div className='px-5'>
                    <Typography className="py-5 text-justify text-2xl">At TragoIt, we are a dedicated team of travel
                        enthusiasts with a passion
                        for
                        crafting personalized travel experiences that connect you to the world’s most stunning
                        destinations.
                        With years of expertise and an extensive network of global travel professionals, we specialize
                        in
                        curating itineraries that inspire adventure, discovery, and relaxation.</Typography>
                    <Typography className="py-5 text-justify text-2xl">Whether you’re seeking a peaceful retreat or a
                        thrilling escape, we provide
                        tailored solutions to meet your unique travel desires. Our deep understanding of diverse
                        cultures
                        and unwavering commitment to excellence ensure that every journey with us is seamless,
                        enriching,
                        and memorable.</Typography>
                    <Typography className="py-5 text-justify text-2xl">Join us at TragoIt, where your next adventure is
                        expertly crafted, leaving you with
                        cherished memories and a lifelong passion for exploration.</Typography>
                </div>
            </div>
            <Footer/>
        </>
    );
}
