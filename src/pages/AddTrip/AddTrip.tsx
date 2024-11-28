import React, {FC, useContext, useEffect, useState} from "react";
import {Header} from "../../components/Header/Header.tsx";
import {UserContext, UserContextType} from "../../context/UserContextProvider.tsx";
import {User} from "../../Modal/User.ts";
import {Button, Card,} from "@material-tailwind/react";
import {Activity, PickupPoint, Schedule, Stay, Trip} from "../../Modal/Trip.ts";
import {format} from "date-fns";
import {TripHeader} from "../../components/TripHeader/TripHeader.tsx";
import {StepperWithSteps} from "../../components/Stepper/Stepper.tsx";
import {TextBox} from "../../components/TextBox/TextBox.tsx";
import {Date} from "../../components/Date/Date.tsx";
import {Dropdown} from "../../components/Dropdown/Dropdown.tsx";
import {ActivityComponent} from "../../components/Activity/ActivityComponent.tsx";
import {useTrip} from "../../hook/useTrip.ts";
import {Footer} from "../../components/Footer/Footer.tsx";
import {PickupPointComponent} from "../../components/PickupPoint/PickupPoint.tsx";
import {ScheduleComponent} from "../../components/Schedule/Schedule.tsx";
import {SaveTrip} from "../../components/SaveTrip/SaveTrip.tsx";
import {AlertComponent} from "../../components/Alert/AlertComponent.tsx";

export const AddTrip: FC = () => {
    const {user, setUser} = useContext(UserContext) as UserContextType;
    const {trip, setTrip, resetTrip} = useTrip();
    const [currentUser, setCurrentUser] = useState<User>({email: '', firstName: '', lastName: ''});
    const [startDate, setStartDate] = React.useState(trip?.startDate);
    const [endDate, setEndDate] = React.useState(trip?.endDate);
    const [stay, setStay] = useState<Stay[]>([]);

    const [header, setHeader] = React.useState('Enter Trip Details');
    const [activeStep, setActiveStep] = React.useState(0);
    const [isLastStep, setIsLastStep] = React.useState(false);
    const [isFirstStep, setIsFirstStep] = React.useState(false);

    const [saveTripSuccess, setSaveTripSuccess] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [AlertMessage, setAlertMessage] = React.useState<string>('');

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const dayOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

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
        trip?.itinerary.schedules.forEach(x => {
            const stayExists = stay.findIndex(s => s.hotelName == x.stay.hotelName);
            if (stayExists == -1) {
                setStay((prevState) => {
                    return [...prevState, x.stay];
                });
            }
        })
    }, []);

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    useEffect(() => {
        setTrip((prevTrip: Trip) => ({
            ...prevTrip,
            startDate: startDate ? format(startDate, 'MM/dd/yyyy') : '',
        }))
    }, [startDate])

    useEffect(() => {
        setTrip((prevTrip: Trip) => ({
            ...prevTrip,
            endDate: endDate ? format(endDate, 'MM/dd/yyyy') : '',
        }))
    }, [endDate])

    useEffect(() => {
        if (isStepEqualTo(0)) {
            setHeader('Enter Trip Details');
        } else if (isStepEqualTo(1)) {
            setHeader('Create Your Itinerary');
        } else if (isStepEqualTo(2)) {
            setHeader('Review and Save Your Trip');
        }
    }, [activeStep]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setTrip((prevTrip: Trip) => ({
            ...prevTrip,
            [name]: value, // Dynamically update the specific field
        }));
    };

    const handleItineraryChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setTrip((prev: Trip) => ({
            ...prev,
            itinerary: {
                ...prev.itinerary,
                [name]: value
            }
        }));
    };

    const setActivities = (activity: Activity[]) => {
        setTrip((prev: Trip) => ({
            ...prev,
            itinerary: {
                ...prev.itinerary,
                activities: activity
            }
        }));
    };

    const setPickupPoint = (pickupPoint: PickupPoint[]) => {
        setTrip((prev: Trip) => ({
            ...prev,
            pickupPoint: pickupPoint
        }));
    };

    const setSchedules = (schedules: Schedule[]) => {
        setTrip((prev: Trip) => ({
            ...prev,
            itinerary: {
                ...prev.itinerary,
                schedules: schedules
            }
        }));

        schedules.map(x => {
            let updateStay: Stay[] = [...stay, x.stay];
            setStay(updateStay);
        })
    };

    const handleOptionChange = (name: string, value: string) => {
        setTrip((prevTrip: Trip) => ({
            ...prevTrip,
            [name]: value, // Dynamically update the specific field
        }));
    };

    function isStepEqualTo(val: any) {
        return activeStep === val;
    }

    return (
        <>
            <Header/>
            {currentUser.email == '' || currentUser.email == null || currentUser.email == undefined
                ?
                <div>Please Login in!</div>
                :
                <div className='lg:items-center container mx-auto text-justify'>
                    <div className="w-full lg:px-24 lg:py-20 px-5 py-5">
                        <StepperWithSteps activeStep={activeStep} setActiveStep={setActiveStep}
                                          setIsLastStep={setIsLastStep}
                                          setIsFirstStep={setIsFirstStep}></StepperWithSteps>
                    </div>
                    <Card className="w-full max-w-[24rem] lg:max-w-none p-5">
                        <TripHeader header={header}></TripHeader>

                        {/*Trip Details*/}
                        {
                            isStepEqualTo(0) &&
                            <div className="flex flex-col mt-8">
                                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                    <TextBox name="description" label="Description" placeholder="Goa Vacation"
                                             value={trip?.description}
                                             handleChange={handleChange}></TextBox>
                                    <TextBox name="origin" label="Origin" placeholder="Delhi" value={trip?.origin}
                                             handleChange={handleChange}></TextBox>
                                    <TextBox name="destination" label="Destination" placeholder="Goa"
                                             value={trip?.destination}
                                             handleChange={handleChange}></TextBox>
                                </div>
                                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                    <Date label="Start Date" placeholder="Select a Date" date={trip?.startDate}
                                          setDate={setStartDate}></Date>
                                    <Date label="End Date" placeholder="Select a Date" date={trip?.endDate}
                                          setDate={setEndDate}></Date>
                                </div>
                                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                    <Dropdown label="No of Days" name="noOfDays" options={dayOptions}
                                              value={trip?.noOfDays.toString()}
                                              handleOptionChange={handleOptionChange}></Dropdown>
                                    <Dropdown label="No of Nights" name="noOfNights" options={dayOptions}
                                              value={trip?.noOfNights.toString()}
                                              handleOptionChange={handleOptionChange}></Dropdown>
                                </div>
                                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                    <Dropdown label="Trip Type" name="type" options={["Group", "Personal"]}
                                              value={trip?.type}
                                              handleOptionChange={handleOptionChange}></Dropdown>
                                    <Dropdown label="Category" name="category"
                                              options={["Wildlife", "Pilgrim", "Weekend", "Trek", "Wildlife"]}
                                              value={trip?.category}
                                              handleOptionChange={handleOptionChange}></Dropdown>
                                </div>
                                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                    <TextBox label="No of Travellers" name="noOfTravelers" placeholder="1"
                                             value={trip?.noOfTravelers.toString()}
                                             handleChange={handleChange}></TextBox>

                                </div>
                                <PickupPointComponent setPickupPoints={setPickupPoint}></PickupPointComponent>
                            </div>
                        }

                        {/*Create Your Itinerary*/}
                        {
                            isStepEqualTo(1) &&
                            <div className="mt-8">
                                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                    <TextBox label="Overview" name="overview" placeholder="Overview of trip"
                                             value={trip?.itinerary.overview}
                                             handleChange={handleItineraryChange}></TextBox>
                                </div>
                                <hr className="my-2"></hr>
                                <ActivityComponent setActivityInTrip={setActivities}></ActivityComponent>
                                <hr className="my-2"></hr>
                                <ScheduleComponent setSchedules={setSchedules}></ScheduleComponent>
                            </div>
                        }

                        {
                            isStepEqualTo(2) &&
                            <SaveTrip setSaveTripSuccess={setSaveTripSuccess} setOpenAlert={setOpenAlert} setAlertMessage={setAlertMessage}></SaveTrip>
                        }
                    </Card>
                    <div className="my-5 mx-5 lg:mx-0 lg:my-5 flex justify-between">
                        <Button onClick={handlePrev} disabled={isFirstStep}>
                            Prev
                        </Button>
                        <Button onClick={handleNext} disabled={isLastStep}>
                            Next
                        </Button>
                    </div>
                </div>
            }
            <AlertComponent isSuccess={saveTripSuccess} open={openAlert} setOpen={setOpenAlert} message={AlertMessage}></AlertComponent>
            <Footer></Footer>
        </>
    )
}
