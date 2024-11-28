import React, {FC, useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, Input, Typography} from "@material-tailwind/react";
import {RoomType, Schedule} from "../../Modal/Trip.ts";
import {useTrip} from "../../hook/useTrip.ts";
import {Dropdown} from "../Dropdown/Dropdown.tsx";
import {Date} from "../../components/Date/Date.tsx";
import {format} from "date-fns";
import {RoomTypeComponent} from "../RoomType/RoomType.tsx";

interface ScheduleProps {
    setSchedules: (Schedules: Schedule[]) => void;
}

export const ScheduleComponent: FC<ScheduleProps> = ({setSchedules}) => {
    const {trip} = useTrip();
    let initialState = {
        day: "",
        location: "",
        stay: {
            hotelName: "",
            address: "",
            checkIn: "",
            checkOut: "",
            rating: "",
            isBreakfastIncluded: false,
            isLunchIncluded: false,
            isDinnerIncluded: false,
            roomType: []
        },
    };
    const [schedule, setSchedule] = useState<Schedule>(initialState);
    const [scheduleList, setScheduleList] = useState<Schedule[]>(trip?.itinerary?.schedules || []);
    let dayOptions = ["1", "2", "3", "4", "5"];
    const [checkIn, setCheckIn] = React.useState(schedule.stay.checkIn);
    const [checkOut, setCheckOut] = React.useState(schedule.stay.checkOut);
    const [resetRoomType, setResetRoomType] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name === "day" || name === "location") {
            setSchedule((prev) => ({
                ...prev,
                [name]: value
            }));
        } else {
            setSchedule((prev) => ({
                ...prev,
                stay: {
                    ...prev.stay,
                    [name]: value
                }
            }));
        }
    };

    const handleOptionChange = (name: string, value: string) => {
        if (name === "isBreakfastIncluded" || name === "isLunchIncluded" || name === "isDinnerIncluded") {
            setSchedule((prev) => ({
                ...prev,
                [name]: value == "Yes"
            }));
        } else {
            setSchedule((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    useEffect(() => {
        setSchedule((prevTrip) => ({
            ...prevTrip,
            stay: {
                ...prevTrip.stay,
                checkIn: checkIn ? format(checkIn, 'MM/dd/yyyy') : '',
            }
        }))
    }, [checkIn])

    useEffect(() => {
        setSchedule((prevTrip) => ({
            ...prevTrip,
            stay: {
                ...prevTrip.stay,
                checkOut: checkOut ? format(checkIn, 'MM/dd/yyyy') : '',
            }
        }))
    }, [checkOut])

    const addSchedule = () => {
        const list = [...scheduleList, schedule];
        setScheduleList(list);
        setSchedules(list);
        setSchedule(initialState);
        setResetRoomType(true);
    };

    const setRoomTypeInTrip = (roomType: RoomType[]) => {
        console.log(roomType)
        setSchedule((prev) => ({
            ...prev,
            stay: {
                ...prev.stay,
                roomType: roomType
            }
        }));
    };

    const removeSchedule = (index: any) => {
        const list = [...scheduleList];
        list.splice(index, 1);
        setSchedules(list);
        setScheduleList(list);
    };

    function convertBooleanToString(value: boolean) {
        return value ? "Yes" : "No";
    }

    return (
        <>
            <Card className="flex p-2">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-bold"
                >
                    Schedules
                </Typography>

                <div className="mb-6 flex flex-row items-end gap-4 md:flex-row">
                    {scheduleList && scheduleList.map((pickupPoint, index) => (
                        <Card className="mt-6 w-96">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Day: {pickupPoint.day}
                                </Typography>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Location: {pickupPoint.location}
                                </Typography>
                                <Typography>
                                    <p>Hotel Name: {pickupPoint.stay.hotelName}</p>
                                    <p>Address: {pickupPoint.stay.address}</p>
                                    <p>Check In: {pickupPoint.stay.checkIn}</p>
                                    <p>Check Out: {pickupPoint.stay.checkOut}</p>
                                    <p>Rating: {pickupPoint.stay.rating}</p>
                                    <p>Breakfast Included: {pickupPoint.stay.isBreakfastIncluded}</p>
                                    <p>Lunch Included: {pickupPoint.stay.isLunchIncluded}</p>
                                    <p>Dinner Included: {pickupPoint.stay.isDinnerIncluded}</p>
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button onClick={() => removeSchedule(index)}>Remove</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                    <Dropdown label="Day" name="day" options={dayOptions}
                              value={schedule.day}
                              handleOptionChange={handleOptionChange}></Dropdown>
                    <div className="w-full">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Location
                        </Typography>
                        <Input
                            size="lg"
                            name="location"
                            placeholder="Anjuna"
                            value={schedule.location}
                            labelProps={{
                                className: "hidden",
                            }}
                            onChange={handleChange}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>
                </div>
                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                    <div className="w-full">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Hotel Name
                        </Typography>
                        <Input
                            size="lg"
                            name="hotelName"
                            placeholder="Delhi"
                            value={schedule.stay.hotelName}
                            labelProps={{
                                className: "hidden",
                            }}
                            onChange={handleChange}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>
                    <div className="w-full">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Address
                        </Typography>
                        <Input
                            size="lg"
                            name="address"
                            placeholder="Goa Vacation"
                            value={schedule.stay.address}
                            labelProps={{
                                className: "hidden",
                            }}
                            onChange={handleChange}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>
                </div>
                <div className="mb-6 items-center gap-4">
                    <RoomTypeComponent setRoomTypeInTrip={setRoomTypeInTrip}
                                       restRoomType={resetRoomType}></RoomTypeComponent>
                </div>
                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                    <Date label="Check In" placeholder="1/09/2000" date={schedule.stay.checkIn}
                          setDate={setCheckIn}></Date>
                    <Date label="Check Out" placeholder="2/09/2000" date={schedule.stay.checkOut}
                          setDate={setCheckOut}></Date>
                    <div className="w-full">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Rating
                        </Typography>
                        <Input
                            size="lg"
                            name="rating"
                            placeholder="Goa Vacation"
                            value={schedule.stay.rating}
                            labelProps={{
                                className: "hidden",
                            }}
                            onChange={handleChange}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>
                </div>
                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                    <Dropdown label="Breakfast Included" name="isBreakfastIncluded" options={["Yes", "No"]}
                              value={convertBooleanToString(schedule.stay.isBreakfastIncluded)}
                              handleOptionChange={handleOptionChange}></Dropdown>
                    <Dropdown label="Lunch Included" name="isLunchIncluded" options={["Yes", "No"]}
                              value={convertBooleanToString(schedule.stay.isLunchIncluded)}
                              handleOptionChange={handleOptionChange}></Dropdown>
                    <Dropdown label="Dinner Included" name="isDinnerIncluded" options={["Yes", "No"]}
                              value={convertBooleanToString(schedule.stay.isLunchIncluded)}
                              handleOptionChange={handleOptionChange}></Dropdown>
                </div>
                <Button className="w-full" onClick={addSchedule}>Add</Button>
            </Card>
        </>
    );
}
