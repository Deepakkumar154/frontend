import React, {FC, useEffect} from "react";
import {TextBox} from "../TextBox/TextBox.tsx";
import {Button, Typography} from "@material-tailwind/react";
import {useTrip} from "../../hook/useTrip.ts";
import {Trip} from "../../Modal/Trip.ts";
import {saveTrip} from "../../api/trip.ts";

interface SaveTripProps {
    setOpenAlert: (des: boolean) => void;
    setSaveTripSuccess: (des: boolean) => void;
    setAlertMessage: (des: string) => void;
}

export const SaveTrip: FC<SaveTripProps> = ({setOpenAlert, setSaveTripSuccess, setAlertMessage}) => {
    const {trip, setTrip, resetTrip} = useTrip();
    const [error, setError] = React.useState<string>("");

    const validateTrip = () => {
        let errorMessage = "";
        if (trip?.description === "" || trip?.description === undefined) {
            errorMessage += "Trip Description is required, ";
        }
        if (trip?.origin === "" || trip?.origin === undefined) {
            errorMessage += "Origin is required, ";
        }
        if (trip?.description === "" || trip?.description === undefined) {
            errorMessage += "Destination is required, ";
        }
        if (trip?.startDate === "" || trip?.startDate === undefined) {
            errorMessage += "Start Date is required, ";
        }
        if (trip?.endDate === "" || trip?.endDate === undefined) {
            errorMessage += "End Date is required, ";
        }
        if (trip?.noOfTravelers === 0 || trip?.noOfTravelers === undefined) {
            errorMessage += "No. of Travelers is required, ";
        }
        if (trip?.type === "" || trip?.type === undefined) {
            errorMessage += "Trip Type is required, ";
        }
        if (trip?.category === "" || trip?.category === undefined) {
            errorMessage += "Trip Category is required, ";
        }
        if (trip?.itinerary === undefined) {
            errorMessage += "Itinerary is required, ";
        }
        if (trip?.pickupPoint === undefined) {
            errorMessage += "Pickup Point is required, ";
        }
        return errorMessage;
    }

    const handleSave = () => {
        console.log("save", trip);
        const validationError = validateTrip();
        console.log("has error: ", validationError);

        if (validationError) {
            setError(validationError);
            return;
        }

        saveTrip(trip).then((res) => {
            if (res.message) {
                throw new Error(res.message);
            }
            console.log("Hello", res);
            console.log("Trip Saved");
            resetTrip();
            setOpenAlert(true);
            setSaveTripSuccess(true);
            setAlertMessage("Trip Saved Successfully!!");
        }).catch((e) => {
            console.log("error", e);
            setOpenAlert(true);
            setSaveTripSuccess(false);
            setAlertMessage("Trip Not Saved, Please Try Again Later!!");

        })
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        setTrip((prev: Trip) => ({
            ...prev,
            "agentId": user.id
        }));
    }, [])

    return (
        <>
            <div className="flex flex-col mt-8">
                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                    <TextBox name="description" label="Description" placeholder="" isDisabled={true}
                             value={trip?.description}></TextBox>
                    <TextBox name="origin" label="Origin" placeholder="" value={trip?.origin}
                             isDisabled={true}></TextBox>
                    <TextBox name="destination" label="" placeholder="Goa"
                             value={trip?.destination} isDisabled={true}></TextBox>
                </div>
                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                    <TextBox name="startdate" label="StartDate" placeholder="" isDisabled={true}
                             value={trip?.startDate}></TextBox>
                    <TextBox name="endDate" label="End Date" placeholder="" isDisabled={true}
                             value={trip?.endDate}></TextBox>
                </div>
                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                    <TextBox name="noOfDays" label="No of Days" placeholder="" isDisabled={true}
                             value={trip?.noOfDays.toString()}></TextBox>
                    <TextBox name="noOfNights" label="No of Nights" placeholder="" isDisabled={true}
                             value={trip?.noOfNights.toString()}></TextBox>
                </div>
                {
                    trip.pickupPoint && <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-bold"
                    >
                        PickPoints
                    </Typography>
                }
                {
                    trip.pickupPoint && trip.pickupPoint.map((point, index) => (
                        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                            <TextBox name="description" label="Description" placeholder="" isDisabled={true}
                                     value={point.location}></TextBox>
                            <TextBox name="pickupTime" label="Pick Up Time" placeholder="" isDisabled={true}
                                     value={point.pickupTime}></TextBox>
                            <TextBox name="additionalInfo" label="Additional Info" placeholder="" isDisabled={true}
                                     value={point.additionalInfo}></TextBox>
                        </div>
                    ))
                }
                <hr className="my-2"></hr>
                {
                    trip.itinerary &&
                    <>

                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Itinerary
                        </Typography>
                        <TextBox name="overview" label="Overview" placeholder="Goa Vacation" isDisabled={true}
                                 value={trip.itinerary.overview}></TextBox>
                    </>
                }
                {
                    trip.itinerary.activities && <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-bold"
                    >
                        Activities
                    </Typography>
                }
                {
                    trip.itinerary && trip.itinerary.activities.map((activity, index) => (
                        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                            <TextBox name="name" label="Name" placeholder="Goa Vacation" isDisabled={true}
                                     value={activity.name}></TextBox>
                            <TextBox name="description" label="Description" placeholder="Goa Vacation" isDisabled={true}
                                     value={activity.description}></TextBox>
                        </div>
                    ))
                }
                {
                    trip.itinerary.schedules && <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-bold"
                    >
                        Schedules
                    </Typography>
                }
                {
                    trip.itinerary && trip.itinerary.schedules.map((schedule, index) => (
                        <>
                            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                <TextBox name="day" label="Day" placeholder="Goa Vacation" isDisabled={true}
                                         value={schedule.day}></TextBox>
                                <TextBox name="location" label="Location" placeholder="Goa Vacation" isDisabled={true}
                                         value={schedule.location}></TextBox>
                            </div>
                            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                <TextBox name="hotelName" label="Hotel Name" placeholder="Goa Vacation"
                                         isDisabled={true}
                                         value={schedule.stay.hotelName}></TextBox>
                                <TextBox name="address" label="Address" placeholder="" isDisabled={true}
                                         value={schedule.stay.address}></TextBox>
                                <TextBox name="checkIn" label="Check In" placeholder="" isDisabled={true}
                                         value={schedule.stay.checkIn}></TextBox>
                                <TextBox name="checkOut" label="Check Out" placeholder="" isDisabled={true}
                                         value={schedule.stay.checkOut}></TextBox>
                                <TextBox name="rating" label="Rating" placeholder="" isDisabled={true}
                                         value={schedule.stay.rating}></TextBox>
                            </div>
                            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                <TextBox name="isBreakfastIncluded" label="Breakfast Included" placeholder=""
                                         isDisabled={true}
                                         value={schedule.stay.isBreakfastIncluded}></TextBox>
                                <TextBox name="isLunchIncluded" label="Lunch Included" placeholder=""
                                         isDisabled={true}
                                         value={schedule.stay.isLunchIncluded}></TextBox>
                                <TextBox name="isDinnerIncluded" label="Dinner Included" placeholder=""
                                         isDisabled={true}
                                         value={schedule.stay.isDinnerIncluded}></TextBox>
                            </div>

                            {
                                schedule.stay.roomType.map((roomType, index) => (
                                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                                        <TextBox name="type" label="Room Type" placeholder=""
                                                 isDisabled={true}
                                                 value={roomType.type}></TextBox>
                                        <TextBox name="price" label="Trip Price" placeholder=""
                                                 isDisabled={true}
                                                 value={roomType.price}></TextBox>
                                    </div>
                                ))
                            }
                            <hr className="my-2"></hr>
                        </>
                    ))
                }
                <Button onClick={() => handleSave()}>Save</Button>
            </div>
            {error && <Typography color="red">Error: {error}</Typography>}
        </>
    );
}
