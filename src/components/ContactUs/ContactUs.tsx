import {Header} from "../Header/Header.tsx";
import React from "react";
import {Footer} from "../Footer/Footer.tsx";

export const ContactUs = () => {
    return (
        <>
            <Header/>
            <div className='lg:flex lg:py-24 py-2 bg-cover bg-no-repeat' style={{backgroundImage: `url(src/assets/bg-image1.jpg)`}}>
                <div className='lg:w-full lg:px-48 px-6 py-2 font-bold'>
                    <p className='text-4xl lg:py-10 py-2'>Have any questions? We're here to help!</p>
                    <p className='text-2xl'>Contact us at:</p>
                    <div className='flex justify-center py-2 text-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="size-6">
                            <path fill-rule="evenodd"
                                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                  clip-rule="evenodd"/>
                        </svg>
                        <p className='ml-2'>Phone: +1 (555) 123-4567</p>
                    </div>
                    <div className='flex justify-center text-2xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="size-6">
                            <path
                                d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                            <path
                                d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
                        </svg>
                        <p className='ml-2'>Email: sample@gmail.com</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
