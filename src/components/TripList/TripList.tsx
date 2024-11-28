import {Card, CardBody, CardHeader, IconButton, Tooltip, Typography,} from "@material-tailwind/react";
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {useEffect, useState} from "react";
import {deleteTrip, getTripsByAgent} from "../../api/trip.ts";
import {GetAllTripResponse} from "../../Modal/GetAllTripResponse.ts";
import {TrashIcon} from "@heroicons/react/16/solid";

const TABLE_HEAD = ["Origin-Destination", "Description", "From-To", "Type", "Category", "Travellers", "", ""];
export const TripList = () => {
    const [TripResponse, setTripResponse] = useState<GetAllTripResponse[]>([]);

    useEffect(() => {
        getTripsByAgent(2).then(res => {
            setTripResponse(res);
        }).catch(() => {
            setTripResponse([]);
        })
    }, [])

    useEffect(() => {
        console.log("TripResponse", TripResponse);
    }, [TripResponse])

    const removeTrip = (tripId: string) => {
        deleteTrip(tripId)
            .then(res => {
                console.log("Delete response:", res);
                window.location.reload();
            })
            .catch((e) => {
                console.log("Error while deleting trip:", e);
            });
    }

    return (
        <>
            <Header></Header>
            <Card className="h-full w-full container mx-auto text-justify my-4">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Trips
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                These are the list of trips added
                            </Typography>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="overflow-scroll px-0">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {TripResponse.length > 0 && TripResponse.map(
                            (
                                {
                                    id,
                                    description,
                                    origin,
                                    destination,
                                    startDate,
                                    endDate,
                                    type,
                                    category,
                                    noOfTravelers
                                },
                                index,
                            ) => {
                                const isLast = index === TripResponse.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold"
                                                >
                                                    {origin} - {destination}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {description}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {startDate} - {endDate}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {type}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {category}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {noOfTravelers}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Delete Trip">
                                                <IconButton variant="text">
                                                    <TrashIcon className="h-4 w-4"
                                                               onClick={() => removeTrip(id)}/>
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                        {/*<td className={classes}>*/}
                                        {/*    <Tooltip content="Edit Trip">*/}
                                        {/*        <IconButton variant="text">*/}
                                        {/*            <PencilIcon className="h-4 w-4"/>*/}
                                        {/*        </IconButton>*/}
                                        {/*    </Tooltip>*/}
                                        {/*</td>*/}
                                    </tr>
                                );
                            },
                        )}
                        </tbody>
                    </table>
                    {
                        TripResponse.length == 0 &&
                        <Typography variant="med" color="blue-gray" className="font-bold text-center w-full py-5">No
                            Trip found!</Typography>
                    }
                </CardBody>
            </Card>
            <Footer></Footer>
        </>
    )
}
