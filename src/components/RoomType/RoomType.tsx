import React, {FC, useEffect, useState} from "react";
import {Button, Input, Typography} from "@material-tailwind/react";
import {RoomType} from "../../Modal/Trip.ts";
import {Dropdown} from "../Dropdown/Dropdown.tsx";

interface RoomTypeProps {
    restRoomType: boolean;
    setRoomTypeInTrip: (roomType: RoomType[]) => void;
}

export const RoomTypeComponent: FC<RoomTypeProps> = ({setRoomTypeInTrip, restRoomType}) => {
    let initialState = {type: '', price: ''};
    const [roomType, setRoomType] = useState<RoomType>(initialState);
    const [roomTypeList, setRoomTypeList] = useState<RoomType[]>([]);
    const handleRoomTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setRoomType((prevRoomType) => ({
            ...prevRoomType,
            [name]: value
        }));
    };

    useEffect(() => {
        setRoomTypeList([]);
    }, [restRoomType])

    const handleOptionChange = (name: string, value: string) => {
        setRoomType((prevRoomType) => ({
            ...prevRoomType,
            [name]: value
        }));
    };

    const addRoomType = () => {
        const list = [...roomTypeList, roomType];
        setRoomTypeList(list);
        setRoomTypeInTrip(list);
        setRoomType(initialState);
    };

    const removeRoomType = (index: any) => {
        const list = [...roomTypeList];
        list.splice(index, 1);
        setRoomTypeInTrip(list);
        setRoomTypeList(list);
    };
    return (
        <>
            {
                roomTypeList && roomTypeList.map((roomType, index) => (
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-bold"
                            >
                                RoomType
                            </Typography>
                            <Input
                                size="lg"
                                name="type"
                                disabled={true}
                                value={roomType.type}
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
                                Price
                            </Typography>
                            <Input
                                size="lg"
                                name="price"
                                disabled={true}
                                placeholder="1000"
                                value={roomType.price}
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                            />
                        </div>
                        <Button onClick={() => removeRoomType(index)}>Remove Type</Button>
                    </div>
                ))
            }
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                <Dropdown label="Type" name="type" options={["quadShare", "doubleShare", "singleRoom"]}
                          value={roomType.type}
                          handleOptionChange={handleOptionChange}></Dropdown>
                <div className="w-full">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-bold"
                    >
                        Price
                    </Typography>
                    <Input
                        size="lg"
                        name="price"
                        placeholder="1000"
                        value={roomType.price}
                        labelProps={{
                            className: "hidden",
                        }}
                        onChange={handleRoomTypeChange}
                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    />
                </div>
            </div>
            <Button onClick={() => addRoomType()}>Add Room Sharing Type</Button>
        </>
    );
}
