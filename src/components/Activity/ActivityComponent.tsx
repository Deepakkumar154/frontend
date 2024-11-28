import React, {FC, useState} from "react";
import {Button, Input, Typography} from "@material-tailwind/react";
import {Activity} from "../../Modal/Trip.ts";
import {useTrip} from "../../hook/useTrip.ts";

interface ActivityProps {
    setActivityInTrip: (activity: Activity[]) => void;
}

export const ActivityComponent: FC<ActivityProps> = ({setActivityInTrip}) => {
    const {trip} = useTrip();
    const [activities, setActivities] = useState<Activity>({name: '', description: ''});
    const [activitiesList, setActivitiesList] = useState<Activity[]>(trip?.itinerary?.activities || []);
    const handleActivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setActivities((prevActivity) => ({
            ...prevActivity,
            [name]: value
        }));
    };

    const addActivity = () => {
        const list = [...activitiesList, activities];
        setActivitiesList(list);
        setActivityInTrip(list);
        setActivities({name: '', description: ''});
    };

    const removeActivity = (index: any) => {
        const list = [...activitiesList];
        list.splice(index, 1);
        setActivityInTrip(list);
        setActivitiesList(list);
    };
    return (
        <>
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-bold"
            >
                Activities
            </Typography>

            {activitiesList && activitiesList.map((activity, index) => (
                <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                    <div className="w-full">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 font-bold"
                        >
                            Name
                        </Typography>
                        <Input
                            size="lg"
                            name="name"
                            value={activity.name}
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
                            Description
                        </Typography>
                        <Input
                            size="lg"
                            name="description"
                            value={activity.description}
                            labelProps={{
                                className: "hidden",
                            }}
                            onChange={() => handleActivityChange(event)}
                            className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        />
                    </div>
                    <Button onClick={() => removeActivity(index)}>Remove Activity</Button>
                </div>
            ))}
            <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                <div className="w-full">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-bold"
                    >
                        Name
                    </Typography>
                    <Input
                        size="lg"
                        name="name"
                        placeholder="Delhi"
                        labelProps={{
                            className: "hidden",
                        }}
                        value={activities.name}
                        onChange={() => handleActivityChange(event)}
                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    />
                </div>
                <div className="w-full">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-bold"
                    >
                        Description
                    </Typography>
                    <Input
                        size="lg"
                        name="description"
                        placeholder="Goa Vacation"
                        value={activities.description}
                        labelProps={{
                            className: "hidden",
                        }}
                        onChange={() => handleActivityChange(event)}
                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                    />
                </div>
                <Button onClick={() => addActivity()}>Add Activity</Button>
            </div>
        </>
    );
}
