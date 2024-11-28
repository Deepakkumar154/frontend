import {Trip} from "../Modal/Trip.ts";
import {fetchAPIRequestInterceptor} from "./AuthIntercepter.ts";

export const saveTrip = async (trip: Trip | null) => {
    const endPoint = "http://localhost:8080/api/v1/trip";
    try {
        const response = await fetchAPIRequestInterceptor(endPoint, {}, "POST", JSON.stringify(trip));
        return response.json();
    } catch (error) {
        console.error("Error saving data:", error);
        throw error;
    }
}

export const getTripsByAgent = async (agentId: number) => {
    const endpoint = "http://localhost:8080/api/v1/trip/agent/" + agentId;
    try {
        const response = await fetchAPIRequestInterceptor(endpoint, {}, "GET");
        if (response.status === 200) {
            return response.json();
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export const getTripsById = async (tripId: number) => {
    const endpoint = "http://localhost:8080/api/v1/trip/" + tripId;

    try {
        const response = await fetchAPIRequestInterceptor(endpoint, {}, "GET");
        return response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}


export const deleteTrip = async (tripId: string) => {
    const endpoint = "http://localhost:8080/api/v1/trip/" + tripId;

    try {
        var response = await fetchAPIRequestInterceptor(endpoint, {}, "DELETE");
        return response;
    } catch (error) {
        throw error;
    }
}
