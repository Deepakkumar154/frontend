import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";
import React from "react";
import {Accordion, AccordionBody, AccordionHeader,} from "@material-tailwind/react";

export const Policy = () => {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Header/>
            <div className="lg:items-center container mx-auto text-justify py-5">
                <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                    <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className={`border-b-0 transition-colors ${
                            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                        }`}
                    >
                        What is Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base font-normal">
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
                    <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className={`border-b-0 transition-colors ${
                            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                        }`}
                    >
                        How to use Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base font-normal">
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4">
                    <AccordionHeader
                        onClick={() => handleOpen(3)}
                        className={`border-b-0 transition-colors ${
                            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                        }`}
                    >
                        What can I do with Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className="pt-0 text-base font-normal">
                        We&apos;re not always in the position that we want to be at. We&apos;re constantly
                        growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                        ourselves and actualize our dreams.
                    </AccordionBody>
                </Accordion>
            </div>
            <Footer/>
        </>
    )
}
