import React, {FC, useState} from "react";
import {Button, Input, Typography} from "@material-tailwind/react";
import {PickupPoint} from "../../Modal/Trip.ts";
import {useTrip} from "../../hook/useTrip.ts";

interface PickupPointProps {
    setPickupPoints: (pickupPoints: PickupPoint[]) => void;
}

export const PickupPointComponent: FC<PickupPointProps> = ({setPickupPoints}) => {
    const {trip} = useTrip();
    let initialState = {location: '', pickupTime: '', additionalInfo: ''};
    const [pickupPoint, setPickupPoint] = useState<PickupPoint>(initialState);
    const [pickupPointList, setPickupPointList] = useState<PickupPoint[]>(trip?.pickupPoint || []);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setPickupPoint((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const addPickUpPoint = () => {
        const list = [...pickupPointList, pickupPoint];
        setPickupPointList(list);
        setPickupPoints(list);
        setPickupPoint(initialState);
    };

    const removePickupPoint = (index: any) => {
        const list = [...pickupPointList];
        list.splice(index, 1);
        setPickupPoints(list);
        setPickupPointList(list);
    };
    return (
        <>
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-bold"
            >
                Pickup Points
            </Typography>

            {pickupPointList && pickupPointList.map((pickupPoint, index) => (
                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
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
                            name="name"
                            disabled={true}
                            value={pickupPoint.location}
                            labelProps={{
                                className: "hidden",
                            }}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>
                    <div className="w-full">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Pickup Time
                        </Typography>
                        <Input
                            size="lg"
                            name="pickupTime"
                            disabled={true}
                            value={pickupPoint.pickupTime}
                            labelProps={{
                                className: "hidden",
                            }}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>
                    <div className="w-full">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Additional Info
                        </Typography>
                        <Input
                            size="lg"
                            name="additionalInfo"
                            disabled={true}
                            value={pickupPoint.additionalInfo}
                            labelProps={{
                                className: "hidden",
                            }}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>
                    <Button onClick={() => removePickupPoint(index)}>Remove Pickup</Button>
                </div>
            ))}
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
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
                        value={pickupPoint.location}
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
                        Pickup Time
                    </Typography>
                    <Input
                        size="lg"
                        name="pickupTime"
                        value={pickupPoint.pickupTime}
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
                        Additional Info
                    </Typography>
                    <Input
                        size="lg"
                        name="additionalInfo"
                        value={pickupPoint.additionalInfo}
                        labelProps={{
                            className: "hidden",
                        }}
                        onChange={handleChange}
                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    />
                </div>
                <Button onClick={() => addPickUpPoint()}>Add Pickup</Button>
            </div>
        </>
    );
}
