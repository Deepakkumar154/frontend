import React, {useEffect, useState} from "react";
import {Trip} from "../Modal/Trip.ts";

export const TripContext = React.createContext<TripContextType | null>(null);

export const TripContextProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const initialValue: Trip = {
        description: "",
        origin: "",
        destination: "",
        startDate: "",
        endDate: "",
        noOfDays: 0,
        noOfNights: 0,
        type: "",
        category: "",
        noOfTravelers: 0,
        pickupPoint: [],
        itinerary: {
            overview: "",
            activities: [],
            schedules: [],
        },
    }
    const [trip, setTrip] = useState<Trip>(() => {

        // Load from local storage on initial render
        const savedTrip = localStorage.getItem('tripData');
        return savedTrip ? JSON.parse(savedTrip) : initialValue;
    });

    // Save to local storage whenever the trip changes
    useEffect(() => {
        if (trip) {
            localStorage.setItem('tripData', JSON.stringify(trip));
        }
    }, [trip]);

    // Reset function to clear both state and local storage
    const resetTrip = () => {
        localStorage.removeItem('tripData');
        setTrip(initialValue);
    };

    return (
        <TripContext.Provider value={{trip, setTrip, resetTrip}}>
            {children}
        </TripContext.Provider>
    );
}

interface TripContextType {
    trip: Trip | null;
    setTrip: (trip: any) => void;
    resetTrip: () => void;
}
