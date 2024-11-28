export type Trip = {
    description: string,
    origin: string,
    destination: string,
    startDate: string,
    endDate: string,
    noOfDays: number,
    noOfNights: number,
    type: string,
    category: string,
    noOfTravelers: number,
    pickupPoint: PickupPoint[]
    itinerary: Itinerary
}

export type PickupPoint = {
    location: string,
    pickupTime: string,
    additionalInfo: string,
}

export type Itinerary = {
    overview: string,
    activities: Activity[],
    schedules: Schedule[]
}

export type Activity = {
    name: string,
    description: string,
}

export type Schedule = {
    day: string,
    location: string,
    stay: Stay
}

export type Stay = {
    hotelName: string,
    address: string,
    checkIn: string,
    checkOut: string,
    rating: string,
    isBreakfastIncluded: boolean,
    isLunchIncluded: boolean,
    isDinnerIncluded: boolean,
    roomType: RoomType[]
}

export type RoomType = {
    type: string,
    price: string,
}
