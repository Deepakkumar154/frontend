import React, {useContext} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import {Trip} from "./pages/Trip/Trip.tsx";
import {Home} from "./pages/Home/Home.tsx";
import {LoginHome} from "./pages/LoginHome/LoginHome.tsx";
import {AddTrip} from "./pages/AddTrip/AddTrip.tsx";
import {TripContextProvider} from "./context/TripContextProvider.tsx";
import {Policy} from "./components/Policy/Policy.tsx";
import {ContactUs} from "./components/ContactUs/ContactUs.tsx";
import {TripList} from "./components/TripList/TripList.tsx";
import {AboutUs} from "./components/AboutUs/AboutUs.tsx";
import {Login} from "./components/Login/Login.tsx";
import {SignUp} from "./components/SignUp/SignUp.tsx";
import {AlertComponent} from "./components/Alert/AlertComponent.tsx";
import {AlertContext, AlertContextType} from "./context/AlertContextProvider.tsx";

function App() {
    const {isSuccess, open, setOpen, setMessage, message} = useContext(AlertContext) as AlertContextType;
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="home" element={<LoginHome/>}/>
                <Route path="trips" element={<Trip/>}/>
                <Route path="my-trips" element={<TripList/>}/>
                <Route path="policy" element={<Policy/>}></Route>
                <Route path="about-us" element={<AboutUs/>}></Route>
                <Route path="contact-us" element={<ContactUs/>}></Route>
                <Route path="add-trip" element={
                    <TripContextProvider>
                        <AddTrip/>
                    </TripContextProvider>
                }/>
            </Routes>
            <Login></Login>
            <SignUp></SignUp>
            {open &&
                <AlertComponent isSuccess={isSuccess} open={open} setOpen={setOpen} message={message}></AlertComponent>}
        </>

    )
}

export default App
